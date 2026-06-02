const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    alt: 'Lüks saç tasarımı',
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=400&q=80',
    alt: 'Profesyonel saç boyama',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138daaa6e4b6?auto=format&fit=crop&w=400&q=80',
    alt: 'Salon iç mekan',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80',
    alt: 'Saç bakımı',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80',
    alt: 'Makyaj uygulaması',
  },
  {
    src: 'https://images.unsplash.com/photo-1496440788672-7a5ab58e0c81?auto=format&fit=crop&w=400&q=80',
    alt: 'Saç şekillendirme',
  },
  {
    src: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?auto=format&fit=crop&w=400&q=80',
    alt: 'Ombre saç boyama',
  },
  {
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80',
    alt: 'Röfle uygulaması',
  },
]

export default function InstagramSection() {
  return (
    <section
      id="galeri"
      className="py-24 relative overflow-hidden"
      style={{ background: '#FFF8F5' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
          >
            Galeri
          </p>
          <h2
            className="text-4xl lg:text-5xl mb-2"
            style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
          >
            @hulyahairbeauty
          </h2>
          <div
            className="mx-auto mb-5"
            style={{ height: '2px', width: '48px', background: '#B9816F', borderRadius: '1px' }}
          />
          <a
            href="https://instagram.com/hulyahairbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
              color: 'white',
              boxShadow: '0 4px 16px rgba(131,58,180,0.30)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram&apos;da Takip Et
          </a>
        </div>

        {/* Masonry-style grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '200px',
          }}
        >
          {galleryImages.map((img, idx) => {
            // Make certain cells span 2 rows for visual interest
            const isLarge = idx === 0 || idx === 5
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  gridRow: isLarge ? 'span 2' : 'span 1',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(185,129,111,0.45)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
