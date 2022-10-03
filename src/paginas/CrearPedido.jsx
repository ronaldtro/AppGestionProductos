import {useState, useEffect} from 'react'
import Producto from '../components/Producto'
import { useParams } from 'react-router-dom'

function CrearPedido(){

    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {

        const obtenerPedidos = async () => {
            try {
                const url = 'https://backendlgestorlproductos.herokuapp.com/products'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                
                setProductos(resultado)
            } catch (error) {
                console.log(error)
            }
        }

        obtenerPedidos()
    }, [])



    return (
        <div>
            <h1 className='font-black text-4xl text-blue-900'>Crear pedido</h1>
            <p className='mt-3'>Añade productos a tu pedido</p>   
            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Codigo</th>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Precio</th>
                        <th className='p-2'>Cantidad</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => (
                            <Producto key={producto._id} producto={producto} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrearPedido