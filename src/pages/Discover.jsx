import { useState, useMemo } from 'react'
import places from '../data/places.json'
import PlaceCard from '../components/PlaceCard'
import FilterBar from '../components/FilterBar'

export default function Discover() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeRegion, setActiveRegion] = useState('All regions')

  const filtered = useMemo(() => {
    return places.filter(p => {
      const catMatch = activeCategory === 'all' || p.categories.includes(activeCategory)
      const regionMatch = activeRegion === 'All regions' || p.region === activeRegion
      return catMatch && regionMatch
    })
  }, [activeCategory, activeRegion])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--white-folk)' }}>
      <FilterBar
        activeCategory={activeCategory}
        activeRegion={activeRegion}
        onCategoryChange={setActiveCategory}
        onRegionChange={setActiveRegion}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Discover Belarus
          </h2>
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {filtered.length} place{filtered.length !== 1 ? 's' : ''} to explore
            {activeCategory !== 'all' || activeRegion !== 'All regions'
              ? ' — filtered'
              : ''}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(place => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
              No places found for this filter.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setActiveRegion('All regions') }}
              className="mt-4 text-green-800 text-sm underline"
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
