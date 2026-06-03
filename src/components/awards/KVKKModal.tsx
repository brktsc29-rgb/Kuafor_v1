export default function KVKKModal() {
  const close = () => document.getElementById('kvkk-modal')?.classList.add('hidden')

  return (
    <div
      id="kvkk-modal"
      className="hidden fixed inset-0 z-[99999] flex items-center justify-center px-4"
      style={{ background: 'rgba(8,6,4,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) close() }}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        style={{ background: '#F8F5F2', borderRadius: 20, padding: '40px 32px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.6rem' }}>
            Gizlilik Politikası & KVKK
          </h2>
          <button
            onClick={close}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(42,33,29,0.4)', fontSize: '1.4rem', lineHeight: 1 }}
          >
            ✕
          </button>
        </div>

        <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.75)', fontSize: '0.82rem', lineHeight: 1.85 }}>

          <p style={{ marginBottom: 20 }}>
            <strong style={{ color: '#2A211D' }}>Veri Sorumlusu:</strong><br />
            HÜLYA Hair &amp; Beauty Studio — Turhal, Tokat
          </p>

          <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.05rem', marginBottom: 8 }}>
            1. Toplanan Kişisel Veriler
          </h3>
          <p style={{ marginBottom: 16 }}>
            Randevu talebi ve iletişim amacıyla ilettiğiniz ad, telefon numarası ve mesaj bilgileri işlenmektedir.
            WhatsApp üzerinden yapılan iletişimlerde yalnızca hizmet sunumu amacıyla kullanılmaktadır.
          </p>

          <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.05rem', marginBottom: 8 }}>
            2. Verilerin Kullanım Amacı
          </h3>
          <p style={{ marginBottom: 16 }}>
            Kişisel verileriniz; randevu yönetimi, hizmet bilgilendirmesi ve müşteri iletişimi amacıyla,
            6698 sayılı KVKK'nın 5. maddesi kapsamında işlenmektedir. Üçüncü şahıslarla paylaşılmamaktadır.
          </p>

          <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.05rem', marginBottom: 8 }}>
            3. Çerezler (Cookies)
          </h3>
          <p style={{ marginBottom: 16 }}>
            Sitemizde Google Maps harita servisi kullanılmaktadır. Bu servis teknik çerezler yerleştirebilir.
            Çerezleri tarayıcınızdan devre dışı bırakabilirsiniz; ancak bazı özellikler çalışmayabilir.
          </p>

          <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.05rem', marginBottom: 8 }}>
            4. Haklarınız
          </h3>
          <p style={{ marginBottom: 16 }}>
            KVKK'nın 11. maddesi uyarınca; verilerinize erişim, düzeltme, silme ve işlemeyi durdurma
            haklarına sahipsiniz. Taleplerinizi aşağıdaki iletişim kanalından iletebilirsiniz.
          </p>

          <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.05rem', marginBottom: 8 }}>
            5. İletişim
          </h3>
          <p style={{ marginBottom: 0 }}>
            KVKK kapsamındaki talepleriniz için WhatsApp veya telefon aracılığıyla bizimle iletişime geçebilirsiniz.
            <br />
            <strong style={{ color: '#C98F7A' }}>HÜLYA Hair &amp; Beauty Studio — Turhal, Tokat</strong>
          </p>
        </div>

        <button
          onClick={close}
          className="mt-8 w-full py-3 rounded-full text-[0.82rem] font-medium"
          style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', border: 'none', cursor: 'pointer' }}
        >
          Kapat
        </button>
      </div>
    </div>
  )
}
