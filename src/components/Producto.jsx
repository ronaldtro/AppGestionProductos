import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Producto = ({ producto }) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const { codigo, nombre, precio, _id } = producto
    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = async () => {

        const pedido = { producto: producto._id, cliente: id, cantidad: cantidad}

        if(parseInt(cantidad) < 1){
            alert('Cantidad no valida')
        }else{
            try {
                const url = 'https://backendlgestorlproductos.herokuapp.com/orders'
    
                await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(pedido),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                alert('Producto agregado con exito!')
                
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <tr className='border-b hover:bg-gray-100'>
            <td className='p-3 text-center'>{codigo}</td>
            <td className='p-3 text-center'>
                <p>{nombre}</p>
            </td>
            <td className='p-3 text-center'>{precio}</td>
            <td className='p-3 text-center'>
                <input id="cantidad" name="cantidad" type="text" placeholder="Digite la cantidad" className="mt-2 block w-full p-3 bg-gray-50" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
            </td>
            <td className='p-3 text-center'>
                <button type='button' className='bg-green-600 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3' onClick={() => {
                    handleAgregar()
                }
                }>Agregar al pedido</button>
            </td>
        </tr>
    )
}

export default Producto