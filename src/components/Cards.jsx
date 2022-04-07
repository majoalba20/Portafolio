import React from 'react'
import {FaGithub} from "react-icons/fa";
import ecommerce from '../../img/ecommerce.png'
import covid from '../../img/covid.png'
import crud from '../../img/crudPHP.png'
import mern from '../../img/mern.png'
import rick from '../../img/rick&morty.png'
import home from '../../img/home.png'
import musica from '../../img/musica.png'
import replica from '../../img/replica.png'

const projects = [
    {
        image: ecommerce, 
        demo:'https://celebra-la-vida-gcactsw0a-majoalba20.vercel.app/', 
        repo:'https://github.com/majoalba20/Celebra_la_Vida'
    },
    {
        image: covid, 
        demo:'https://majoalba20.github.io/Covid-19/index.html', 
        repo:'https://github.com/majoalba20/Covid-19'
    },
    {
        image: crud, 
        demo:'https://crudoconsultorios.000webhostapp.com/', 
        repo:'https://github.com/majoalba20/CRUDo_Consultorio'
    },
    {
        image: rick, 
        demo:'https://dianachavezr.github.io/ApiRickAndMorty/', 
        repo:'https://github.com/dianachavezr/ApiRickAndMorty'
    },
    {
        image: home, 
        demo:'https://gohomehackaton2022.herokuapp.com/', 
        repo:'https://github.com/desimorenoh/goHome'
    },
    {
        image: musica, 
        demo:'https://marvintt.github.io/toquenelDOM/index.html', 
        repo:'https://github.com/marvintt/toquenelDOM'
    },
    {
        image: mern, 
        demo:'https://harmonious-gingersnap-223c9e.netlify.app/', 
        repo:'https://github.com/majoalba20/TODO_frontend'
    },
    {
        image: replica, 
        demo:'https://majoalba20.github.io/ReplicaWeb/#start', 
        repo:'https://github.com/majoalba20/ReplicaWeb'
    }
];

const Cards = () => {
    return (
        <>
            {
                projects.map(p => {
                    return(
                        <div key={p.image} className='w-60 h-fit z-40 rounded-b-lg hover:scale-110 shadow-2xl'>
                            <div style={{height: '108.3px'}} className='w-60'>
                                <img className='rounded-t-lg' src={p.image} alt="" />
                            </div>
                            <div className='w-60 flex'>
                                <a href={p.demo} target={'_blank'} className='rounded-bl-lg w-1/2 h-12 bg-[#FF66C4] flex justify-center items-center font-rubik text-white font-bold'>DEMO</a>
                                <a href={p.repo} target={'_blank'} className='rounded-br-lg w-1/2 h-12 bg-[#FF66C4] flex justify-center items-center'><FaGithub fontSize='1.5em'/></a>
                            </div>
                        </div>
                    )
                })
            }
        </> 
    )
}

export default Cards
