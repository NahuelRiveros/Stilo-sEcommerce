import React, { useState } from 'react'
import { useEffect } from 'react'
import Carrousel from '../components/Carrousel'
import Product from '../components/product'
import ProductHome from './ProductHome'
import { Marcas } from './Marcas'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
function Home() {
  const [productos, setProductos] = useState([])

  //obtengo desde la ruta creada lo que envio desde App
  // const data = useLoaderData()
  //  console.log(data) obtienes todos los productos
  const [productosTest, setProductosTest] = useState([])
  useEffect(() => {
    productBD()
    // setProductos(data)
  }, [])

  const productBD = async (req, res) => {
    const URI = "http://localhost:8000/stilos/homeGetProd/"
    try {
      await axios.get(URI).then((res) => {
        const productos = res.data
        console.log(res.data)
        setProductosTest(productos)
      })
    } catch (err) {
      console.log(err)
    }
  }
  console.log(productosTest)

  return (
    <div>

      <Marcas />
      <Carrousel />
      <ProductHome productos={productosTest} />
    </div>
  )
}

export default Home