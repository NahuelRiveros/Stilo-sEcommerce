import React from 'react'
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CargaDatoPers = () => {
    const navigate = useNavigate()
    const initialValues = {
        nombreUno: '',
        nombreDos: '',
        apellido: '',
        localidad: '',
        provincia: '',
        codPostal: 0,
        generoPers: '',
        numeroCel: 0,
        barrio: '',
        calle: '',
        numCasa: '',
        departamento: '',
        numPiso: 0,


    };

    const userInfo = useSelector((state) => state.bazar.userInfo)
    console.log(userInfo)
    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            console.log(values);
            const URI = "http://localhost:8000/stilos/formularioPersona/";
            await axios.post(URI, { values, id: userInfo.id }).then((res) => {
                if (!res.data.msg) {
                    console.log("Error al cargar los datos")
                } else {
                    console.log('Se ha registrado correctamente')
                    navigate('/')
                }
            })

        }// Aquí puedes agregar la lógica para enviar los datos del formulario
        ,
    });
    return (
        <div className='flex justify-center bg-slate-200'>

            <form onSubmit={formik.handleSubmit} className='p-5'>
                <label className="block mb-2 text-lg  font-medium text-gray-900 dark:text-white text-center">Formulario de Datos Personales</label>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    {/* NombreUno */}
                    <div>
                        <label htmlFor="nombreUno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Nombre</label>
                        <input onChange={formik.handleChange} name='nombreUno' type="text" id="nombreUno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formosa" required />
                    </div>
                    {/* NombreUno */}
                    {/* NombreDos */}
                    <div className=''>
                        <label htmlFor="nombreDos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Nombre</label>
                        <input onChange={formik.handleChange} name='nombreDos' type="text" id="nombreDos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formosa" required />
                    </div>
                    {/* NombreDos */}
                    {/* Apellido */}
                    <div>
                        <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                        <input onChange={formik.handleChange} name='apellido' type="text" id="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formosa" required />
                    </div>
                    {/* Apellido */}
                    {/* Localidad */}
                    <div>
                        <label htmlFor="localidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Localidad</label>
                        <input onChange={formik.handleChange} name='localidad' type="text" id="localidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formosa" required />
                    </div>
                    {/* Localidad */}


                    {/* Provincia */}
                    <div>
                        <label htmlFor="provincia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provincia</label>
                        <input onChange={formik.handleChange} name='provincia' type="text" id="provincia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formosa" required />
                    </div>
                    {/* Provincia */}


                    {/* Codigo Postal */}
                    <div>
                        <label htmlFor="codPostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo Postal</label>
                        <input onChange={formik.handleChange} name='codPostal' type="number" id="codPostal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3600" required />
                    </div>
                    {/* Codigo Postal */}

                    {/* Genero Persona */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero</label>
                        <div className=' items-center gap-2 inline-flex  mr-2'>

                            <label htmlFor="generoM">Mujeres</label>
                            <input
                                onChange={formik.handleChange}
                                name='generoPers'
                                value="femenino"
                                type="radio"
                                id='generoM'
                            />
                            <label htmlFor="generoH">Hombres</label>
                            <input
                                onChange={formik.handleChange}
                                name='generoPers'
                                value="masculino"
                                type="radio"
                                id='generoH'
                            />
                        </div>

                    </div>
                    {/* Genero Persona */}


                    {/* Numero Celular */}
                    <div>
                        <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero Celular</label>
                        <input onChange={formik.handleChange} name='numeroCel' type="number" id="celular" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    {/* Numero Celular */}
                </div>

                <label className="block mb-2 text-lg  font-medium text-gray-900 dark:text-white text-center">Formulario de Domicilio</label>


                {/* Barrio */}
                <div>
                    <label htmlFor="Barrio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barrio </label>
                    <input onChange={formik.handleChange} name='barrio' type="text" id="Barrio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Br a la Vuelta" required />
                </div>
                {/* Barrio */}


                {/* Calle */}
                <div>
                    <label htmlFor="Calle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Calle</label>
                    <input onChange={formik.handleChange} name='calle' type="text" id="Calle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9 de julio" required />
                </div>
                {/* Calle */}

                {/* Numero de casa */}
                <div className="mb-6">
                    <label htmlFor="numeroCasa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nº de casa o puerta</label>
                    <input onChange={formik.handleChange} name='numCasa' type="text" id="numeroCasa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123 o ABC" required />
                </div>
                {/* Numero de casa */}


                {/* Departamento Nombre */}
                <div className="mb-6">
                    <label htmlFor="departamento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
                    <input onChange={formik.handleChange} name='departamento' type="text" id="departamento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Las Venturas" />
                </div>
                {/* Departamento Nombre */}


                {/* Numero de piso del departamento */}
                <div className="mb-6">
                    <label htmlFor="Piso" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nº de Piso</label>
                    <input onChange={formik.handleChange} name='numPiso' type="number" id="Piso" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123" />
                </div>
                {/* Numero de piso del departamento */}



                {/* Terminos y donciciones */}
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yo acepto los <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terminos y condiciones</a>.</label>
                </div>
                {/* Terminos y donciciones */}


                {/* BTN Envio */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
            </form>

        </div>
    )
}

export default CargaDatoPers