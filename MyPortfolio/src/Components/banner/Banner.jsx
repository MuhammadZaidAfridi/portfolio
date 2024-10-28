import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiFigma, SiNextdotjs, } from 'react-icons/si'
import bannerImg from '../../assets/images/bannerImg.png'
// import developer from '../../assets/images/developer.png'
// import profile from '../../assets/images/profile.jpg'
// import profile1 from '../../assets/images/profile1.jpg'
import developer from '../../assets/images/developer.png'



 const Banner=() => {
    const [writingText] = useTypewriter({
        words: ['Professional Coder', 'Fronted Developer', 'UI Designer', 'One Year Self Experience'],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 10,
        delaySpeed: 1000,

    })
    return (
        // <section id='home' className='h-[700px] border-b-[4px] border-white w-full pb-20 flex'>Banner</section>
        <section id='home' className='py-24 md:h-[570px]  '>

            <div className='  md:flex space-x-2 overflow-hidden'>

               <div className='  flex-col gap-16 md:w-1/2 '>
                 
                    <div className=' m-4 flex flex-col gap-6'>
                        <h2>My Portfolio Website </h2>
                        <h1 className='text-4xl'>HI, I'm<span className='text-pink-600 font-bold '> Muhmmad zaid </span> </h1>
                        <h2 className='text-3xl font-bold text-white'> A <span>{writingText} .</span>
                            <Cursor
                                cursorBlinking='false'
                                cursorStyle='|'
                                cursorColor='#ff014f' />
                        </h2>
                        <p className='  tracking-wide leading-6 '>With a bachelor's degree in computer science from islamia college univeristy peshawar .This is highly driven individual has always maintianed an outstanding academic record. My arew experties is front-end web development, where i successfully combine a strong academic background with real-world experience. </p>
                    </div>

                    <div className=' container mx-auto   md:flex p-3 gap-3 '>

                        <div className=' w-1/2 flex flex-col gap-3'>
                            <h3>FIND ME IN</h3>
                            <div className='flex gap-4'>
                                <span className='bannerIcon '><FaTwitter /></span>
                                <span className='bannerIcon'><FaLinkedinIn /></span>
                                <span className='bannerIcon'><FaFacebookF /></span>
                            </div>
                        </div>

                        <div className=' w-1/2 flex flex-col gap-3'>
                            <h3>BEST SKILL ON</h3>
                            <div className='flex gap-4  '>
                                <span className='bannerIcon'><FaReact /></span>
                                <span className='bannerIcon'><SiNextdotjs /></span>
                                <span className='bannerIcon'><SiTailwindcss /></span>
                                <span className='bannerIcon'><SiFigma /></span>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='   '>
                    <img
                        className=' mt-3 md:w-[470px] md:h-[457px]  lg:w-[500px] lg:h-[500px]  md:mt-7 lg:mb-7 lg:ml-8 xl:ml-20 '
                        src={developer}
                        alt="frontend developer image"
                    />
                </div>

            </div>
        </section>
    )
}
export default Banner