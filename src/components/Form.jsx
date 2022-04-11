import React from 'react'

const Form = () => {
    return (
        <form className='p-3 flex flex-col justify-start' action="">
            <label className='font-rubik' htmlFor="">Correo remitente</label>
            <input className='rounded-lg bg-slate-100' type="email" />
            <label className='font-rubik' htmlFor="">Asunto</label>
            <input className='rounded-lg bg-slate-100' type="text" />
            <label className='font-rubik' htmlFor="">Message</label>
            <textarea className='rounded-lg bg-slate-100' name="" id="" rows="6"></textarea>
            <button className='m-auto mt-3 z-30 relative w-32 p-2 font-rubik text-white font-bold rounded-full bg-[#7557d2]' type='submit'>
                Enviar
            </button>
        </form>
    )
}

export default Form