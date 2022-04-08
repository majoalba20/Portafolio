import React from 'react'
import { NavLink } from 'react-router-dom';
import cometa from '../../img/cometa.png'

const Navbar = () => {

    return (
        <nav className='opacity-0 sm:opacity-100 flex w-full h-20 fixed top-0 items-center'>
            <div className='w-1/4 flex justify-center'>
                <img className='w-16' src={cometa} alt="" />
            </div>
            <div className='w-3/4'>
                <ul className='flex font-fredoka text-xl justify-around cursor-pointer'>
                    <li><NavLink className={({isActive}) => (isActive ? 'text-[#b150a4]' : 'text-white hover:text-[#b150a4]')} to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About Me</NavLink></li>
                    <li><NavLink to={'/portafolio'}>Portafolio</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact Me</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar