type GtagParams = { event_category?: string; event_label?: string; [key: string]: unknown }

export function gtagEvent(name: string, params?: GtagParams) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

// Global click delegation: tracks all wa.me, tel: and instagram links site-wide
// without needing to modify each component. Called once from main.tsx (browser only).
// Reads optional data-cta-location and data-service-name attributes for richer events.
export function initClickTracking() {
  document.addEventListener('click', (e) => {
    const anchor = (e.target as Element).closest('a')
    if (!anchor) return
    const href = (anchor as HTMLAnchorElement).href
    const ctaLocation = (anchor as HTMLElement).dataset.ctaLocation
    const serviceName = (anchor as HTMLElement).dataset.serviceName

    if (href.includes('wa.me/905412757160')) {
      gtagEvent('whatsapp_click', {
        event_category: 'engagement',
        event_label: 'whatsapp_button',
        page_path: window.location.pathname,
        page_title: document.title,
        ...(ctaLocation && { cta_location: ctaLocation }),
        ...(serviceName && { service_name: serviceName }),
      })
    } else if (href.startsWith('tel:')) {
      gtagEvent('phone_click', {
        event_category: 'engagement',
        event_label: 'phone_button',
        page_path: window.location.pathname,
        page_title: document.title,
        ...(ctaLocation && { cta_location: ctaLocation }),
        ...(serviceName && { service_name: serviceName }),
      })
    } else if (href.includes('instagram.com/hulyaakuafor')) {
      gtagEvent('instagram_click', { event_category: 'engagement', event_label: 'instagram_link' })
    }
  }, { capture: true })
}
