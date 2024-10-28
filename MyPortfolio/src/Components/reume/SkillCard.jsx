import React from 'react'
import { motion } from 'framer-motion'
function SkillCard() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >    
        <div className='w-[230px] lg:w-[600px] px-12 h-auto py-8  rounded-lg shadow-shadowOne flex flex-col gap-[11px] bg-gradient-to-r from-bodyColor to-[#202327]  group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700  '>



                <div className=' relative mb-3 overflow-x-hidden'>
                    <p className='text-sm capitalize  absolute -top-[6px] '>html</p>
                    <motion.span
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='w-full h-[6px] bgOpacity inline-flex rounded-md '>
                        <span className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-700 to-red-600 rounded-md relative'>
                            <span className='-top-5 right-0 absolute font-light'>100%</span>
                        </span>
                    </motion.span>
                </div>

                <div className='relative mb-3 overflow-x-hidden'>
                    <p className='text-sm capitalize absolute -top-[5px] '>CSS3</p>
                    <motion.span
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='w-full h-[6px]  bgOpacity inline-flex rounded-md '>
                        <span className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-600 rounded-md relative'>
                            <span className=' -top-5 right-0 absolute font-light'>85%</span>
                        </span>
                    </motion.span>
                </div>

                <div className='relative mb-3 overflow-x-hidden'>
                    <p className='text-sm capitalize absolute -top-[6px] '>Tailwind Css</p>
                    <motion.span
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='w-full h-[6px] bgOpacity inline-flex rounded-md '>
                        <span className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-700 to-red-500 rounded-md relative'>
                            <span className='-top-5 right-0 absolute font-light'>90%</span>
                        </span>
                    </motion.span>

                </div>

                <div className='relative mb-3 overflow-x-hidden'>
                    <p className='text-sm capitalize absolute -top-[6px] '>javascript</p>
                    <motion.span
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='w-full h-[6px]  bgOpacity inline-flex rounded-md'>
                        <span className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-700 to-red-600 rounded-md relative'>
                            <span className='-top-5 right-0 absolute font-light '>70%</span>
                        </span>
                    </motion.span>
                </div>

                <div className='relative mb-3  '>
                    <p className='text-sm capitalize absolute -top-[5px] '>react</p>
                    <motion.span
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='w-full h-[6px]  bgOpacity inline-flex rounded-md '>
                        <span className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-700 to-red-600 rounded-md relative'>
                            <span className='-top-5 right-0 absolute font-light'>85%</span>
                        </span>
                    </motion.span>
                </div>


                <div className='overflow-x-hidden relative mb-3 '>
                    <p className='text-sm capitalize absolute -top-[6px]'>MS</p>
                    <motion.span
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='w-full h-[6px]  bgOpacity inline-flex rounded-md '>
                        <span className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-700 to-red-600 rounded-md relative'>
                            <span className='-top-5 right-0 absolute fontligh font-light'>60%</span>
                        </span>
                    </motion.span>
                </div>

                {/* <div className='relative mb-3 overflow-x-hidden'>
                    <p className='text-sm capitalize absolute  -top-[6px]'>Github</p>
                    <motion.span
                     initial={ { x: '-100%', opacity : 0}}
                     animate={ { x: 0, opacity : 1}}
                     transition={ { duration:0.6, delay : 0.4}}
                    className='w-full h-[6px]  bgOpacity inline-flex rounded-md '>
                        <span className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-700 to-red-600 rounded-md relative'>
                            <span className='-top-5 right-0 absolute fontligh font-light'>60%</span>
                        </span>
                    </motion.span>
                </div> */}

                <div className='relative mb-3 overflow-x-hidden  p-[2px] lg:block'>
                    <p className='text-sm capitalize absolute -top-[6px]'>Typing 45</p>
                    <motion.span
                    initial={ { x: '-100%', opacity : 0}}
                    animate={ { x: 0, opacity : 1}}
                    transition={ { duration:0.6, delay : 0.4}} 
                    className='w-full h-[6px] bgOpacity inline-flex rounded-md '>
                        <span className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-700 to-red-600 rounded-md relative'>
                            <span className='-top-5 right-0 absolute fontligh font-light'>100%</span>
                        </span>
                    </motion.span>
                </div>
            </div>

        </motion.div>

    )
}

export default SkillCard