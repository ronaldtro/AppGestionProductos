import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Error from './Error'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from './Spinner'

const FormularioProducto = ({ producto, cargando }) => {

    const navigate = useNavigate()
    const {id} = useParams()

    const nuevoProductoSchema = Yup.object().shape({
        codigo: Yup.string().max(8, 'excede el maximo permitido').required('El campo es obligatorio'),
        nombre: Yup.string().max(20, 'excede el maximo permitido').required('El campo es obligatorio'),
        precio: Yup.number().positive('No se aceptan numeros negativos').typeError('Numero no valido')
    })

    const handleSubmit = async (values) => {
        try {
            let respuesta

            if (producto.id) {
                //Editando producto
                const url = `http://localhost:4000/products/${producto.id}`
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            } else {
                //Agregando nuevo producto
                const url = 'http://localhost:4000/products'

                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }

            await respuesta.json()
            navigate(`/clientes/${id}`)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        cargando ? <Spinner /> : (
            <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>{producto?.nombre ? 'Editar producto' : 'Agregar producto'}</h1>
                <Formik initialValues={{
                    codigo: producto?.codigo ?? "",
                    nombre: producto?.nombre ?? "",
                    precio: producto?.precio ?? ""
                }} enableReinitialize={true} onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values)
                    resetForm()
                }}
                    validationSchema={nuevoProductoSchema}
                >
                    {({ errors, touched }) => { //data -> errors

                        return (
                            <Form className='mt-10'>
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='codigo'>Codigo: </label>
                                    <Field id="codigo" name="codigo" type="text" placeholder="codigo del producto" className="mt-2 block w-full p-3 bg-gray-50" />
                                    {
                                        errors.codigo && touched.codigo ? (<Error>{errors.codigo}</Error>) : null
                                    }
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='nombre'>Nombre: </label>
                                    <Field id="nombre" name="nombre" type="text" placeholder="nombre del producto" className="mt-2 block w-full p-3 bg-gray-50" />
                                    {
                                        errors.nombre && touched.nombre ? (<Error>{errors.nombre}</Error>) : null
                                    }
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='precio'>precio: </label>
                                    <Field id="precio" name="precio" type="number" placeholder="Precio del producto" className="mt-2 block w-full p-3 bg-gray-50" />
                                    {
                                        errors.precio && touched.precio ? (<Error>{errors.precio}</Error>) : null
                                    }
                                </div>
                                <input type="submit" className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" value={producto?.nombre ? 'Editar' : 'Agregar'} />
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    )
}

FormularioProducto.defaultProps = {
    producto: {},
    cargando: false,
}

export default FormularioProducto