import React from 'react'
import yo from '../../img/ilustracion.png'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import '../styles/style.css'

const Landing = () => {

    const [state] = useState({
        title: "Hi, I'm ",
        titleTwo: "María José Alba"
    })

    return (
        <section className='p-32 pb-0 flex z-10'>
            <div className='w-1/2 justify-center pt-12'>
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
                            "I'm a Junior Full Stack Web Developer."
                            ]
                        }}
                    />
                </div>
                <div className='pt-3'>
                    <button className='btnP relative shadow-2xl w-52 flex justify-around p-5 font-rubik text-white rounded-full bg-[#BE3034]'>
                    VIEW PROJECTS<FaArrowRight color='white' fontSize='1.5em'/>
                    </button>
                </div>
            </div>
            <div className='w-1/2 flex justify-center'>
                <img className='w-1/2' src={yo} alt="" />
            </div>
        </section>
    )
}

export default Landing