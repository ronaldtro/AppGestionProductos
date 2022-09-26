
import React from 'react'
import FormularioRegistro from '../components/FormularioRegistro'


const Registro = () => {

    return (
        <div className="md:flex md:min-h-screen">
            <div className='md:w-full bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>Registro</h2>
                <FormularioRegistro />
            </div>
        </div>
    )
}

export default Registro