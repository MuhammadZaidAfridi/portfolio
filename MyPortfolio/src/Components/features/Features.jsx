import React from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { FaMobile, FaGlobe, FaBars } from 'react-icons/fa'
import { SiProgress, SiAntdesign } from 'react-icons/si'
import { CgWebsite } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";

export default function Features() {
  return (
    <section
      id='features'
      className='md:h-[1070px] lg:[900px] xl:h-[620px] mt-20'>

      <div className=' mb-9 pt-16'>
        <h3 className='uppercase text-lightText'>features</h3>
        <h1 className='capitalize font-bold text-4xl text-pink-700 flex justify-center items-center  '>What i do</h1>
      </div>



      <div className='  '>
        <div className=' ml-3  md:flex md:flex-wrap justify-evenly   border-red-300 gap-y-4'>

          <div className='ResumeBox  mt-3 md:block'>
            <h2 className='pb-4 text-4xl text-pink-700'><SiAntdesign /></h2>
            <h1 className='pb-4 text-3xl font-bold  '>App Developer</h1>
            <p className=''>  I am an intermediate-level Tailwind CSS designer with a passion for creating responsive web applications. My focus on clean code and efficient design helps me deliver user-friendly interfaces that enhance the overall experience</p>
          </div>
          <div className='ResumeBox  mt-3 md:block'>
            <h2 className='pb-4 text-4xl text-pink-700'><CgWebsite /></h2>
            <h1 className='pb-4 text-3xl font-bold  '>App Developer</h1>
            <p className=''>I'm working on front-end web developer from one year ,where i successfully combine a strong academic background with real-wolrd experience.</p>
          </div>
          <div className='ResumeBox  mt-3 md:block'>
            <h2 className='pb-4 text-4xl text-pink-700'><AiFillAppstore /></h2>
            <h1 className='pb-4 text-3xl font-bold  '>App Developer</h1>
            <p className=''>I'm working on front-end developing and also make little bittler app developing .My area of experties is front-end web and app developing</p>
          </div>

        </div>
      </div>


    </section>
  )
}
