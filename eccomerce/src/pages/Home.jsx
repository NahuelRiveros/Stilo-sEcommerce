import React, { useState } from 'react'
import { useEffect } from 'react'
import Carrousel from '../components/Carrousel'
import Product from '../components/product'
import ProductHome from './ProductHome'
import { Marcas } from './Marcas'
import { useLoaderData } from 'react-router-dom'
function Home() {
  const [productos, setProductos] = useState([])

  //obtengo desde la ruta creada lo que envio desde App
  const data = useLoaderData()
  //  console.log(data) obtienes todos los productos
  useEffect(() => {
    setProductos(data)
  }, [data])

  return (
    <div>

      <Marcas />
      <Carrousel />
      <ProductHome productos={productos} />
    </div>
  )
}

export default Home