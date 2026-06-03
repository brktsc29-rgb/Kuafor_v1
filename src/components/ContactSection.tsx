import { useState, FormEvent } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', phone: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Adres',
      value: 'Güneşli Mah. Güneşli Cad. No:42\nTurhal, Tokat 34212',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.45 10.45 19.79 19.79 0 01.38 1.82 2 2 0 012.37 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: 'Telefon',
      value: '+90 500 123 45 67',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'E-posta',
      value: 'info@hulyabeautystudio.com',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </svg>
      ),
      label: 'Çalışma Saatleri',
      value: 'Pzt–Cmt: 09:00 – 19:00\nPazar: Kapalı',
    },
  ]

  const services = [
    'Saç Kesimi',
    'Ombre & Sombre',
    'Röfle',
    'Keratin Bakım',
    'Gelin Saçı',
    'Profesyonel Makyaj',
    'Diğer',
  ]

  return (
    <section
      id="iletisim"
      className="py-24 relative overflow-hidden"
      style={{ background: '#FFF8F5' }}
    >
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(185,129,111,0.06) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
          >
            Bize Ulaşın
          </p>
          <h2
            className="text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
          >
            Randevu Alın
          </h2>
          <div
            className="mx-auto mb-4"
            style={{ height: '2px', width: '48px', background: '#B9816F', borderRadius: '1px' }}
          />
          <p
            className="text-sm max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
          >
            Size en uygun zamanı rezerve etmek için bizimle iletişime geçin.
            En kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(185,129,111,0.10)',
                      border: '1px solid rgba(185,129,111,0.20)',
                      color: '#B9816F',
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
                    >
                      {info.label}
                    </p>
                    <p
                      className="text-sm leading-relaxed whitespace-pre-line"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33' }}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://wa.me/905001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                style={{ fontFamily: 'Inter, sans-serif', background: '#25D366' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+905001234567"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  border: '1.5px solid #B9816F',
                  color: '#B9816F',
                  background: 'transparent',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.45 10.45 19.79 19.79 0 01.38 1.82 2 2 0 012.37 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Ara
              </a>
            </div>

            {/* Map Placeholder */}
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                height: '256px',
                background: 'linear-gradient(135deg, #F0E0D6, #E9D6CE)',
                border: '1px solid #E9D6CE',
              }}
            >
              <div className="text-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B9816F"
                  strokeWidth="1.5"
                  className="mx-auto mb-2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p
                  className="text-sm font-medium"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
                >
                  Harita
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                >
                  Turhal, Tokat
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="rounded-3xl p-8"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              background: 'rgba(255,255,255,0.75)',
              border: '1px solid #E9D6CE',
              boxShadow: '0 8px 40px rgba(185,129,111,0.10)',
            }}
          >
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
            >
              Randevu Formu
            </h3>

            {submitted && (
              <div
                className="mb-6 px-5 py-4 rounded-2xl text-sm"
                style={{
                  background: 'rgba(185,129,111,0.10)',
                  border: '1px solid rgba(185,129,111,0.25)',
                  color: '#B9816F',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                ✓ Mesajınız alındı! En kısa sürede sizinle iletişime geçeceğiz.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block text-xs font-medium mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                >
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'rgba(255,248,245,0.80)',
                    border: '1px solid #E9D6CE',
                    color: '#1F1A17',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#B9816F')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#E9D6CE')}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                >
                  Telefon Numarası
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="05XX XXX XX XX"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'rgba(255,248,245,0.80)',
                    border: '1px solid #E9D6CE',
                    color: '#1F1A17',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#B9816F')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#E9D6CE')}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                >
                  Hizmet Seçin
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'rgba(255,248,245,0.80)',
                    border: '1px solid #E9D6CE',
                    color: formData.service ? '#1F1A17' : '#7A6A63',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#B9816F')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#E9D6CE')}
                >
                  <option value="" disabled>
                    Hizmet seçiniz...
                  </option>
                  {services.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                >
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Randevu tarihi tercihiniz veya eklemek istediğiniz notlar..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'rgba(255,248,245,0.80)',
                    border: '1px solid #E9D6CE',
                    color: '#1F1A17',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#B9816F')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#E9D6CE')}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'linear-gradient(135deg, #B9816F, #C9917F)',
                  boxShadow: '0 4px 20px rgba(185,129,111,0.30)',
                }}
              >
                Randevu Talebi Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
