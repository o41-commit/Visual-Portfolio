import React from 'react'
import NavBar from './component/NavBar'
import Header from './component/Header'
import LogoBar from './component/LogoBar'
import Skills from './component/Skills'
import Gallery from './component/Gallery'
import Testimonials from './component/Testimonials'
import Contact from './component/Contact'

const App = () => {
  return (
    <div className='mx-9'>
      <NavBar />
      <Header />
      <LogoBar/>
      <Skills />
      <Gallery/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
