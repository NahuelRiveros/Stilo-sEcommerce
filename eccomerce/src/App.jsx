import React from 'react'
import './index.css'
// import Navbar from './components/Navbar'
import Navbar from './components/testNav/Navbar'
import Home from './pages/Home'
import Footer from './components/footer'
import Card from './pages/Card'
import InfoPorducto from './components/infoProducto'
import Login from './pages/Login'
import FetArt from './components/ArtFetch/FetArt'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  ScrollRestoration
} from "react-router-dom";

//ejemplo productos
const product = () => {
  const pepe = [{
    id: 1,
    name: 'Camisa de mezclilla',
    image: 'https://via.placeholder.com/150',
    brand: 'Levi\'s',
    size: 'L',
    price: 1000
  },
  {
    id: 2,
    name: 'Pantalón de vestir',
    image: 'https://via.placeholder.com/150',
    brand: 'Zara',
    size: 'M',
    price: 800
  },
  {
    id: 3,
    name: 'Tenis blancos',
    image: 'https://via.placeholder.com/150',
    brand: 'Adidas',
    size: '8',
    price: 1500
  }
    ,
  {
    id: 4,
    name: 'Tenis blancos',
    image: 'https://via.placeholder.com/150',
    brand: 'Adidas',
    size: '8',
    price: 1500
  }, {

    id: 5,
    name: 'Camisa de mezclilla',
    image: 'https://via.placeholder.com/150',
    brand: 'Levi\'s',
    size: 'L',
    price: 1000
  },
  {
    id: 6,
    name: 'Pantalón de vestir',
    image: 'https://via.placeholder.com/150',
    brand: 'Zara',
    size: 'M',
    price: 800
  },
  {
    id: 7,
    name: 'Tenis blancos',
    image: 'https://via.placeholder.com/150',
    brand: 'Adidas',
    size: '8',
    price: 1500,
  }
    ,
  {
    id: 8,
    name: 'Tenis blancos',
    image: 'https://via.placeholder.com/150',
    brand: 'Adidas',
    size: '8',
    price: 1500,
  }]
  return pepe
}


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

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />,
      loader: product,
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
      element: <FetArt />
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
