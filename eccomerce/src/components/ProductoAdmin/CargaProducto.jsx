import React, { useState, useEffect } from 'react'
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
const CargaProducto = () => {
    const [marca, setMarca] = useState([])
    const [talle, setTalle] = useState([])
    const [categoria, setCategoria] = useState([])
    const [genero, setGenero] = useState([])
    const [descuento, setDescuento] = useState([])
    const [color, setColor] = useState([])
    // const [infoProduc, setInfoProduc] = useState([])
    // const [infoProduc, setInfoProduc] = useState([])
    // const [infoProduc, setInfoProduc] = useState([])
    const initialValues = {
        detalle_Producto: '',
        categoria: '',
        descuento: '',
        talle: '',
        marca: '',
        genero: '',
        color: '',
        precio: 0,
        cantidad: 0,
        image: null,
    };

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            console.log(values);
            const URI = "http://localhost:8000/stilos/InsertProducto/";
            await axios.post(URI, { values }).then((res) => {
                if (!res.data.msg) {
                    console.log("Error al cargar los datos")
                } else {
                    console.log('Se ha registrado correctamente')
                    // navigate('/')
                }
            })
            // Aquí puedes agregar la lógica para enviar los datos del formulario
        },
    });
    const reqDBinfoProducto = async () => {
        const infoProductos = 'http://localhost:8000/stilos/ObtArtInfo/'
        await axios.get(infoProductos).then((res) => {
            // console.log(res.data)
            setMarca(res.data.marca)
            setCategoria(res.data.categoria)
            setColor(res.data.color)
            setGenero(res.data.genero)
            setTalle(res.data.talle)
            setDescuento(res.data.descuento)
        })

    }
    useEffect(() => {
        reqDBinfoProducto()
    }, [])



    const listInfoProducto = [
        { id: 1, name: "name", type: "text" },
        { id: 3, name: "price", type: "number" },
    ]
    const categories = ["Ropa", "Zapatos", "Accesorios"];

    return (

        <div>
            <form onSubmit={formik.handleSubmit} className='max-w-none mx-auto flex flex-col '>

                <div className="flex min-h-screen flex-col justify-center bg-[#0a1120] bg-[url('https://mini.codingcodax.dev/images/dark-beams.jpg')] bg-[length:86.125rem] bg-bottom bg-no-repeat p-4 ">

                    {/* Elemento que contiene todos los inputs */}
                    <div className='items-center flex justify-center pb-10'>

                        <label className="font-titleFont Titulo-H text-white text-center " > FORMULARIO DE INGRESO DE PRODUCTOS</label>
                    </div>
                    <div className="mx-auto 
                    w-screen-sm grid gap-6 mb-6 md:grid-cols-2">

                        {/* Inpust detalle producto */}
                        <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
                            <input className="peer w-full rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
                                type="text" name="detalle_Producto"
                                id="detalle_Producto"
                                placeholder="Detalle"
                                onChange={formik.handleChange} />
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" >Detalle Producto</label>
                        </div>
                        {/* Inpust detalle producto */}

                        {/* seleccion Categoria */}
                        <div className='relative flex h-10 select-container justify-center w-full overflow-clip rounded-lg'>
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" >Seleccion Categoria</label>
                            <select className='flex 
                            select items-center rounded-r-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300
                             peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white' name="categoria" id="categoria" onChange={formik.handleChange}>
                                <option value="">ninguno</option>
                                <option value="Remeras">Remeras</option>
                                <option value="Jeans">Jeans</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Chombas">Chombas</option>
                                <option value="Camisas">Camisas</option>
                                <option value="Polleras">Polleras</option>

                            </select>
                        </div>
                        {/* seleccion Categoria */}

                        {/* seleccion descuento */}
                        <div className='relative flex h-10 justify-center w-full overflow-clip rounded-lg select-container'>
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" >Seleccionar Descuentos</label>
                            <select className='flex select items-center rounded-r-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white' name="descuento" id="descuento" onChange={formik.handleChange}>
                                <option value="0">ninguno</option>
                                <option value="5">5%</option>
                                <option value="10">10%</option>
                                <option value="15">15%</option>
                            </select>
                        </div>
                        {/* seleccion descuento */}
                        {/* seleccion talle */}
                        <div className='relative flex h-10 justify-center w-full overflow-clip rounded-lg select-container'>
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" >Seleccionar talle</label>
                            <select className='flex select items-center rounded-r-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white' name="talle" id="talle" onChange={formik.handleChange}>
                                <option value="">ninguno</option>
                                {talle.map((item) => (
                                    <option key={talle.id_Talle} value={talle.id_Talle}>{talle.Nom_Talle}</option>
                                ))

                                }
                                {/* <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="2XL">2XL</option>
                                <option value="3XL">3XL</option>
                                <option value="4XL">4XL</option> */}
                            </select>
                        </div>
                        {/* seleccion talle */}
                        {/* seleccion marca */}
                        <div className='relative flex h-10 justify-center w-full overflow-clip rounded-lg select-container'>
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" >Seleccionar marca</label>
                            <select className='flex select items-center rounded-r-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white' name="marca" id="marca" onChange={formik.handleChange}>
                                <option value="">ninguno</option>
                                {marca.map((item) => (

                                    <option key={item.id_Marca} value={item.id_Marca}>{item.Nom_Marca}</option>

                                ))
                                }
                                {/* // <option value="Bando">Bando</option>
                                // <option value="Taverniti">Taverniti</option>
                                // <option value="BBN">BBN</option>
                                // <option value="Bravo">Bravo</option>
                                // <option value="Abstracta">Abstracta</option>
                                // <option value="Gell">Gell</option>
                                // <option value="Beckon">Beckon</option>
                                // <option value="US Amerika">US Amerika</option>
                                // <option value="Panther">Panther</option>
                                // <option value="Diosa">Diosa</option>
                                // <option value="Maycla">Maycla</option> */}

                            </select>
                        </div>
                        {/* seleccion marca */}
                        {/* seleccion genero */}
                        <div className='relative flex h-10 justify-center w-full overflow-clip rounded-lg'>
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" >Seleccionar genero</label>
                            <div className=' items-center gap-2 text-white flex'>

                                <label htmlFor="" className='pl-2'>Mujeres</label>
                                <input name='genero' value="femenino"
                                    type="radio"
                                    onChange={formik.handleChange} />
                                <label htmlFor="">Hombres</label>
                                <input
                                    name='genero'
                                    value="masculino"
                                    type="radio"
                                    onChange={formik.handleChange} />
                            </div>
                        </div>
                        {/* seleccion genero */}
                        {/* seleccion color */}
                        <div className='relative flex h-10 justify-center w-full overflow-clip rounded-lg select-container'>
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" >Seleccionar color</label>
                            <select className='flex select items-center rounded-r-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white' name="color" id="color" onChange={formik.handleChange}>
                                <option value="">ninguno</option>
                                <option value="Negro">Negro</option>
                                <option value="Blanco">Blanco</option>
                                <option value="Gris">Gris</option>
                                <option value="Celeste">Celeste</option>
                                <option value="Azul">Azul marino</option>
                                <option value="Rojo">Rojo</option>
                                <option value="Amarillo">Amarillo</option>
                                <option value="Rosa">Rosa</option>
                                <option value="Verde">Verde</option>
                                <option value="Beige">Beige</option>
                            </select>
                        </div>
                        {/* seleccion color */}
                        {/* seleccion precio */}
                        <div className='relative flex h-10 justify-center w-full overflow-clip rounded-lg'>
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" > precio$:</label>
                            <input type='number' className='peer w-full rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none' name="precio" id="precio" onChange={formik.handleChange} />


                        </div>
                        {/* seleccion precio */}
                        {/* seleccion cantidad */}
                        <div className='relative flex h-10 justify-center w-full overflow-clip rounded-lg'>
                            <label className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-500 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white" > cantidad</label>
                            <input type='number' className='peer w-full rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none' name="cantidad" id="cantidad" onChange={formik.handleChange} />


                        </div>
                        {/* seleccion cantidad */}

                        {/* Seleccionar Imagen */}
                        <div className="">
                            <input
                                id="image"
                                name="image"
                                type="file"
                                onChange={(event) => {
                                    formik.setFieldValue("image", event.currentTarget.files[0]);
                                }}
                                className="w-full rounded-r-lg border border-slate-400 p-2 text-white placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
                            />

                        </div>
                        {/* Seleccionar Imagen */}

                    </div>
                    <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline
                    mx-auto focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">Guardar</button>
                </div>


                {/* Agrega otros campos del formulario (por ejemplo, categoría, precio, imagen) */}

            </form>

        </div>
    )
}

export default CargaProducto

