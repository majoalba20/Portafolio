import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserAlt, FaRegFolderOpen, FaPhone } from "react-icons/fa";
import '../styles/style.css'

const Navbar = () => {

    return (
        <nav className='z-50 sm:hidden flex w-full h-12 fixed bottom-4 justify-center'>
            <div className='w-2/4 flex font-fredoka text-xl justify-around items-center rounded-full bg-slate-500'>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'noActive')} to={'/'}><FaHome/></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'noActive')} to={'/about'}><FaUserAlt/></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'noActive')} to={'/portafolio'}><FaRegFolderOpen/></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'noActive')} to={'/contact'}><FaPhone/></NavLink>
            </div>
        </nav>
    )
}

export default Navbar