const CATEGORIES = [
  { id: 'all',       label: 'All places' },
  { id: 'nature',    label: 'Nature'     },
  { id: 'history',   label: 'History'    },
  { id: 'culture',   label: 'Culture'    },
  { id: 'adventure', label: 'Adventure'  },
]

const REGIONS = [
  { id: 'All regions',    label: 'All regions'    },
  { id: 'Minsk city',     label: 'Minsk city'     },
  { id: 'Minsk Region',   label: 'Minsk Region'   },
  { id: 'Brest Region',   label: 'Brest Region'   },
  { id: 'Grodno Region',  label: 'Grodno Region'  },
  { id: 'Vitebsk Region', label: 'Vitebsk Region' },
  { id: 'Mogilev Region', label: 'Mogilev Region' },
  { id: 'Gomel Region',   label: 'Gomel Region'   },
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
                  ? 'bg-green-800 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Region pills — same design language as categories */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {REGIONS.map(region => (
            <button
              key={region.id}
              onClick={() => onRegionChange(region.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeRegion === region.id
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              {region.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
