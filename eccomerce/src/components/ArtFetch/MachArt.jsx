import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import ProductList from './ProductList'
import { useLocation } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Product from '../product'



const FetArt = () => {




    const [productos, setProductos] = useState()
    useEffect(() => {

    }, [])

    const productBD = async (req, res) => {
        const URI = "http://localhost:8000/stilos/homeGetProd/"
        try {
            await axios.get(URI).then((res) => {
                const productos = res.data
                console.log(res.data)
                setProductos(productos)
            })
        } catch (err) {
            console.log(err)
        }
    }
    productBD()
    console.log(productos)

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
            // category={productos.Categoria_Producto.Nom_Categoria}
            // brand={productos.Talle_Producto.Nom_Talle}
            // genero={productos.Genero_Producto.Genero_Producto}
            />
        </div>
    );

}

export default FetArt