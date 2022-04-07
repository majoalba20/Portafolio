import React, { useState } from 'react'
import yo from '../../img/Yov2.png'
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from "react-icons/fa";
import '../styles/style.css'
import ParticleBackground from '../components/ParticleBackground'

const Landing = () => {

    const [state] = useState({
        title: "Hi, I'm ",
        titleTwo: "María José Alba"
    })

    return (
        <>
            <ParticleBackground/>
            <section className='p-32 pb-0 flex'>
                <div className='lg:w-1/2 w-full justify-center pt-12'>
                    <h2 className='text-7xl font-af text-[#89694E]'>
                        <div className='title'>{state.title}</div>
                        <div className='titleTwo'>{state.titleTwo}</div>
                    </h2>
                    <div className='text-3xl py-6 font-rubik text-[#89694E]'>
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
                        <button className='btnP z-30 relative shadow-2xl w-52 flex justify-around p-5 font-rubik text-white font-bold rounded-full bg-[#BE3034]'>
                        VIEW PROJECTS<FaArrowRight color='white' fontSize='1.5em'/>
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-0 flex justify-center'>
                    <img className='imgYo z-30 hidden lg:block lg:w-9/12 md:w-60' src={yo} alt="" />
                </div>
            </section>
        </>
    )
}

export default Landing