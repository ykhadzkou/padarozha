const CATEGORY_STYLES = {
  nature:    { bg: 'bg-green-100',  text: 'text-green-800',  label: 'Nature'    },
  history:   { bg: 'bg-amber-100',  text: 'text-amber-800',  label: 'History'   },
  culture:   { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Culture'   },
  adventure: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Adventure' },
}

const PLACEHOLDER_IMAGES = {
  nature:    'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=75&auto=format&fit=crop',
  history:   'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=75&auto=format&fit=crop',
  culture:   'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=75&auto=format&fit=crop',
  adventure: 'https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=600&q=75&auto=format&fit=crop',
}

export default function PlaceCard({ place, onClick }) {
  const primaryCat = place.categories[0]
  const style = CATEGORY_STYLES[primaryCat] || CATEGORY_STYLES.nature
  const image = PLACEHOLDER_IMAGES[primaryCat] || PLACEHOLDER_IMAGES.nature

  return (
    <div
      onClick={() => onClick && onClick(place)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md
                 transition-all duration-300 hover:-translate-y-1 border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {place.hidden_gem && (
          <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-semibold
                          px-2.5 py-1 rounded-full flex items-center gap-1 shadow"
               style={{ fontFamily: 'Manrope, sans-serif' }}>
            <span>◆</span> Hidden gem
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {place.categories.map(cat => {
            const s = CATEGORY_STYLES[cat] || style
            return (
              <span key={cat}
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${s.bg} ${s.text}`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}>
                {s.label}
              </span>
            )
          })}
        </div>

        <h3 className="font-semibold text-gray-900 text-base leading-snug mb-1"
            style={{ fontFamily: 'Playfair Display, serif' }}>
          {place.name}
        </h3>

        <p className="text-xs text-gray-400 mb-3 flex items-center gap-1"
           style={{ fontFamily: 'Manrope, sans-serif' }}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {place.region}
        </p>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3"
           style={{ fontFamily: 'Manrope, sans-serif' }}>
          {place.description}
        </p>
      </div>
    </div>
  )
}
