import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import ProductList from './ProductList'
import { useLocation } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import Product from '../product'


const FetArt = () => {

    const location = useLocation()

    const [testProducto, setTestProducto] = useState([])

    const data = useLoaderData()



    // name: 'Camisa de mezclilla',
    // image: 'https://via.placeholder.com/150',
    // brand: 'Levi\'s',
    // size: 'L',
    // color: 'rojo'
    // price: 1000,
    // ARTICULOS QUE EL CLIENTE PIDIO

    const [searchQuery, setSearchQuery] = useState('');

    const [articulo, setArticulo] = useState('');

    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    useEffect(() => {
        setArticulo(location.state.category)
        // setBrand(location.state.marca)
        setTestProducto(data)
    }, [])

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
                productos={testProducto}
                searchQuery={searchQuery}
                size={size}
                color={color}
                category={location.state.category}
                brand={location.state.brand}
                genero={location.state.genero}
            />
        </div>
    );

}

export default FetArt