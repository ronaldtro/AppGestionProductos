import React from 'react'
import FormularioProducto from '../components/FormularioProducto'

export function NuevoProducto(){
    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Nuevo producto</h1>
            <p className='mt-3'>Llena los siguientes campos para registrar un producto</p>   
            <FormularioProducto />
        </>
    )
}