import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"

const VerPedido = () => {


    const { iden } = useParams()
    const [idProducto, setIdProducto] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [datosProducto, setDatosProducto] = useState({})

    useEffect(() => {

        const obtenerPedido = async () => {


            try {
                const url = `https://backendlgestorlproductos.herokuapp.com/products/${iden}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setDatosProducto(resultado)

            } catch (error) {
                console.log(error)
            }

        }

        obtenerPedido()

    }, [])

    return (

        <div>
            {

                <>
                    <h1 className='font-black text-4xl text-blue-900'>Ver pedido</h1>
                    <p className='mt-3'>Informacion del pedido</p>

                    <p className="text-2xl text-gray-600 mt-10"><span className="text-gray-800 uppercase font-bold">PRODUCTO: </span></p>
                    <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Codigo: </span> {datosProducto.codigo} </p>
                    <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Nombre: </span> {datosProducto.nombre}</p>
                    <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Precio: </span> {datosProducto.precio}</p>
                </>

            }
        </div>

    )
}

export default VerPedido