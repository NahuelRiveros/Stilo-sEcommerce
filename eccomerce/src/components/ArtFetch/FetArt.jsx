import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import ProductList from './ProductList'
import { useLocation } from 'react-router-dom'


const FetArt = () => {

    const location = useLocation()
    const [articulo, setArticulo] = useState("")
    const [marca, setMarca] = useState("")

    useEffect(() => {
        setArticulo(location.state.articulo)
        setMarca(location.state.marca)
    }, [])


    // ARTICULOS QUE EL CLIENTE PIDIO
    console.log(marca)
    console.log(marca)
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');


    // Lógica para filtrar productos según la categoría seleccionada

    return (
        <div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                category={category}
                setCategory={setCategory}
                size={size}
                setSize={setSize}
                color={color}
                setColor={setColor}
            />
            <ProductList
                searchQuery={searchQuery}
                category={category}
                size={size}
                color={color}
            />
        </div>
    );

}

export default FetArt