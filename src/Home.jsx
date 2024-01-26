import React from 'react'
import NavbarComp from './components/NavbarComp'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <NavbarComp /> */}
      <HeroSection />
      <Footer />
    </div>
  )
}
