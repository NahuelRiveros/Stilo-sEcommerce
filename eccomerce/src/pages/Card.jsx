import React, { useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { logoStilo } from '../assets/logo'
import CardCarrito from '../components/CardCarrito'
const Card = () => {
  const productData = useSelector((state)=> state.bazar.productData)
  const [totalMonto, setTotalMonto] = useState('')
  // funcion para setear los precios totales y sub total de los articulos que agrego la persona
  useEffect(()=> {
    let price=0;
    productData.map((item)=>{
      price += item.price * item.cantidad;
      return price
    })
    // console.log(price)
    setTotalMonto(price.toFixed(2))
  }, [productData])
  
  // console.log(producData)
  return (
    <div>
      <img src={logoStilo} alt="card" className='w-full h-60 object-cover' />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CardCarrito></CardCarrito>
        <div className='w-1/3 bg-[rgb(240,240,240)] py-6 px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
              <h2 className='text-2xl font-titleFont font-bold'>Carrito Total</h2>
              <p className='flex item-center gap-4 text-base'>
                SubTotal
                <span className='font-bodyFont font-bold text-lg'> $ {totalMonto}
                </span>
              </p>
              <p className='flex item-start gap-4 text-base'>
                Envio
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis totam est nobis aspernatur dolore neque modi ad debitis voluptatem consectetur doloremque beatae placeat atque repellendus cupiditate, commodi eligendi harum similique.
                </span>
              </p>
              
            </div>
            <p className='font-titleFont font-semibold flex justify-between mt-6'>
              Total <span className='text-xl font-bold'>$ {totalMonto}</span>
            </p>
            <button className='bg-[rgb(0,0,0)] text-[rgb(250,250,250)] w-full py-3 mt-6 text-base hover:bg-orange-700 duration-300 cursor-pointer'> Procesar Compra</button>
        </div>
      </div>
    </div>
  )
}

export default Card