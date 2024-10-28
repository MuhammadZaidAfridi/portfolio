import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Banner from './Components/banner/Banner'
import Features from './Components/features/Features'
import Projects from './Components/projects/Projects'
import Resume from './Components/reume/Resume'

function App() {
  return (
    <div className='  bg-bodyColor text-lightText'>
      <div className='mx-9'>
        <Navbar />
        <Banner />
        <Features />
        <Projects/>
        <Resume/>
      </div>
    </div>
  )
}

export default App