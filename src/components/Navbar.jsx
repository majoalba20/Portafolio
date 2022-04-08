import React, { useState } from 'react'
import logo from '../../img/navLogo.png'

const Navbar = () => {

    const [page, setPage] = useState('home');

    return (
        <nav style={{background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}} className='z-50 opacity-0 sm:opacity-100 flex w-full h-20 fixed top-0 items-center'>
            <div className='w-1/4 flex justify-center'>
                <img className='w-16' src={logo} alt="" />
            </div>
            <div className='w-3/4'>
                <ul className='flex font-rubik text-xl justify-around cursor-pointer text-[#AF8664]'>
                    <li className='hover:text-[#BE3034]'><a href="#" onClick={()=>setPage('home')} className={(page === 'home' ? 'text-[#BE3034]' : 'text-[#AF8664]')}>Home</a></li>
                    <li className='hover:text-[#BE3034]'><a href="#" onClick={()=>setPage('about')} className={(page === 'about' ? 'text-[#BE3034]' : 'text-[#AF8664]')}>About Me</a></li>
                    <li className='hover:text-[#BE3034]'><a href="#" onClick={()=>setPage('portafolio')} className={(page === 'portafolio' ? 'text-[#BE3034]' : 'text-[#AF8664]')}>Portafolio</a></li>
                    <li className='hover:text-[#BE3034]'><a href="#" onClick={()=>setPage('contact')} className={(page === 'contact' ? 'text-[#BE3034]' : 'text-[#AF8664]')}>Contact Me</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar