import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Error from './Error'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

const FormularioRegistro = ({ cargando }) => {

    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string().min(3, 'El nombre es muy corto').max(20, 'El nombre es muy largo').required('El nombre del cliente es obligatorio'),
        direccion: Yup.string().required('La direccion es obligatoria'),
        email: Yup.string().email('Porfavor introduzca un email valido').required('El email es obligatorio'),
        telefono: Yup.number().positive('Numero telefonico no valido').integer('Numero telefonico no valido').typeError('Numero telefonico no valido'),
        password: Yup.string().min(5, 'La password es muy corta').max(350, 'La nota es muy larga')
    })

    const handleSubmit = async (values) => {

        try {

            const url = 'http://localhost:4000/customers'

            await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })


        } catch (error) {
            return console.log(error)
        }


        navigate('/login')

    }

    return (
        cargando ? <Spinner /> : (
            <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-2/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar cliente</h1>
                <Formik initialValues={{
                    nombre: "",
                    direccion: "",
                    email: "",
                    telefono: "",
                    password: "",
                }} enableReinitialize={true} onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values)
                    resetForm()
                }}
                    validationSchema={nuevoClienteSchema}
                >
                    {({ errors, touched }) => { //data -> errors

                        return (
                            <Form className='mt-10'>
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='nombre'>Nombre: </label>
                                    <Field id="nombre" name="nombre" type="text" placeholder="Nombre del cliente" className="mt-2 block w-full p-3 bg-gray-50" />
                                    {
                                        errors.nombre && touched.nombre ? (<Error>{errors.nombre}</Error>) : null
                                    }
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='direccion'>Direccion: </label>
                                    <Field id="direccion" name="direccion" type="text" placeholder="Direccion" className="mt-2 block w-full p-3 bg-gray-50" />
                                    {
                                        errors.empresa && touched.empresa ? (<Error>{errors.empresa}</Error>) : null
                                    }
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='email'>E-mail: </label>
                                    <Field id="email" name="email" type="email" placeholder="Correo del cliente" className="mt-2 block w-full p-3 bg-gray-50" />
                                    {
                                        errors.email && touched.email ? (<Error>{errors.email}</Error>) : null
                                    }
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='telefono'>Telefono: </label>
                                    <Field id="telefono" name="telefono" type="tel" placeholder="Telefono del cliente" className="mt-2 block w-full p-3 bg-gray-50" />
                                    {
                                        errors.telefono && touched.telefono ? (<Error>{errors.telefono}</Error>) : null
                                    }
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='password'>Password: </label>
                                    <Field id="password" name="password" type="password" className="mt-2 block w-full p-3 bg-gray-50" />
                                    {
                                        errors.password && touched.password ? (<Error>{errors.password}</Error>) : null
                                    }
                                </div>
                                <input type="submit" className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" value='Registrar' />
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    )
}

FormularioRegistro.defaultProps = {
    cargando: false
}

export default FormularioRegistro