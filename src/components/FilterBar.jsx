const CATEGORIES = [
  { id: 'all',       label: 'All places' },
  { id: 'nature',    label: 'Nature'     },
  { id: 'history',   label: 'History'    },
  { id: 'culture',   label: 'Culture'    },
  { id: 'adventure', label: 'Adventure'  },
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
      <div className="max-w-6xl mx-auto px-4 py-3">

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === cat.id
                  ? 'bg-green-800 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Region select */}
        <div className="mt-2">
          <select
            value={activeRegion}
            onChange={e => onRegionChange(e.target.value)}
            className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5
                       focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
            style={{ fontFamily: 'Manrope, sans-serif' }}>
            {REGIONS.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
