import React from 'react'
import ProductCard from './productCard'

const Product = ({ productos, searchQuery, category, size, color, brand, genero }) => {

  // Filtra los productos según la categoría seleccionada y el término de búsqueda
  // console.log(productos)
  const filteredProducts = productos?.filter((product) => {

    const matchCategory = category ? product.Categoria_Producto?.Nom_Categoria === category : true;
    const matchSearchQuery = product?.Detalle_Producto.toLowerCase().includes(searchQuery.toLowerCase());
    const matchSize = size ? product?.Talle_Producto?.Nom_Talle === size : true;
    const matchColor = color ? product?.Color_Producto?.Nom_Color
      .toLowerCase() === color.toLowerCase() : true;
    const matchBrand = brand ? product?.Marca_Producto?.Nom_Marca === brand : true;
    // console.log(`marca ${brand} -1>${product.brand} rta ${matchBrand} | categoria ${category} -2> ${product.category} rta ${matchCategory} || genero ${genero} `)
    // console.log(`1 ${matchCategory} `)
    // console.log(`2 ${matchSearchQuery}`)
    // console.log(`3 ${matchSize}`)
    // console.log(`4 ${matchBrand}`)
    return matchCategory && matchSearchQuery && matchSize && matchColor && matchBrand;
  });
  console.log({ filteredProducts })
  return (
    <div className='py-10'>


      <div className='flex flex-col items-center gap-4'>

        <h1 className='text-2xl bg-black text-[#ffccbc] py-2 px-5 text-center font-titleFont font-semibold inline-block rounded-full'>Stylo`s {genero}</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[600px] text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor ab, quidem dolore dicta repudiandae harum accusamus tempore. Nam sint tempora in vel pariatur sunt aliquid ab maiores explicabo numquam!
        </p>
      </div>
      <div className='flex flex-col items-center pt-5 gap-5'>
        <h2 className='flex justify-around bg-black text-center text-[#ffccbc] items-center px-5 text-xl font-titleFont font-bold rounded-full'>Productos Buscados</h2>
        <div className="mb-4 flex gap-10 justify-between max-[620px]:flex-col max-[620px]:gap-5  ">

          {category &&
            <span className="flex gap-2 pl-2 shadow-lg rounded-full bg-transparent shadow-gray-600 cursor-pointer  transition-colors duration-300 hover:text-orange-800 font-mono ">
              Categoría
              <p className='rounded-r-lg border w-full bg-black border-slate-400 px-2 text-[#ffccbc] font-bold font-titleFont placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none'>
                {category}
              </p>
            </span>}
          {brand &&
            <span className="flex gap-2 pl-2 shadow-lg rounded-full bg-transparent shadow-gray-600  cursor-pointer   transition-colors duration-300 hover:text-orange-800 font-mono ">
              Marca
              <p className='rounded-r-lg border w-full text-center bg-black border-slate-400 px-2 text-[#ffccbc] font-bold font-titleFont placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none'>
                {brand}
              </p>
            </span>}
          {size &&
            <span className="flex gap-2 pl-2 shadow-lg rounded-full bg-transparent shadow-gray-600  cursor-pointer   transition-colors duration-300 hover:text-orange-800 font-mono ">
              Talle
              <p className='rounded-r-lg border w-full text-center bg-black border-slate-400 px-2 text-[#ffccbc] font-bold font-titleFont placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none'>
                {size}
              </p>
            </span>}
          {color &&
            <span className="flex gap-2 pl-2 shadow-lg rounded-full bg-transparent shadow-gray-600  cursor-pointer   transition-colors duration-300 hover:text-orange-800 font-mono ">
              Color
              <p className='rounded-r-lg border w-full text-center bg-black border-slate-400 px-2 text-[#ffccbc] font-bold font-titleFont placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none'>
                {color}
              </p>
            </span>}

        </div>

      </div>
      <div className=' py-10 m-6 sm:m-7 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {/* max-w-screen-xl mx-auto py-10 sm:grid grid-cols-5 gap-10 */}


        {/* Aqui se EJECUTAN las card desordenadas y se envia al componente card los datos necesarios por el props product */}
        {
          filteredProducts.map((item) => (<ProductCard className="flex flex-col" key={item.id} product={item} />))
        }

      </div>
    </div>
  )
}

export default Product