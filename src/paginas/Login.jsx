import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Error from '../components/Error'


const Login = () => {

    const navigate = useNavigate()


    const loginSchema = Yup.object().shape({
        email: Yup.string().max(40, 'excede el maximo permitido').required('El campo es obligatorio'),
        password: Yup.string().max(30, 'excede el maximo permitido').required('El campo es obligatorio'),
    })


    const handleSubmit = async (values) => {


        const {email, password} = values

        try {
            const url = 'http://localhost:4000/customers'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const usuarioLogueado = resultado.find( usuario => usuario.email === email &&  usuario.password === password)

            if(usuarioLogueado){
                console.log(usuarioLogueado)
                navigate(`/clientes/${usuarioLogueado._id}`)
            }else{
                alert('Usuario no existe')
            }

        } catch (error) {
            console.log(error)
        }  

    }

    return (
        <div className="md:flex md:min-h-screen">
            <div className='md:w-full bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>Login prueba</h2>

                <div className='bg-blue-800 mt-10 px-5 py-10 rounded-md shadow-md md:w-2/4 mx-auto'>

                    <Formik initialValues={{
                        email: "",
                        password: ""
                    }} enableReinitialize={true} onSubmit={async (values, { resetForm }) => {
                        await handleSubmit(values)
                        resetForm()
                    }}
                        validationSchema={loginSchema}
                    >
                        {({ errors, touched }) => { 

                            return (
                                <Form className='mt-10'>
                                    <div className='mb-4'>
                                        <label className='text-white font-bold text-xl' htmlFor='email'>Email: </label>
                                        <Field id="email" name="email" type="email" placeholder="Correo electronico" className="mt-2 block w-full p-3 bg-gray-50" />
                                        {
                                            errors.email && touched.email ? (<Error>{errors.email}</Error>) : null
                                        }
                                    </div>
                                    <div className='mb-4'>
                                        <label className='text-white font-bold text-xl' htmlFor='password'>Password: </label>
                                        <Field id="password" name="password" type="text" placeholder="*****" className="mt-2 block w-full p-3 bg-gray-50" />
                                        {
                                            errors.password && touched.password ? (<Error>{errors.password}</Error>) : null
                                        }
                                    </div>
                                    <div className='p-3 flex'>
                                        <button type="submit" className="mt-5 w-full bg-blue-800 p-3 text-white font-bold text-lg  hover:bg-blue-700 shadow-xl" > Sign in</button>
                                        <button className="mt-5 w-full bg-blue-800 p-3 text-white font-bold text-lg hover:bg-blue-700 shadow-xl" onClick={() => navigate('/registrarme') }> Sign out  </button>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login