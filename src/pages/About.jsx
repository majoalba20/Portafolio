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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita ducimus, odit rem aspernatur voluptatum laboriosam quaerat architecto voluptatibus ipsam sed autem pariatur dolorem fugit impedit dignissimos esse non similique!
                    Magnam, exercitationem. In tenetur explicabo dignissimos mollitia at rerum sequi eius corrupti nobis, nulla fuga eligendi quidem, officia itaque repellat nemo animi autem excepturi optio. Incidunt qui optio saepe doloribus.
                    Nihil, veritatis! Dolores corrupti voluptatibus ipsam molestiae nam aspernatur esse, sed qui. Maiores aspernatur obcaecati adipisci pariatur eligendi, eos deserunt aliquam, officiis, qui accusantium odit amet similique magni atque iure!
                </div>
            </section>
            <NavbarFloatting/>
        </>
    )
}

export default About