import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"

const VerCliente = () => {

    const {id} = useParams()

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const obtenerClienteApi = async () => {
            try {
                const url = `http://localhost:4000/customers/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }   

            setTimeout(() => {
                setCargando(!cargando)
            }, 1500)
        }

        obtenerClienteApi()

    }, [])

    return (
            cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (
                <div>
                {
                    cargando ? 'Cargando cliente..' : (
                        <>
                            <h1 className='font-black text-4xl text-blue-900'>Cliente: {cliente.nombre}</h1>
                            <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Direccion: </span> {cliente.direccion}</p>                
                            <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Email: </span> {cliente.email}</p>
                            <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Telefono: </span> {cliente.telefono}</p>

                            {
                                cliente.notas && ( <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Notas: </span> {cliente.notas}</p> )
                            }
                        </>
                    )
                }
                </div>
            )
    )
}

export default VerCliente