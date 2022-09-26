import { useNavigate } from "react-router-dom"

const Cliente = ({cliente, handleEliminar}) => {

    const navigate = useNavigate()
    const {nombre, direccion, email, telefono, _id} = cliente

    return (
        <tr className='border-b hover:bg-gray-100'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
                <p><span className='text-gray-800 uppercase font-bold'>Tel: </span>{telefono}</p>
            </td>
            <td className='p-3'>
                <button type='button' className='bg-green-600 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs' onClick={() => navigate(`/clientes/ver/${_id}`)}>Ver</button>
            </td>
        </tr>
    )
}

export default Cliente