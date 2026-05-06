import { useState } from 'react'
import Hero from '../components/Hero'
import Discover from './Discover'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <div>
      <Hero onExplore={() => {
        setTimeout(() => {
          document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }} />
      <div id="discover">
        <Discover />
      </div>
      <Footer />
    </div>
  )
}
