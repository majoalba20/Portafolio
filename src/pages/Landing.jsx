import React, { useState } from 'react'
import tierra from '../../img/tierra.png'
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from "react-icons/fa";
import '../styles/style.css'
import ParticleBackground from '../components/ParticleBackground'
import Navbar from '../components/Navbar';

const Landing = () => {

    const [state] = useState({
        title: "Hi, I'm María",
        titleTwo: "José Alba"
    })

    return (
        <>
            <Navbar/>
            <ParticleBackground/>
            <section className='md:p-32 md:pb-0 p-16 flex'>
                <div className='lg:w-1/2 w-full justify-center pt-12'>
                    <h2 className='text-7xl font-fredoka'>
                        <div className='title'>{state.title}</div>
                        <div className='titleTwo'>{state.titleTwo}</div>
                    </h2>
                    <div className='text-3xl py-6 md:h-28 h-28 font-rubik text-[#ffff]'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                strings: [
                                "I'm a Full Stack Web Developer."
                                ]
                            }}
                        />
                    </div>
                    <div className='lg:pt-3'>
                        <button className='btnP z-30 relative shadow-2xl w-52 flex justify-around p-5 font-rubik text-white font-bold rounded-full bg-[#7557d2]'>
                        VIEW PROJECTS<FaArrowRight color='white' fontSize='1.5em'/>
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-0 flex justify-center'>
                    <img className='tierra z-30 hidden lg:block lg:w-9/12' src={tierra} alt="" />
                </div>
            </section>
        </>
    )
}

export default Landing