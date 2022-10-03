import {useState, useEffect} from 'react'
import Cliente from '../components/Cliente'
import usePrueba from '../hooks/usePrueba'
import ListadoProductos from '../components/ListadoProductos'

function VerProductos(){

    const [productos, setProductos] = useState([])


    useEffect(() => {

        const obtenerProductos = async () => {
            try {
                const url = 'https://backendlgestorlproductos.herokuapp.com/products'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                
                setProductos(resultado)
            } catch (error) {
                console.log(error)
            }
        }

        obtenerProductos()
    }, [])

    const handleEliminar = async id => {
        const confirmar = confirm('Desea eliminar este producto?')

        if(confirmar){
            try {
                const url = `https://backendlgestorlproductos.herokuapp.com/clientes/${id}`
                const respuesta = await fetch(url, {method: 'DELETE'})
                await respuesta.json()
                const clientesArray = clientes.filter(cliente => cliente.id !== id)
                setClientes(clientesArray)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <h1 className='font-black text-4xl text-blue-900'>Productos</h1>
            <p className='mt-3'>Administra tus productos</p>   
            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Codigo</th>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => (
                            <ListadoProductos key={producto.id} producto={producto} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default VerProductos