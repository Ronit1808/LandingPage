import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Works from './components/Works'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Views from './components/Views'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Expertise/>
      <Works/>
      <Experience/>
      <Blog/>
      <Views/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App