import React from 'react'
import { motion } from 'framer-motion'

export default function EducationCard() {
  return (


    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >

      <div className='  px-10 p-2 w-[250px]  scroll lg:block lg:w-[560px] lg:h-[400px] flex flex-col gap-4 container mx-auto py-8 rounded-lg shadow-shadowOne  bg-gradient-to-r from-bodyColor to-[#202327]
     group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700 '>
        <div className='flex flex-col gap-2 '>
          <h1 className='text-4xl font-semibold'>Secondary Education</h1>
          <p className='ml-5 text-xl'>i have completed my Secondary education from islamia college peshawar with A grade which is honorable for me session 2017 to 2019.</p>
        </div>
        <div>
          <h1 className='text-4xl font-semibold'>Graduate</h1>
          <p className='text-xl ml-5'>I have completed my bachelor degree in  computer science  from islamia college university peshawar session 2019 to 2024. </p>
        </div>
    </div>
    </motion.div>
  )
}
