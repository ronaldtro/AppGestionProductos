import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './paginas/Login'
import Inicio from './paginas/Inicio'
import { NuevoProducto } from './paginas/NuevoProducto'
import VerCliente from './paginas/VerCliente'
import Registro from './paginas/Registro'
import VerProductos from './paginas/VerProductos'
import CrearPedido from './paginas/CrearPedido'
import VerPedidos from './paginas/VerPedidos'
import VerPedido from './paginas/VerPedido'


function App() {


  console.log(import.meta.env)


  return (

      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} >
            </Route>
            <Route path="/clientes/:id" element={<Layout />} >
              <Route index element={<Inicio />} />
              <Route path="products/add" element={<NuevoProducto />} />
              <Route path="products/show" element={<VerProductos />} />
              <Route path="pedidos/add" element={<CrearPedido />} />
              <Route path="pedidos/show" element={<VerPedidos />} />
              <Route path="pedido/:iden" element={<VerPedido />} />
            </Route>
            <Route path="/clientes/ver/:id" element={<Layout />} >
              <Route index element={<VerCliente />} />
            </Route>
              <Route path="/registrarme" element={<Registro />} >
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App

