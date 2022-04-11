import React from 'react'
import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import Form from '../components/Form'
import github from '../../img/github.svg'
import linkedin from '../../img/linkedin.svg'
import ovni from '../../img/ovni.png'
import '../styles/style.css'

const Contact = () => {
    return (
        <>
            <Navbar/>
            <ParticleBackground/>
            <section className='p-32 pb-0 flex lg:flex-row flex-col'>
                <div className='z-40 lg:w-1/2 w-full flex justify-center'>
                    <div className='form-bg w-72 h-96 rounded-lg'>
                        <p className='font-fredoka text-center text-white pt-2'>Send me an email!</p>
                        <Form/>
                    </div>
                </div>
                <div className='z-40 lg:w-1/2 w-full flex flex-col items-center'>
                    <img className='ovni' src={ovni} alt="" />
                    <div className='social flex w-4/12 gap-5'>
                        <a className='flex justify-center' href="https://github.com/majoalba20" target={'_blank'}><img src={github} alt="" /></a>
                        <a className='flex justify-center' href="https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-alba-a74703232/" target={'_blank'}><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact