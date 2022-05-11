import React from 'react'
import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import NavbarFloatting from '../components/NavbarFloatting'
import yo from '../../img/yoV3.png'
import '../styles/terminal.css'

const About = () => {
    return (
        <>
            <Navbar/>
            <ParticleBackground/>
            <section className='p-32 pb-0 lg:flex lg:flex-row flex flex-col items-center'>
                <div className='lg:w-1/2 w-full flex justify-center'>
                    <img className='yo z-30  lg:w-9/12 md:w-60' src={yo} alt="" />
                </div>

                <div className='z-50 lg:w-1/2 w-full justify-center'>
                    <div className="Myterminal">
                        <div className="Myheader">
                            <div className="btn red"></div>
                            <div className="btn yellow"></div>
                            <div className="btn green"></div>
                        </div>
                        <div className="Myfield">
                            <div className="Myinfo">&#126; ¿Quien Soy?</div>
                            <pre>
                                <code>
                                    &gt; Soy María José Alba, tengo 22 años, soy<br/>ingeniería electrónica 
                                    en formación, apasionada<br/>por la tecnología y el desarrollo de 
                                    software,<br/>busco contribuir en este sector con mis habilidades<br/>y 
                                    enriquecer mis conocimientos técnicos. He<br/>desarrollado 
                                    aplicaciones del lado del cliente y<br/>del lado del servidor con 
                                    tecnologías como React JS,<br/>PHP, MongoDB y Laravel llegando a 
                                    desempeñarme como<br/>desarrolladora web full stack. Con alto 
                                    sentido de<br/>responsabilidad, trabajo en equipo y comunicación 
                                    <br/>asertiva.
                                </code>
                            </pre>
                            <div className="Myerror">&#126; Exit;</div>
                        </div>
                    </div>
                </div>

            </section>
            <NavbarFloatting/>
        </>
    )
}

export default About