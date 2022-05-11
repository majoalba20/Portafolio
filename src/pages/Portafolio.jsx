import React from 'react'
import Cards from "../components/Cards"
import Navbar from '../components/Navbar'
import NavbarFloatting from '../components/NavbarFloatting'
import ParticleBackground from '../components/ParticleBackground'

const Portafolio = () => {
    return (
        <>
            <Navbar/>
            <ParticleBackground/>
            <div className='flex w-full justify-center'>
                <div className='flex flex-wrap gap-8 justify-center items-center pt-10 pb-6 sm:pt-36 w-11/12'>
                    <Cards/>
                </div>
            </div>
            <div className='pt-16'>
                <NavbarFloatting/>
            </div>
        </>
    )
}

export default Portafolio