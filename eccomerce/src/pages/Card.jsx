import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { logoStilo } from '../assets/logo';
import CardCarrito from '../components/CardCarrito';
import { toast } from 'react-toastify';
import StripeChekout from 'react-stripe-checkout';
import axios from 'axios';
const Card = () => {

  // ========== INFORMACION DEL PRODUCTO PARA CARRITO COMPRA Y  ELMINAR CARRITO ===========
  const productData = useSelector((state) => state.bazar.productData)
  //-======= INFORMACION DEL USUARIO SI LOGEO O NO =============
  const userInfo = useSelector((state) => state.bazar.userInfo)

  const [totalMonto, setTotalMonto] = useState('')

  const [pagoAhora, setPagoAhora] = useState(false)
  // funcion para setear los precios totales y sub total de los articulos que agrego la persona
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.cantidad;
      return price
    })
    // console.log(price)
    setTotalMonto(price.toFixed(2))
  }, [productData])

  // ========== FUNCION DE CHEQUEO DE COMPRA ================

  const checkCompra = () => {
    if (userInfo) {
      setPagoAhora(true)
    } else {
      toast.error('Por favor inicie secion antes de realizar una compra')
    }
  };
  const pagoComprob = async (token) => {
    await axios.post('http://localhost:8000/pagos', {
      amount: totalMonto * 100,
      token: token,

    })
  }

  // console.log(producData)
  return (
    <div className=''>
      <img src={logoStilo} alt="card" className='w-full h-60 object-cover' />
      <div className='w-full '>
        <h2 className='font-titleFont font-semibold text-2xl text-center max-[1024px]:pt-5 
        min-[1024px]:hidden'>Mi Carrito</h2>
      </div>
      <div className='max-w-screen-xl mx-auto py-20 flex max-[1024px]:flex-col-reverse max-[1024px]:items-center items-start '>
        <CardCarrito></CardCarrito>
        <div className='min-[1024px]:w-1/3 bg-[rgb(240,240,240)] py-6 px-4 max-[1024px]:w-2/3'>
          <div className='flex flex-col gap-6 border-b-[2px] border-b-gray-400 pb-6'>
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
          <button onClick={checkCompra} className='bg-[rgb(0,0,0)] text-[rgb(250,250,250)] w-full py-3 mt-6 text-base hover:bg-orange-700 duration-300 cursor-pointer'> Procesar Compra</button>
          {
            pagoAhora &&
            <div className='w-full mt-6 flex items-center justify-center'>
              <StripeChekout
                stripeKey='pk_test_51N82iGAc7XQMw9zULTk3GWXFalAW2eQJ1eeiKj6Tn2omp5LQUVcla09l2jRMSLpMYEuxyvHcVUI9BubXkxVxbCUZ001EtX7RqT'
                name='Stilos Online'
                amount={totalMonto * 100}
                label='pago a Stilo`s'
                description={`tu monto total a pagar es $${totalMonto}`}
                email={userInfo.email}
                token={pagoComprob}
              ></StripeChekout>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Card