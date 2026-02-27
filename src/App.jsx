import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import NavBar from './Components/NavBar'

import FeatureCards from './Sections/FeatureCards'
import ExperienceSection from './Sections/ExperienceSection'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection/> */}
      <FeatureCards />
      <ExperienceSection/>
    </>
  )
}

export default App