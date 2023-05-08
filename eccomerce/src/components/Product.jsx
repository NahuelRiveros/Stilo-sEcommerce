import React from 'react'
import ProductCard from './productCard'

const Product = ({productos}) => {
  // console.log(productos)
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>

        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center font-titleFont font-semibold'>shopping everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[600px] text-gray-600 text-center'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor ab, quidem dolore dicta repudiandae harum accusamus tempore. Nam sint tempora in vel pariatur sunt aliquid ab maiores explicabo numquam! 
        </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-5 gap-10'>

        {productos.map((item)=>(
          <ProductCard key={item.id} product={item}/>
        ))}
        </div>
    </div>
  )
}

export default Product