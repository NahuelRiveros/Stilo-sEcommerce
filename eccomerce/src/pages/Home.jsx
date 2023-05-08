import React, { useState } from 'react'
import { useEffect } from 'react'
import Carrousel from '../components/Carrousel'
import Product from '../components/product'
import { useLoaderData } from 'react-router-dom'
function Home() {
  const [productos, setProductos] = useState([])
 const data = useLoaderData()
  useEffect(() => {
    setProductos(data)
  }, [data])
  
  return (
    <div>
      
        <Carrousel/>
        <Product productos={productos} />

    </div>
  )
}

export default Home