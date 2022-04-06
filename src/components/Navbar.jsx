import React from 'react'
import logo from '../../img/navLogo.png'

const Navbar = () => {
    return (
        <nav className='z-20 flex w-full h-20 fixed top-0 items-center shadow-2xl'>
            <div className='w-1/4 flex justify-center'>
                <img className='w-16' src={logo} alt="" />
            </div>
            <div className='w-3/4'>
                <ul className='flex font-rubik text-xl justify-around cursor-pointer'>
                    <li className='hover:text-[#BE3034]'>Home</li>
                    <li className='hover:text-[#BE3034]'>About Me</li>
                    <li className='hover:text-[#BE3034]'>Portafolio</li>
                    <li className='hover:text-[#BE3034]'>Contact Me</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar