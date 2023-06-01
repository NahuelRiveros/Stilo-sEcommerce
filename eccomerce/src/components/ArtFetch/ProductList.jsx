import React from 'react';

const ProductList = ({ searchQuery, category, size, color }) => {
    // Datos de ejemplo de productos
    const products = [
        { id: 1, name: 'Camisa de algodón', category: 'camisas', size: 'M', color: 'azul' },
        { id: 2, name: 'Pantalón vaquero', category: 'pantalones', size: 'L', color: 'negro' },
        { id: 3, name: 'Vestido floral', category: 'vestidos', size: 'S', color: 'rojo' },
        // Agrega más productos según tus necesidades
    ];

    // Filtra los productos según la categoría seleccionada y el término de búsqueda
    const filteredProducts = products.filter((product) => {
        const matchCategory = category ? product.category === category : true;
        const matchSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchSize = size ? product.size === size : true;
        const matchColor = color ? product.color === color : true;
        return matchCategory && matchSearchQuery && matchSize && matchColor;
    });

    return (
        <div>
            <h2>Productos</h2>
            <div className="mb-4">
                <p>Filtros seleccionados:</p>
                {category && <span className="mr-2">Categoría: {category}</span>}
                {size && <span className="mr-2">Talle: {size}</span>}
                {color && <span className="mr-2">Color: {color}</span>}
            </div>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.name} -- {product.size} -- {product.color} </li>
                ))
                }
            </ul>
        </div>
    )
}
export default ProductList