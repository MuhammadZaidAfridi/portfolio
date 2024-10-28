import React from 'react'
import { motion } from 'framer-motion'
export default function ExperienceCard() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
            <div className='px-12 w-[250px] lg:w-[540px] lg:h-[400px] flex items-center  mx-auto py-8 rounded-lg shadow-shadowOne  bg-gradient-to-r from-bodyColor to-[#202327]
     group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700'>
                <h1>
                    My name is Muhammad zaid , i have completed bscs recently from islamia college univeristy . I have frontend React developer,
                    i am self practice from one year in fronted developing
                </h1>
            </div>
        </motion.div>
    )
}
