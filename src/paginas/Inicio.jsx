import {useState, useEffect} from 'react'
import Cliente from '../components/Cliente'
import usePrueba from '../hooks/usePrueba'

function Inicio(){

    const [clientes, setClientes] = useState([])


    useEffect(() => {
        const obtenerClientes = async () => {
            try {
                const url = 'https://backendlgestorlproductos.herokuapp.com/customers'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                
                setClientes(resultado)
            } catch (error) {
                console.log(error)
            }
        }

        obtenerClientes()
    }, [])



    return (
        <div>
            <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
            <p className='mt-3'>Administra tus clientes</p>   
            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Contacto</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(cliente => (
                            <Cliente key={cliente._id} cliente={cliente} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Inicio