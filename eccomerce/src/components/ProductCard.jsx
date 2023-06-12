import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  // Todos las cartas y productos
  // console.log(product)
  //Formatenado el nombre de la Ruta para ver detalles del producto al tocar la imagen
  const navigate = useNavigate()
  const producSelectHandle = product.detalle
  const idString = (producSelectHandle) => {
    return String(producSelectHandle).toLowerCase().split(' ').join('');
  }
  //FUNCION REFORMAR EL NOMBRE DE LA RUTA Y DIRECCIONAR A OTRA PAGINA
  const rootId = idString(producSelectHandle)
  // console.log(rootId)
  //Rutas al dar click en el evento
  const handleDetalles = () => {
    navigate(`/infoProducto/${rootId}`, {
      state: {
        item: product,
      }
    })
  }
  return (
    <div className='group border shadow-lg bg-slate-100 relative'>
      <div className='w-full h-58 cursor-pointer overflow-hidden' onClick={handleDetalles}>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-500'
          src={product.image} alt="productImg" />
      </div>
      {/* FOOTER CARD */}
      <div className='w-full boder-[1px] px-2
         py-5 '>
        <div className='flex justify-between items-center'>
          <div className='font-titleFont font-semibold'>
            <h2>{product.detalle.substring(0, 25)}</h2>
          </div>
          <div className='flex gap-2 relative overflow-hidden'>
            <div className='flex gap-2 transform lg:group-hover:translate-x-24 transition-transform duration-500'>

              {/* SIRVE PARA OFERTAS <p className='line-through text-gray-500'>{product.price}</p> */}
              <p className='font-serif'>${product.price}</p>
            </div>
            <div >
              {/* Falta agregar una descipcion al producto */}
              <span onClick={() => dispatch(addToCart({
                id: product.id,
                title: product.detalle,
                image: product.image,
                marca: product.brand,
                price: product.price,
                cantidad: 1

              })) & toast.success(`se agrego ${product.detalle} al carro`)
              } className='lg:absolute z-20 w-[100px] lg:text-gray-400 lg:hover:text-orange-400 
              text-red-500 flex-item-center gap-1 -top-0.5 lg:transform lg:-translate-x-32 lg:group-hover:-translate-x-8 lg:transition-transform cursor-pointer lg:duration-500 '><AddShoppingCartIcon /></span>
            </div>
          </div>
        </div>
        <div className='font-titleFont font-semibold'>
          <p className='rounded-full inline-block px-2 text-center bg-orange-600'>{product.brand}</p>
        </div>
        <div className='font-titleFont font-semibold'>
          <p>Talle {product.size}</p>
        </div>
        <div className='absolute top-4 right-0 bg-orange-600'>
          <p>Talle {product.size}</p>
        </div>
      </div>

      {/* Alert */}
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

export default ProductCard