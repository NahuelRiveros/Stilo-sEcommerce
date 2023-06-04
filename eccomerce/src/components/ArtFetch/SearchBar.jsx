import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
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
        <div className="mb-4 flex gap-3 content-center max-[540px]:flex-col justify-center p-2 m-2 flexrounded-lg border border-gray-400 shadow-lg focus:outline-none focus:border-orange-500 ">

            <select
                value={size}
                onChange={handleTalleChange}
                className="p-2 border-b-2 w-96 border-gray-300 focus:outline-none focus:border-blue-500"
            >
                <option value="">Todos los Talles</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
                <option value="XXL">2X-Large</option>
                <option value="XXXL">3X-Large</option>
                <option value="XXXXL">4X-Large</option>

                {/* Agrega más opciones de categorías según tus necesidades */}
            </select>
            <div className="flex w-96 items-center border border-gray-300 rounded-md">
                <span className="p-2 text-gray-500">
                    <SearchIcon />
                </span>
                <input
                    type="text"
                    placeholder="Buscar"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-2 px-4 focus:outline-none"
                />
            </div>


            <select
                value={color}
                onChange={handleColorChange}
                className="p-2 border-b-2 w-96 border-gray-300 focus:outline-none focus:border-blue-500"
            >

                <option value=""> Todos los colores </option>
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