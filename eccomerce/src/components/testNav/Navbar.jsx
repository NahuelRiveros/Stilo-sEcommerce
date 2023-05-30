import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, logo1, logo2, logo3 } from '../../assets/logo'
import { useSelector } from 'react-redux';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseIcon from '@mui/icons-material/Close';

import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo)



  return (
    <nav className="bg-white border-b-gray-800 sticky top-0 z-50 shadow">
      <div className="flex items-center font-medium justify-between px-5 md:h-20 h-12">
        <div className="z-50 top-0 md:w-auto  w-full flex justify-between items-center">
          <img src={logo2} alt="logo" className="md:cursor-pointer md:w-16 w-10 rounded-full" />
          {/* ITEMS NAVBAR BURGER */}
          <div className="text-3xl flex items-center  gap-3 min-[768px]:hidden" onClick={() => setOpen(!open)}>
            <Link className='' to={'/card'}>
              <div className='relative'>
                <ShoppingBagOutlinedIcon fontSize='large' />
                <span className='absolute w-6 top-4 left-1 text-sm flex  justify-center font-semibold'>
                  {productData.length}
                </span>
              </div>
            </Link>

            <Link className='max-[500px]:hidden' to={'/login'}>
              <img src={userInfo ? userInfo.image : User} alt="UserIMG" className='w-8 h-8 rounded-full' />
            </Link>
            {
              userInfo && <p className='text-base font-bodyFont
                 font-semibold underline underline-offset-2 max-[500px]:hidden'>
                {userInfo.name}
              </p>
            }

            <MenuRoundedIcon name={`${open ? "close" : "menu"}`} fontSize="medium"></MenuRoundedIcon>
          </div>
          {/* ITEMS NAVBAR BURGER */}

        </div>
        {/* ITEMS NABVAR escala PC LAPTOP TABLET*/}
        <ul className="md:flex hidden  items-center gap-8 font-titleFont font-bold">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="flex flex-row items-center max-[767px]:hidden">

          <Link className='' to={'/card'}>
            <div className='relative'>
              <ShoppingBagOutlinedIcon fontSize='large' />
              <span className='absolute w-6 top-3 left-1 text-sm flex items-center justify-center font-semibold'>
                {productData.length}
              </span>
            </div>
          </Link>
          <Link className=' px-3' to={'/login'}>
            <img src={userInfo ? userInfo.image : User} alt="3" className='w-8 h-8 rounded-full' />
          </Link>
          {
            userInfo && <p className='text-base 
                        max-[450px]:hidden
                        font-bodyFont font-semibold underline underline-offset-2'>

              {userInfo.name}
            </p>
          }
        </div>


        {/* Mobile nav */}


        <ul
          className={`
        md:hidden bg-[rgb(255,255,255,0.8)] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 font-titleFont font-bold
        duration-500 ${open ? "left-0 z-10" : "left-[-100%]"}
        `}
        >


          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
