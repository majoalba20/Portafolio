import React, { useState } from 'react'
import cometa from '../../img/cometa.png'

const Navbar = () => {

    const [page, setPage] = useState('home');

    return (
        <nav className='z-50 opacity-0 sm:opacity-100 flex w-full h-20 fixed top-0 items-center'>
            <div className='w-1/4 flex justify-center'>
                <img className='w-16' src={cometa} alt="" />
            </div>
            <div className='w-3/4'>
                <ul className='flex font-fredoka text-xl justify-around cursor-pointer'>
                    <li><a href="#" onClick={()=>setPage('home')} className={(page === 'home' ? 'text-[#b150a4]' : 'text-white')}>Home</a></li>
                    <li><a href="#" onClick={()=>setPage('about')} className={(page === 'about' ? 'text-[#b150a4]' : 'text-white')}>About Me</a></li>
                    <li><a href="#" onClick={()=>setPage('portafolio')} className={(page === 'portafolio' ? 'text-[#b150a4]' : 'text-white')}>Portafolio</a></li>
                    <li><a href="#" onClick={()=>setPage('contact')} className={(page === 'contact' ? 'text-[#b150a4]' : 'text-white')}>Contact Me</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar