import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import Cliente from '../components/Cliente'
import usePrueba from '../hooks/usePrueba'
import Producto from '../components/Producto'
import Pedido from '../components/Pedido'


function VerPedidos(){

    const {id} = useParams()
    const [pedidos, setPedidos] = useState([])


    useEffect(() => {

        const obtenerPedidos = async () => {
            try {
                const url = `http://localhost:4000/orders`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                const pedidosUsuario = resultado.filter(pedido => pedido.cliente == id)

                if(pedidosUsuario){
                    setPedidos(pedidosUsuario)
                }
                
            } catch (error) {
                console.log(error)
            }

        }

        obtenerPedidos()
    }, [])


    return (
        <div>
            <h1 className='font-black text-4xl text-blue-900'>Mis pedidos</h1>
            <p className='mt-3'>Administrar mis pedidos</p>   
            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Codigo del producto</th>
                        <th className='p-2'>Nombre del producto</th>
                        <th className='p-2'>Precio del producto</th>
                        <th className='p-2'>Cantidad del producto</th>
                        <th className='p-2'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos.map(pedido => (
                            <Pedido key={pedido._id}  pedido={pedido} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default VerPedidos