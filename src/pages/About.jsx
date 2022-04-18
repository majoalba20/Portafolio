import React from 'react'
import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import NavbarFloatting from '../components/NavbarFloatting'
import yo from '../../img/yoV3.png'

const About = () => {
    return (
        <>
            <Navbar/>
            <ParticleBackground/>
            <section className='p-32 pb-0 lg:flex lg:flex-row flex flex-col items-center'>
                <div className='lg:w-1/2 w-full flex justify-center'>
                    <img className='yo z-30  lg:w-9/12 md:w-60' src={yo} alt="" />
                </div>
                <div className='text lg:w-1/2 w-full font-rubik text-white justify-center pt-12'>
                Soy María José Alba, tengo 22 años, soy ingeniería electrónica 
                en formación, apasionada por la tecnología y el desarrollo de 
                software, busco contribuir en este sector con mis habilidades y 
                enriquecer mis conocimientos técnicos. He desarrollado 
                aplicaciones del lado del cliente y del lado del servidor con 
                tecnologías como react js, php, MongoDB y laravel llegando a 
                desempeñarme como desarrolladora web full stack. Con alto 
                sentido de responsabilidad, trabajo en equipo y comunicación 
                asertiva.
                </div>
            </section>
            <NavbarFloatting/>
        </>
    )
}

export default About