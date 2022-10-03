import { useState , useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


const Pedido = ({ pedido }) => {


    const {producto, cliente, cantidad, _id} = pedido
    const [productoCliente, setProductoCliente] = useState({})
    const [datosCliente, setDatosCliente] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()



    useEffect(() => {

        try {
            const obtenerProducto = async () => {
                
                    const url = `https://backendlgestorlproductos.herokuapp.com/products/${producto}`
                    const respuesta = await fetch(url)
                    const resultado = await respuesta.json()

    
                    setProductoCliente({
                        _id: resultado._id,
                        codigo: resultado.codigo,
                        nombre: resultado.nombre,
                        precio: resultado.precio
                    })
            }

            obtenerProducto()

        } catch (error) {
            console.log(error)
        }

        try {
            const obtenerCliente = async () => {
                
                    const url = `https://backendlgestorlproductos.herokuapp.com/customers/${cliente}`
                    const respuesta = await fetch(url)
                    const resultado = await respuesta.json()
    
                    setDatosCliente({
                        nombre: resultado.nombre,
                        direccion: resultado.direccion,
                        email: resultado.email,
                        telefono: resultado.telefono,
                        cantidad: cantidad
                    })


            }

            obtenerCliente()

        } catch (error) {
            console.log(error)
        }


    }, [])

    return (
        <tr className='border-b hover:bg-gray-100'>
            <td className='p-3 text-center'>
                <p><span className="font-bold">{productoCliente.codigo}</span></p>
            </td>
            <td className='p-3 text-center'>
                <p><span className="font-bold">{productoCliente.nombre}</span></p>
            </td>
            <td className='p-3 text-center'>
                <p><span className="font-bold">{productoCliente.precio}</span></p>
            </td>
            <td className='p-3 text-center'>
                <p><span className="font-bold">{cantidad}</span></p>
            </td>
            <td className='p-3'>
                <button type='button' className='bg-green-600 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs' onClick={() => navigate(`/clientes/${id}/pedido/${productoCliente._id}`) }> Ver pedido </button>
            </td>
        </tr>
    )
}

export default Pedido