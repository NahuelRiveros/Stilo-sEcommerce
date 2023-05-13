import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Google } from '../assets/logo';
const Login = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
        <div className='w-full flex items-center justify-center gap-10'>
            <div className='flex gap-2 text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md items-center justify-center hover:border-blue-600 cursor-pointer duration-300'>
            <img src={Google} alt="googleIMG" className='w-7' />
            <span className='text-md text-gray-900'> Iniciar sesión con Google</span>
            </div>
            <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-orange-700 duration-300'> Cerrar Sesión</button>
        </div>
    </div>
  )
}

export default Login