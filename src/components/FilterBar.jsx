const CATEGORIES = [
  { id: 'all',       label: 'All places', activeClass: 'bg-green-800 text-white'  },
  { id: 'nature',    label: 'Nature',     activeClass: 'bg-green-700 text-white'  },
  { id: 'history',   label: 'History',    activeClass: 'bg-amber-700 text-white'  },
  { id: 'culture',   label: 'Culture',    activeClass: 'bg-purple-700 text-white' },
  { id: 'adventure', label: 'Adventure',  activeClass: 'bg-orange-600 text-white' },
]

const REGIONS = [
  'All regions',
  'Minsk city',
  'Minsk Region',
  'Brest Region',
  'Grodno Region',
  'Vitebsk Region',
  'Mogilev Region',
  'Gomel Region',
]

export default function FilterBar({ activeCategory, activeRegion, onCategoryChange, onRegionChange }) {
  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === cat.id
                  ? `${cat.activeClass} shadow-sm`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Region pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {REGIONS.map(region => (
            <button
              key={region}
              onClick={() => onRegionChange(region)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeRegion === region
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              {region}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
