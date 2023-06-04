import React from 'react'
import ProductCard from '../components/productCard'

const ProductHome = ({ productos }) => {

    // Filtra los productos según la categoría seleccionada y el término de búsqueda

    return (
        <div className='py-10'>



            <div className='flex flex-col items-center gap-4'>

                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center font-titleFont font-semibold inline-block'>shopping everyday</h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[600px] text-gray-600 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor ab, quidem dolore dicta repudiandae harum accusamus tempore. Nam sint tempora in vel pariatur sunt aliquid ab maiores explicabo numquam!
                </p>
            </div>
            <div className=''>


                <div className=' py-10 m-6 sm:m-7 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                    {/* max-w-screen-xl mx-auto py-10 sm:grid grid-cols-5 gap-10 */}


                    {/* Aqui se EJECUTAN las card desordenadas y se envia al componente card los datos necesarios por el props product */}
                    {
                        productos.map((item) => (<ProductCard className="flex flex-col" key={item.id} product={item} />))
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductHome