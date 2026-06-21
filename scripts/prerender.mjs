/**
 * Prerender script — React SSR ile her route için statik HTML üretir.
 * `npm run build` sonunda otomatik çalışır.
 *
 * react-helmet-async v3 SSR modu için kritik:
 *   isDocument = !!(window && window.document && window.document.createElement)
 * window.document TANIMLI OLMAMALI → Helmet sunucu modunu kullanır ve
 * context.helmet'ı doldurur.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname }                                       from 'node:path'
import { fileURLToPath, pathToFileURL }                        from 'node:url'

// ── DOM element mock factory ──────────────────────────────────────────────────
function mockStyle() {
  const p = {}
  return new Proxy({
    getPropertyValue: (n) => p[n] ?? '',
    setProperty:      (n, v) => { p[n] = v },
    removeProperty:   (n) => { delete p[n] },
  }, {
    get: (t, k) => (k in t) ? t[k] : (p[k] ?? ''),
    set: (t, k, v) => { if (!(k in t)) p[k] = v; return true },
  })
}

function mockEl(tag = 'div') {
  return {
    tagName:          tag.toUpperCase(),
    nodeType:         1,
    style:            mockStyle(),
    innerHTML:        '',
    innerText:        '',
    textContent:      '',
    id:               '',
    className:        '',
    dataset:          {},
    children:         [],
    childNodes:       [],
    parentElement:    null,
    parentNode:       null,
    offsetWidth:      1440,
    offsetHeight:     900,
    scrollWidth:      0,
    scrollHeight:     0,
    scrollTop:        0,
    scrollLeft:       0,
    clientWidth:      1440,
    clientHeight:     900,
    scrollingElement: null,
    getBoundingClientRect: () => ({ top:0, left:0, right:1440, bottom:900, width:1440, height:900, x:0, y:0, toJSON:()=>{} }),
    hasAttribute:        () => false,
    getAttribute:        () => null,
    setAttribute:        () => {},
    removeAttribute:     () => {},
    addEventListener:    () => {},
    removeEventListener: () => {},
    dispatchEvent:       () => true,
    appendChild:         () => {},
    removeChild:         () => {},
    insertBefore:        () => {},
    contains:            () => false,
    matches:             () => false,
    closest:             () => null,
    querySelector:       () => null,
    querySelectorAll:    () => [],
    cloneNode:           function() { return this },
    focus:               () => {},
    blur:                () => {},
    classList: { add(){}, remove(){}, toggle(){}, contains(){ return false }, replace(){} },
  }
}

// ── Browser globals mock ──────────────────────────────────────────────────────
//
// KRİTİK: window.document TANIMLANMIYOR.
// react-helmet-async şunu kontrol eder:
//   isDocument = !!(window && window.document && window.document.createElement)
// window.document undefined olursa isDocument=false → Helmet SSR modunda çalışır
// ve context.helmet objesini doldurur.
//
const _matchMedia = () => ({
  matches:false, media:'', onchange:null,
  addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){},
  dispatchEvent(){ return true },
})

globalThis.window = {
  innerWidth:1440, innerHeight:900, outerWidth:1440, outerHeight:900,
  scrollX:0, scrollY:0, pageXOffset:0, pageYOffset:0, devicePixelRatio:1,
  scrollTo:    ()=>{},
  scrollBy:    ()=>{},
  addEventListener:    ()=>{},
  removeEventListener: ()=>{},
  dispatchEvent:       ()=>true,
  matchMedia:          _matchMedia,
  requestAnimationFrame: (cb)=>setTimeout(cb,16),
  cancelAnimationFrame:  (id)=>clearTimeout(id),
  getComputedStyle: ()=>({ getPropertyValue:()=>'', setProperty(){}, removeProperty(){}, display:'block' }),
  history:  { pushState(){}, replaceState(){}, scrollRestoration:'auto', back(){}, forward(){}, go(){}, length:1 },
  performance: { now:()=>Date.now(), mark(){}, measure(){}, getEntriesByName:()=>[], getEntries:()=>[] },
  CSS: { supports:()=>false, escape:(s)=>s },
  screen: { width:1440, height:900, availWidth:1440, availHeight:900 },
  get self() { return globalThis.window },
  // document bilerek eklenmedi — Helmet SSR modunu tetiklemek için
}

// Node.js v22: navigator/location getter-only
;[
  ['navigator', { userAgent:'node/22', platform:'linux', language:'tr', languages:['tr'], onLine:true }],
  ['location',  { href:'https://www.hulyastudio.com', pathname:'/', search:'', hash:'', origin:'https://www.hulyastudio.com', hostname:'hulyastudio.com', protocol:'https:' }],
  ['screen',    { width:1440, height:900, availWidth:1440, availHeight:900 }],
].forEach(([k,v])=>{
  try { Object.defineProperty(globalThis, k, { value:v, writable:true, configurable:true }) }
  catch(_) {}
})

const _body  = mockEl('body')
const _docEl = mockEl('html')
_docEl.scrollingElement = _body

globalThis.document = {
  createElement:          (tag)=>mockEl(tag),
  createTextNode:         ()=>({ nodeType:3, textContent:'' }),
  createDocumentFragment: ()=>({ appendChild(){}, childNodes:[] }),
  querySelector:          ()=>null,
  querySelectorAll:       ()=>[],
  getElementById:         ()=>null,
  getElementsByTagName:   (t)=>t==='body'?[_body]:[],
  getElementsByClassName: ()=>[],
  body:                   _body,
  head:                   mockEl('head'),
  documentElement:        _docEl,
  readyState:             'complete',
  addEventListener:       ()=>{},
  removeEventListener:    ()=>{},
  dispatchEvent:          ()=>true,
}

globalThis.self              = globalThis.window
globalThis.matchMedia        = _matchMedia
globalThis.requestAnimationFrame = (cb)=>setTimeout(cb,16)
globalThis.cancelAnimationFrame  = (id)=>clearTimeout(id)
globalThis.IntersectionObserver  = class { constructor(){} observe(){} unobserve(){} disconnect(){} }
globalThis.ResizeObserver        = class { constructor(){} observe(){} unobserve(){} disconnect(){} }
globalThis.MutationObserver      = class { constructor(){} observe(){} disconnect(){} takeRecords(){ return [] } }
globalThis.CustomEvent           = class CustomEvent extends Event { constructor(e,o={}){ super(e,o); this.detail=o.detail??null } }
globalThis.scrollTo              = ()=>{}
globalThis.scrollBy              = ()=>{}
globalThis.scrollX               = 0
globalThis.scrollY               = 0
globalThis.pageXOffset           = 0
globalThis.pageYOffset           = 0
globalThis.innerWidth            = 1440
globalThis.innerHeight           = 900
globalThis.outerWidth            = 1440
globalThis.outerHeight           = 900
globalThis.devicePixelRatio      = 1
globalThis.CSS                   = { supports:()=>false, escape:(s)=>s }
globalThis.performance           = { now:()=>Date.now(), mark(){}, measure(){}, getEntriesByName:()=>[], getEntries:()=>[] }
globalThis.getComputedStyle      = ()=>({ getPropertyValue:()=>'', setProperty(){}, removeProperty(){}, display:'block' })
globalThis.addEventListener      = ()=>{}
globalThis.removeEventListener   = ()=>{}
globalThis.dispatchEvent         = ()=>true

// ── Routes ────────────────────────────────────────────────────────────────────
const ROUTES = [
  '/',
  '/tokat-kuafor',
  '/tokat-gelin-saci',
  '/turhal-kuafor',
  '/tokat-ombre',
  '/amasya-kuafor',
  '/tokat-makyaj',
]

// ── Paths ─────────────────────────────────────────────────────────────────────
const __dirname    = dirname(fileURLToPath(import.meta.url))
const distDir      = join(__dirname, '../dist')
const serverBundle = join(distDir, 'server/entry-server.js')

if (!existsSync(serverBundle)) {
  console.error('Hata: dist/server/entry-server.js bulunamadı.')
  process.exit(1)
}

const template   = readFileSync(join(distDir, 'index.html'), 'utf-8')
const { render } = await import(pathToFileURL(serverBundle).href)

// ── Strip Framer Motion initial animation styles ───────────────────────────────
// Framer Motion bakes `initial` prop values (opacity:0, translateY) into the
// server-rendered HTML. We remove them so Googlebot sees visible content.
// Client-side React hydration restores and runs animations normally.
function stripInitialStyles(html) {
  return html.replace(/style="([^"]*)"/g, (_, attrs) => {
    const cleaned = attrs
      .split(';')
      .map(p => p.trim())
      .filter(p => {
        if (!p) return false
        if (p === 'opacity:0') return false
        if (/^transform:translateY\(-?\d/.test(p)) return false
        return true
      })
      .join(';')
    return cleaned ? `style="${cleaned}"` : ''
  })
}

// ── Render loop ───────────────────────────────────────────────────────────────
const results = []
let ok = 0

for (const route of ROUTES) {
  try {
    const { appHtml, head } = render(route)

    const html = stripInitialStyles(
      template
        .replace('</head>', `${head || ''}\n</head>`)
        .replace('id="root">', `id="root">${appHtml || ''}`)
    )

    if (route === '/') {
      writeFileSync(join(distDir, 'index.html'), html, 'utf-8')
    } else {
      const dir = join(distDir, route.slice(1))
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
      writeFileSync(join(dir, 'index.html'), html, 'utf-8')
    }

    results.push(`  ✓  ${route}`)
    ok++
  } catch (err) {
    results.push(`  ✗  ${route}  →  ${err.message}`)
    console.error(err)
  }
}

console.log(`\nPrerender: ${ok}/${ROUTES.length} sayfa tamamlandı\n`)
results.forEach((r) => console.log(r))
console.log()
