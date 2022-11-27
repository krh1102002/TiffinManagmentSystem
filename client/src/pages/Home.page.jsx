import React from 'react'
import ChooseUs from '../components/ChooseUs'
import HeroSlider from '../components/HeroSlider'
import Info from '../components/Info'
import Testimonials from '../components/Testimonials'
import HomeLayout from '../layouts/Home.layout'

function HomePage() {
  return (
    <div>
      <HeroSlider />
      <ChooseUs />
      <Testimonials />
      <Info />
      
    </div>
  )
}

export default HomeLayout(HomePage)
