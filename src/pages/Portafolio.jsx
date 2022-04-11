import React from 'react'
import Cards from "../components/Cards"
import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'

const Portafolio = () => {
    return (
        <>
            <Navbar/>
            <ParticleBackground/>
            <div className='flex w-full justify-center'>
                <div className='flex flex-wrap gap-8 justify-center items-center pt-36 w-11/12'>
                    <Cards/>
                </div>
            </div>
        </>
    )
}

export default Portafolio