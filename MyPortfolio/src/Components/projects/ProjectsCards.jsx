import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

export default function ProjectsCards({ title, des, src }) {
  return (
    <div className='w-full px-12 h-auto py-8 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327]
     group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700'>
      <div className='h-[80%]  flex justify-center items-center overflow-hidden'>
        <img src={src} alt="" className='  object-cover h-60 group-hover:scale-110 duration-300 cursor-pointer' />
      </div>

      <div className='mt-3 flex flex-col gap-5'>
        <div className=' flex justify-between items-center  '>
          <h2 className='text-pink-600'>{title}</h2>
          <div className='flex'>
            <div className='flex space-x-2 '>
              <BsGithub className='bg-black p-2 w-8 h-8 text-lg rounded-full text-gray-400 hover:text-pink-800 duration-200 cursor-pointer' />
              <FaGlobe className='bg-black p-2 w-8 h-8 rounded-full hover:text-pink-800 duration-200 cursor-pointer ' />
            </div>
          </div>
        </div>
        <h2>{des}</h2>
        <div></div>
      </div>


    </div>
  )
}
