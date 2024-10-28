import React from 'react'
import { motion } from 'framer-motion'
export default function ProjectsCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className='px-12  lg:block w-[250px] lg:w-[560px] lg:h-[400px] py-8 rounded-lg shadow-shadowOne flex flex-col gap-1 bg-gradient-to-r from-bodyColor to-[#202327]
     group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700'>
        <h1 className='text-2xl text-pink-700 font-semibold'>Projects</h1>
        <p className='text-xl'>I have make some intermediate level react projects which is given below</p>
        <ul className='ml-4'>
          <li>Donation website for univeristy</li>
          <li>Weather App</li>
          <li>Quiz App</li>
          <li>Todo App</li>
          <li>Calculator app</li>
          <li>Portfolio app</li>
          
          <li>Timer App</li>
        </ul>
      </div>
    </motion.div>
  )
}
