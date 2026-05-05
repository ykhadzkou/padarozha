import { useState } from 'react'
import Hero from '../components/Hero'
import Discover from './Discover'

export default function Landing() {
  const [showDiscover, setShowDiscover] = useState(false)

  return (
    <div>
      <Hero onExplore={() => {
        setShowDiscover(true)
        setTimeout(() => {
          document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }} />
      <div id="discover">
        <Discover />
      </div>
    </div>
  )
}
