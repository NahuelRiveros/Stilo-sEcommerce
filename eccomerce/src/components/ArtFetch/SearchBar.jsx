import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, category, setCategory, color, setColor, setSize, size }) => {
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 border border-gray-300 rounded"
            />
            <select
                value={category}
                onChange={handleCategoryChange}
                className="ml-2 px-4 py-2 border border-gray-300 rounded"
            >
                <option value="">Todas las categorías</option>
                <option value="camisas">Camisas</option>
                <option value="pantalones">Pantalones</option>
                <option value="vestidos">Vestidos</option>

                {/* Agrega más opciones de categorías según tus necesidades */}
            </select>
            <select
                value={color}
                onChange={handleColorChange}
                className="ml-2 px-4 py-2 border border-gray-300 rounded"
            >
                <option value="azul">azul</option>
                <option value="rojo">rojo</option>
                <option value="verde">verde</option>
                <option value="negro">negro</option>
                <option value="bordo">bordo</option>
                <option value="blanco">blanco</option>

                {/* Agrega más opciones de categorías según tus necesidades */}
            </select>
        </div>
    );
}
export default SearchBar