import { Outlet, Link, useLocation, useParams } from 'react-router-dom'

function Layout(){

    const location = useLocation()
    const actualUrl = location.pathname
    const {id} = useParams()

    return(
        <div className="md:flex md:min-h-screen">
            <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>Prueba 1.0</h2>
                <nav className='mt-10'>
                    <Link className={`${actualUrl == '/clientes' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 `} to={`/clientes/${id}`} >Clientes</Link>
                    <Link className={`${actualUrl == '/clientes/producto' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 `} to={`/clientes/${id}/products/add`}>Nuevo Producto</Link>
                    <Link className={`${actualUrl == '/clientes/producto' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 `} to={`/clientes/${id}/products/show`}>Ver Productos</Link>
                    <Link className={`${actualUrl == '/clientes/producto' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 `} to={`/clientes/${id}/pedidos/add`}>Crear Pedido</Link>
                    <Link className={`${actualUrl == '/clientes/producto' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 `} to={`/clientes/${id}/pedidos/show`}>Ver Pedidos</Link>
                    <Link className={`${actualUrl == '/clientes/producto' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 `} to={`/salir`}>Salir</Link>
                </nav>
            </div>
            <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </div>
            
        </div>
    )
}

export default Layout