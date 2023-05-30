import React, { useState } from 'react'
import { User, logo1, logo2, logo3 } from '../assets/logo'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    // bazar esta creado en store
    const productData = useSelector((state) => state.bazar.productData);
    const userInfo = useSelector((state) => state.bazar.userInfo)

    console.log(userInfo)
    console.log(productData)
    const [open, setOpen] = useState(false);


    return (
        <div className='w-full  bg-white
    border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50' >
            <div className=' lg:flex lg:items-center md:justify-between h-20 p-2'>
                {/* className='max-w-screen-xl h-full mx-auto flex items-center justify-between' */}
                <div className='flex justify-between items-center'>
                    <div>

                        <Link to={'/'}>
                            <div>
                                <img src={logo2} alt="logoEmp" className='w-16 rounded-full' />
                            </div>
                        </Link>
                    </div>

                    {/* MENU BURGER */}
                    <div className='flex flex-row items-center gap-2'>

                        <Link className='min-[1024px]:hidden' to={'/card'}>
                            <div className='relative'>
                                <ShoppingBagOutlinedIcon fontSize='large' />
                                <span className='absolute w-6 top-3 left-1 text-sm flex items-center justify-center font-semibold'>
                                    {productData.length}
                                </span>
                            </div>
                        </Link>

                        <Link className='
                        min-[1024px]:hidden
                        max-[425px]:hidden' to={'/login'}>
                            <img src={userInfo ? userInfo.image : User} alt="3" className='w-8 h-8 rounded-full' />
                        </Link>
                        {
                            userInfo && <p className='text-base font-bodyFont
                            min-[1024px]:hidden
                            max-[425px]:hidden font-semibold underline underline-offset-2'>
                                {userInfo.name}
                            </p>
                        }
                        <span className='text-3xl cursor-pointer lg:hidden block mx-2' onClick={() => setOpen(!open)}>
                            {!open ?
                                <CloseIcon fontSize='large' />
                                :
                                <MenuOpenIcon fontSize='large' />

                            }
                        </span>
                    </div>



                </div>
                {/* NAVBAR COMUN */}
                {/* flex items-center gap-8 */}
                {/* <div className=''> */}
                <ul className={`lg:flex lg:flex-row lg:items-center z-[-10] lg:z-auto lg:static absolute w-full lg:w-auto lg:py-0 lg:bg-white 
                lg:duration-0 flex flex-col items-center bg-[rgba(255,255,255,0.7)] left-0 lg:opacity-100  top-[-400px] transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[5rem]'}`}>
                    <li className='lg:text-base text-black lg:font-bold lg:hover:text-orange-700 lg:hover:underline lg:transition-none 
                    font-bold text-xl
                     lg:underline-offset-2decoration-[1px] cursor-pointer duration-300 mx-4 my-6 lg:my-0'>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className='lg:text-base text-black lg:font-bold lg:hover:text-orange-700 lg:hover:underline lg:transition-none 
                    font-bold text-xl
                     lg:underline-offset-2decoration-[1px] cursor-pointer duration-300 mx-4 my-6 lg:my-0'>
                        Pages
                    </li>
                    <li className='lg:text-base text-black lg:font-bold lg:hover:text-orange-700 lg:hover:underline lg:transition-none 
                    font-bold text-xl
                     lg:underline-offset-2decoration-[1px] cursor-pointer duration-300 mx-4 my-6 lg:my-0'>
                        Shop
                    </li>
                    <li className='lg:text-base text-black lg:font-bold lg:hover:text-orange-700 lg:hover:underline lg:transition-none 
                    font-bold text-xl
                     lg:underline-offset-2decoration-[1px] cursor-pointer duration-300 mx-4 my-6 lg:my-0'>
                        Element
                    </li>

                    <Link className='max-[1024px]:hidden' to={'/card'}>
                        <div className='relative'>
                            <ShoppingBagOutlinedIcon fontSize='large' />
                            <span className='absolute w-6 top-3 left-1 text-sm flex items-center justify-center font-semibold'>
                                {productData.length}
                            </span>
                        </div>
                    </Link>


                    <Link className='max-[1024px]:hidden px-3' to={'/login'}>
                        <img src={userInfo ? userInfo.image : User} alt="3" className='w-8 h-8 rounded-full' />
                    </Link>
                    {
                        userInfo && <p className='text-base 
                        max-[1024px]:hidden
                        font-bodyFont font-semibold underline underline-offset-2'>

                            {userInfo.name}
                        </p>
                    }


                </ul>



                {/* </div> */}
            </div>


        </div>
    )
}

export default Navbar