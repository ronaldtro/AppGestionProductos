import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ListadoProductos = ({ producto }) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const { codigo, nombre, precio} = producto
    const [cantidad, setCantidad] = useState(0)


    return (
        <tr className='border-b hover:bg-gray-100'>
            <td className='p-3 text-center'>{codigo}</td>
            <td className='p-3 text-center'>{nombre}</td>
            <td className='p-3 text-center'>{precio}</td>
        </tr>
    )
}

export default ListadoProductos