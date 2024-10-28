
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/images/logo.png'
import { navLinksdata } from '../../Constants'
import { AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='sticky top-0 z-40 bg-bodyColor h-24 flex justify-between items-center border-gray-700 border-b-2'>

      <div >
        <img src={logo} alt="pic" />
      </div>

      <div >
        {/* Desktop Releated Design */}
        <ul className='hidden md:flex items-center gap-8 '>

          {navLinksdata.map(({ _id, title, link }) =>
            <li className='  text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-pink-600 duration-300' key={_id} >
              <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-95}
                duration={900}
              >
                {title}
              </Link>
            </li>
          )}

        </ul>
      </div>

      
      <div className='md:hidden' onClick={handleNav}>
        {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </div>

      {/* Responsive Releated Design */}
      <ul className={nav ? 'fixed left-0 top-24 w-[60%] h-screen md:hidden text-white border-r-gray-900 bg-[#000300] ease-in-out duration-700 ' : 'ease-in-out duration-900  fixed left-[-100%]'}>
        {navLinksdata.map(({ _id, title, link }) =>
          <li className='font-bold  text-white  tracking-wide cursor-pointer  ml-10 mt-10 hover:text-pink-600 duration-300' key={_id} >
            <Link
              activeClass='active'
              to={link}
              spy={true}
              smooth={true}
              offset={-95}
              duration={300}
            >
              {title}
            </Link>
          </li>
        )}
      </ul>

    </div>


  )
}



