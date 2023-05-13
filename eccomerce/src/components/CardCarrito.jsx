import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from 'react-router-dom';
import { deleteItem, descreaseCantidad, incrementCantidad, resetCart } from '../redux/bazarSlice';
import { toast , ToastContainer } from 'react-toastify';
const CardCarrito = () => {
  const dispatch= useDispatch()
  let [baseCant, setBaseCant] = useState(1)
  const producData = useSelector((state)=> state.bazar.productData)
  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
        <h2 className='font-titleFont font-semibold text-2xl'>Mi Carrito</h2>
      </div>
      <div>
        {producData.map((item)=>(
          <div key={item.id} className='flex items-center justify-between gap-6 mt-6'>

              {/* Remover item del carro */}
              <div className='flex items-center gap-5'>
                  <RemoveShoppingCartIcon onClick={()=>dispatch(deleteItem(item.id))& toast.error(`${item.title} fue removido`) } className='text-xl text-gray-700 hover:text-orange-700 cursor-pointer duration-300'/>
                  <img src={item.image} alt="itemCarro"
                  className='w-32 h-32 object-cover' />
              </div>
              <h2 className='w-52'>{item.title}</h2>

              {/* BOTTON DE CANTIDAD SI QUIERE AGREGAR */}
              <div className='w-52 flex items-center justify-between gap-4 text-gray-500 border p-3 shadow-md'>

                            <p className='text-sm font-bodyFont'>Cantidad</p>
                            <div className='flex item gap-4 text-sm font-semibold '>
                                {/* BOTON DE QUITAR  provar cambiar span por button*/}
                                <span 
                                
                                className='border text-lg h-5 font-normal px-2 flex 
                                items-center justify-center
                                hover:text-white 
                                cursor-pointer 
                                hover:bg-gray-700
                                duration-300 active:bg-black' onClick={()=>dispatch(descreaseCantidad({
                                    id: item.id,
                                    title: item.name,
                                    image: item.image,
                                    marca: item.brand,
                                    price: item.price,
                                    cantidad: 1
                                }))}>-</span>
                                {/* CANTIDA A AGREGAR  */}
                                <span>{item.cantidad}</span>
                                {/* CANTIDAD A AÑADIR */}
                                <span className='border text-lg h-5 font-normal px-2 flex 
                                items-center justify-center
                                hover:text-white 
                                cursor-pointer 
                                hover:bg-gray-700
                                duration-300 active:bg-black' onClick={()=>dispatch(incrementCantidad({
                                  id: item.id,
                                  title: item.name,
                                  image: item.image,
                                  marca: item.brand,
                                  price: item.price,
                                  cantidad: 1
                              }))}>+</span>
                            </div>
                        </div>
              <p className=' rounded-full bg-orange-400 inline-block p-1'>${item.price * item.cantidad}
              </p>
          </div>
        )) }

      </div>
      <button onClick={()=>dispatch(resetCart()) & toast.error('Tu carrito esta vacio')} className='bg-orange-400 text-[rgb(250,250,250)] mt-8 ml-11 py-1 px-5 inline-block hover:bg-red-800 duration-300'>
        Reset Carrito
      </button>
      <Link to={'/'}>
          <button className='mt-8 ml-10 flex items-center gap-1 text-gray-700 hover:text-orange-700 duration-300'>
            <span><ReplyIcon/></span>
            volver a la tienda
          </button>
      </Link>
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

export default CardCarrito