import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import ProductList from './ProductList'
import { useLocation } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Product from '../product'


const FetArt = () => {


    const [infoNavbarCategory, setInfoNavbarCate] = useState([])
    const [infoNavbarMarca, setInfoNavbarMarca] = useState([])
    const [infoNavbarGenero, setInfoNavbarGenero] = useState([])
    const location = useLocation()


    const data = useLoaderData()

    const [productos, setProductos] = useState(data || undefined)

    //obtengo desde la ruta creada lo que envio desde App
    //  console.log(data) obtienes todos los productos
    useEffect(() => {
        setProductos(data)
        setInfoNavbarCate(location.state.category)
        setInfoNavbarMarca(location.state.brand)
        setInfoNavbarGenero(location.state.genero)
    }, [])

    console.log(productos)
    console.log(`nava->${infoNavbarCategory}nava1->${infoNavbarMarca}nava2->${infoNavbarGenero}`)
    // name: 'Camisa de mezclilla',
    // image: 'https://via.placeholder.com/150',
    // brand: 'Levi\'s',
    // size: 'L',
    // color: 'rojo'
    // price: 1000,
    // ARTICULOS QUE EL CLIENTE PIDIO

    console.log(productos)

    const [searchQuery, setSearchQuery] = useState('');
    const [articulo, setArticulo] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');


    // Lógica para filtrar productos según la categoría seleccionada

    return (
        <div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                size={size}
                setSize={setSize}
                color={color}
                setColor={setColor}
            />

            <Product

                productos={productos}
                searchQuery={searchQuery}
                size={size}
                color={color}
                category={location.state.category}
                brand={location.state.brand}
                genero={location.state.genero}
            // category={producto.Categoria_Producto.Nom_Categoria}
            // brand={producto.Marca_Producto.Nom_Marca}
            // genero={producto.Genero_Producto.Genero_Producto}
            />



        </div>
    );

}

export default FetArt