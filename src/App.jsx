import React from 'react'
import { Brand, Community, Developers, Features, Footer, Hero, Implementation, Navbar, Slider, Start, Support } from './components'
import styles from './style'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
      <Slider />
      <Features />
      <Support />
      <Developers />
      <Implementation />
      <Community />
      <Start />
      <Footer />
    </div>
  )
}

export default App