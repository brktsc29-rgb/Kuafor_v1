import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './AppRoutes'

export function render(url: string) {
  const helmetContext: { helmet?: any } = {}

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext
  const head = [
    helmet?.title?.toString()    ?? '',
    helmet?.priority?.toString() ?? '',
    helmet?.meta?.toString()     ?? '',
    helmet?.link?.toString()     ?? '',
    helmet?.script?.toString()   ?? '',
  ].filter(Boolean).join('\n    ')

  return { appHtml, head }
}
