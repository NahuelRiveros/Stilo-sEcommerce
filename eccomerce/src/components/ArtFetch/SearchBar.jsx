import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, color, setColor, setSize, size }) => {

    // ESTA FUNCION RECIBE LO QUE SE ESCRIBE EN EL INPUT
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // ESTA FUNCION RECIBE LA GATEGOTIA DEL ARTICULO A VER
    const handleTalleChange = (event) => {
        setSize(event.target.value);
    };
    //ESTA FUNCION RECIBE EL COLOR DEL ARTICULO A VER
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
                value={size}
                onChange={handleTalleChange}
                className="ml-2 px-4 py-2 border border-gray-300 rounded"
            >
                <option value="">Todas las Talles</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
                <option value="XXL">2X-Large</option>
                <option value="XXXL">3X-Large</option>
                <option value="XXXXL">4X-Large</option>

                {/* Agrega más opciones de categorías según tus necesidades */}
            </select>
            <select
                value={color}
                onChange={handleColorChange}
                className="ml-2 px-4 py-2 border border-gray-300 rounded"
            >
                <option value="">Todas los colores</option>
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