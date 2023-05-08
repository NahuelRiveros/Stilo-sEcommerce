import React from 'react'
import { logo1, logo2, logo3 } from '../assets/logo'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='w-full h-20 bg-white
    border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50' >
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <Link to={'/'}>
                    <div>

                        <img src={logo2} alt="logoEmp" className='w-16 rounded-full' />
                    </div>
                </Link>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2decoration-[1px] cursor-pointer duration-300'>
                            Home
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2decoration-[1px] cursor-pointer duration-300'>
                            Pages
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2decoration-[1px] cursor-pointer duration-300'>
                            Shop
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2decoration-[1px] cursor-pointer duration-300'>
                            Element
                        </li>

                    </ul>
                    <div className='relative'>
                        <ShoppingBagOutlinedIcon fontSize='large' />
                        <span className='absolute w-6 top-3 left-1 text-sm flex items-center justify-center font-semibold'>
                            0
                        </span>
                    </div>
                    <img src={'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=400'} alt="3" className='w-8 h-8 rounded-full' />

                </div>
            </div>


        </div>
    )
}

export default Navbar