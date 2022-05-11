import React from 'react'
import { NavLink } from 'react-router-dom';
import cometa from '../../img/cometa.png'
import '../styles/style.css'
import cv from '../../img/CV.png'

const Navbar = () => {

    return (
        <nav className='z-50 opacity-0 sm:opacity-100 sm:bg-black lg:bg-transparent flex w-full h-20 fixed top-0 items-center'>
            <div className='w-1/4 flex justify-center'>
                <img className='w-16' src={cometa} alt="" />
            </div>
            <div className='w-3/4'>
                <div className='flex font-fredoka text-xl justify-around'>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'noActive')} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'noActive')} to={'/about'}>About Me</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'noActive')} to={'/portafolio'}>Portafolio</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'noActive')} to={'/contact'}>Contact Me</NavLink>
                    <a className='noActive' href={cv} download>CV</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar