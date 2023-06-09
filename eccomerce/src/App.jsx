import React, { useEffect, useState } from 'react'
import './index.css'
// import Navbar from './components/Navbar'
import Navbar from './components/NavegadorLinks/Navbar'
import Home from './pages/Home'
import Footer from './components/footer'
import Card from './pages/Card'
import InfoPorducto from './components/infoProducto'
import Login from './pages/Login'
import MachArt from './components/ArtFetch/MachArt'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  ScrollRestoration
} from "react-router-dom";
import CargaProducto from './components/ProductoAdmin/CargaProducto'
import CargaDatoPers from './components/PersonaDatos/CargaDatoPers'
import axios from 'axios';


//LLAMADO PRODUCTO DESDE LA BD
// Datos de ejemplo de productos

// const productBD = () => {
//   const productos = [
//     {
//       id: 1,
//       category: 'Camisas',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Bando',
//       size: 'S',
//       price: 1000,
//       color: 'Celeste'
//     },
//     {
//       id: 2,
//       category: 'Camisas',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Bravo',
//       size: 'S',
//       price: 1000,
//       color: 'celeste'
//     },
//     {
//       id: 3,
//       category: 'Remeras',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Bravo',
//       size: 'M',
//       price: 1000,
//       color: 'celeste'
//     },
//     {
//       id: 4,
//       category: 'Remeras',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'BBN',
//       size: 'M',
//       price: 1000,
//       color: 'celeste'
//     },
//     {
//       id: 5,
//       category: 'Jeans',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Bando',
//       size: 'S',
//       price: 1000,
//       color: 'celeste'
//     },
//     {
//       id: 6,
//       category: 'Jeans',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'BBN',
//       size: 'XL',
//       price: 1000,
//       color: 'celeste'
//     },
//     {
//       id: 7,
//       category: 'Chombas',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Raiders',
//       size: 'XL',
//       price: 1000,
//       color: 'celeste'
//     },
//     {
//       id: 8,
//       category: 'Chombas',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Taverniti',
//       size: 'L',
//       price: 1000,
//       color: 'celeste'
//     },
//     {
//       id: 9,
//       category: 'Bermuda',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Bravo',
//       size: 'L',
//       price: 1000,
//       color: 'Bordo'
//     },
//     {
//       id: 10,
//       category: 'Bermuda',
//       detalle: 'Camisa de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'BBN',
//       size: 'M',
//       price: 1000,
//       color: 'Bordo'
//     },
//     ,
//     {
//       id: 11,
//       category: 'Remeras',
//       detalle: 'Remeras de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Gell',
//       size: 'M',
//       price: 1000,
//       color: 'Negro'
//     },
//     ,
//     {
//       id: 12,
//       category: 'Remeras',
//       detalle: 'Remeras de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Taverniti',
//       size: 'M',
//       price: 1000,
//       color: 'Negro'
//     },
//     ,
//     {
//       id: 13,
//       category: 'Jeans',
//       detalle: 'Jeans de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Beckon',
//       size: 'M',
//       price: 1000,
//       color: 'Blanco'
//     },
//     ,
//     {
//       id: 14,
//       category: 'Jeans',
//       detalle: 'Jeans de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Maycla',
//       size: 'M',
//       price: 1000,
//       color: 'Blanco'
//     },
//     ,
//     {
//       id: 15,
//       category: 'Polleras',
//       detalle: 'Polleras de chocolate',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Maycla',
//       size: 'M',
//       price: 1000,
//       color: 'Amarillo'
//     },
//     ,
//     {
//       id: 16,
//       category: 'Polleras',
//       detalle: 'Polleras de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Diosa',
//       size: 'M',
//       price: 1000,
//       color: 'Amarillo'
//     },
//     ,
//     {
//       id: 17,
//       category: 'Calzados',
//       detalle: 'Calzados de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'USA',
//       size: 'M',
//       price: 1000,
//       color: 'Rojo'
//     },
//     ,
//     {
//       id: 18,
//       category: 'Calzados',
//       detalle: 'Calzados de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Panther',
//       size: 'M',
//       price: 1000,
//       color: 'Rojo'
//     },
//     ,
//     {
//       id: 19,
//       category: 'Camisas',
//       detalle: 'Camisas de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Gell',
//       size: 'M',
//       price: 1000,
//       color: 'Azul'
//     },
//     ,
//     {
//       id: 20,
//       category: 'Camisas',
//       detalle: 'Camisas de mezclilla',
//       image: 'https://via.placeholder.com/150',
//       brand: 'Diosa',
//       size: 'M',
//       price: 1000,
//       color: 'Azul'
//     },
//   ]
//   return productos

// }





// LLAMADO PRODUCTOS DESDE LA BD


const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* //invetigar bien estas funciones */}
      <ScrollRestoration />
      <Outlet />
      {/* //invetigar bien estas funciones */}
      <Footer />
    </div>
  )
}



// const [productosTest, setProductosTest] = useState([])


const productBD = async (req, res) => {
  const URI = "http://localhost:8000/stilos/homeGetProd/"
  try {
    const response = await axios.get(URI);
    const productos = response.data;
    console.log(productos);
    return productos

  }
  catch (err) {
    console.log(err)
  }
}

const productBDFilter = async (req, res) => {
  const URI = "http://localhost:8000/stilos/filterGetProd/"
  try {
    const response = await axios.get(URI);
    const productos = response.data;
    console.log(productos);
    return productos

  }
  catch (err) {
    console.log(err)
  }
}

const productBDLoader = async () => {
  return productBD()
    .then((productos) => {
      return productos;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

const productBDLoaderFilter = async () => {
  return productBDFilter()
    .then((productos) => {
      return productos;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
// useEffect(() => {
//   productBD()
//   // setProductos(data)
// }, [])
// console.log(productBD())


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productBDLoader,
      },
      {
        path: 'infoProducto/:id',
        element: <InfoPorducto />
      },
      {
        path: 'card',
        element: <Card />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/Producto/:id',
        element: <MachArt />,
        loader: productBDLoaderFilter,
      }
      , {
        path: '/InsertProducto',
        element: <CargaProducto />,
      }
      , {
        path: '/DatoPersonales',
        element: < CargaDatoPers />,
      }
    ]
  }])

function App() {



  return (
    <div >
      <RouterProvider router={router} />


    </div>

  )
}

export default App
