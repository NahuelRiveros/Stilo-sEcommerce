import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import StarRateIcon from '@mui/icons-material/StarRate';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';

const InfoPorducto = () => {
    const dispatch = useDispatch()
    const [detalles, setDetalles] = useState({})
    const location = useLocation()
    //Manejar la cantidad del ADD
    let [baseCant, setBaseCant] = useState(1)
    //El location contiene toda la informacion del articulo que se selecciono, para mas info hacer console.log
    useEffect(() => {

        // console.log(location.state.item) 
        //sirve para ver el producto seleccionado en la imagen
        setDetalles(location.state.item)
    }, [])
    console.log(detalles)
    return (
        <div>
            <div className='max-w-screen-lg mx-auto my-10 flex max-[740px]:flex-col gap-10 justify-center items-center'>
                <p className='font-bodyFont text-4xl font-bold min-[740px]:hidden'>
                    {detalles.Detalle_Producto}
                </p>
                <div className='w-3/5 md:w-2/5 relative'>
                    <img className='w-full h-[400px] object-cover' src={detalles.Img_Producto} alt={detalles.Detalle_Producto} />
                    {/* Aqui pordemos poner lo que necesitemos encaso de que sea oferta o algo parecido */}
                    <div className='top-5 right-0 absolute'>
                        <p className='bg-black text-white font-semibold font-bodyFont py-1 px-8'>
                            {detalles.Marca_Producto.Nom_Marca}
                        </p>

                    </div>
                </div>
                {/* aqui podria ir si este articulo es de mujero o hombre */}

                <div className='w-3/5 flex flex-col justify-center gap-12'>
                    <div>
                        <p className='font-bodyFont text-4xl font-bold  max-[740px]:hidden'>
                            {detalles.Detalle_Producto}
                        </p>
                        <div className='flex items-center gap-5 mt-3'>
                            <p className='text-2xl font-mono'>Precio: ${detalles.Precio_Producto}</p>
                            {/* En caso de tener ofertas */}
                            {/* <p className='text-2xl font-mono line-through'>{detalles.price}</p> */}
                        </div>
                    </div>
                    <div className='flex gap-2 items-center max-[720px]:justify-center text-base'>
                        <div className='flex'>

                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />

                        </div>
                        <p className='text-xs text-gray-500'> (0 Vistas)
                        </p>
                    </div>
                    {/* <p className='text-base -mt-3 text-gray-500'>`{detalles.name} marca {detalles.brand} talle`</p> */}
                    {/* detalles del producto */}
                    <div className='flex max-[740px]:flex-col gap-5 items-center'>

                        <p className='text-base text-gray-500'>
                            Categoría:
                            <span className='font-medium capitalize pl-1'>
                                {detalles.Categoria_Producto.Nom_Categoria}
                            </span>
                        </p>
                        <p className='text-base text-gray-500'>
                            Marca:
                            <span className='font-medium capitalize pl-1'>
                                {detalles.Marca_Producto.Nom_Marca}
                            </span>
                        </p>
                        <p className='text-base text-gray-500'>
                            Color:
                            <span className='font-medium capitalize pl-1'>
                                {detalles.Color_Producto.Nom_Color}
                            </span>
                        </p>
                        <p className='text-base text-gray-500'>
                            Talle:
                            <span className='font-medium capitalize pl-1'>
                                {detalles.Talle_Producto.Nom_Talle}
                            </span>
                        </p>
                    </div>
                    {/* detalles del producto */}
                    <p className='text-base font-bodyFont -mt-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, laboriosam quidem. Repellendus reiciendis adipisci eos quis iusto exercitationem qui mollitia. Deleniti ratione asperiores at praesentium molestias beatae veniam placeat reiciendis.</p>

                    <div className='flex gap-2 justify-center'>

                        <div className='w-52 flex items-center justify-between gap-4 text-gray-500 border p-3 shadow-md'>

                            <div className='flex text-center'>


                            </div>
                            <p className='text-sm font-bodyFont'>Cantidad
                            </p>


                            <div className='flex item gap-4 text-sm font-semibold '>

                                <button className='border text-lg h-5 font-normal px-2 flex 
                                items-center justify-center
                                hover:text-white 
                                cursor-pointer 
                                hover:bg-gray-700
                                duration-300 active:bg-black' onClick={() => setBaseCant(baseCant === 1 ? (baseCant = 1) : baseCant - 1)}>-</button>
                                <span>
                                    {baseCant}
                                </span>
                                <button className='border text-lg h-5 font-normal px-2 flex 
                                items-center justify-center
                                hover:text-white 
                                cursor-pointer 
                                hover:bg-gray-700
                                duration-300 active:bg-black'
                                    // onClick={() => setBaseCant(baseCant + 1)}
                                    onClick={() => setBaseCant(baseCant === detalles.Existencia_Producto ? baseCant : baseCant + 1)}
                                >+</button>
                            </div>
                        </div>

                        <button className='bg-gray-700 text-white gap-1 flex py-3 px-6  active:bg-orange-700' onClick={() => dispatch(addToCart({
                            id: detalles.id_Producto,
                            title: detalles.Detalle_Producto,
                            image: detalles.Img_Producto,
                            marca: detalles.Marca_Producto.Nom_Marca,
                            price: detalles.Precio_Producto,
                            cantidad: baseCant
                        })) & toast.success(`se agrego ${baseCant} ${detalles.Detalle_Producto} al carro`)}>add</button>
                        <div className='absolute  '>

                            {
                                baseCant === detalles.Existencia_Producto && <span className='flex text-center text-xs text-red-600'>(maximo disponible)</span>
                            }
                        </div>

                    </div>




                </div>

            </div>
            <ToastContainer
                position='top-left'
                autoClose={2000}
                hideProgressBar={false}
                newesOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    )
}

export default InfoPorducto