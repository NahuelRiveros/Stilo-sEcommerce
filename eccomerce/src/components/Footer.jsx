import React from 'react'
import { logo2, logoCards } from '../assets/logo'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import TimelineIcon from '@mui/icons-material/Timeline';
const Footer = () => {
    return (
        <div className='bg-black text-[rgb(90,90,90)] 
        py-10 font-otherFont font-semibold'>
            {/* AJUSTE DE TAMANOS */}
            <div className='max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-[320px]:gap-10'>
                {/* Logo start  end*/}
                <div className='flex flex-col gap-7  items-center '>
                    <div className='cursor-pointer rounded-full w-16 group'>

                        <img src={logo2} className=' rounded-full h-full object-cover group-hover:scale-125 duration-500' alt='logoEmp'></img>
                    </div>
                    <p className='text-white text-sm tracking-wide'>© MR.com</p>
                    <img src={logoCards} alt="imgMP" className='w-36' />
                    <div className='flex gap-3 text-lg text-gray-400'>
                        <GitHubIcon className='hover:text-white duration-300  cursor-pointer' />
                        <FacebookIcon className='hover:text-white duration-300 cursor-pointer' />
                        <InstagramIcon className='hover:text-white duration-300 cursor-pointer' />
                        <YouTubeIcon className='hover:text-white duration-300 cursor-pointer' />

                    </div>
                </div>
                {/* LogoIcon  start*/}

                <div>

                    <h2 className='text-2xl font-semibold text-white mb-4 text-center'>
                        Localizacion
                    </h2>
                    <div className='text-base flex flex-col gap-2 font-titleFont text-center'>
                        <p>Argentina</p>
                        <p>Provincia: Formosa</p>
                        <p>Direccion: Belgrano 702</p>
                        <p>Horarios de Atencion</p>
                        <p>08:30-12:30 | 17:00-21:00</p>
                        <p>Email: Stilos@gmail.com</p>
                    </div>
                </div>
                {/* Locate end*/}
                {/* Profile start */}
                <div className='text-center' >
                    <h2 className='text-white text-2xl font-semibold mb-4'>Profile</h2>
                    <div className='flex flex-col gap-2 text-base font-titleFont items-center'>

                        <p className='
                    flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><ManageAccountsIcon /></span>Mi cuenta</p>

                        <p className='
                    flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><PrivacyTipIcon /> </span> Ayuda y Soporte
                        </p>
                        <p className='
                    flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><TimelineIcon /></span>
                            Rastreo de envios
                        </p>
                    </div>

                </div>
                {/* Profile end */}
                <div className='flex flex-col justify-center items-center text-center content-center font-titleFont text-white gap-1'>
                    <h2 className='text-2xl font-semibold font-otherFont text-white mb-4 text-center'>
                        Suscribirse a Ofertas
                    </h2>
                    <input type="email" className='bg-transparent text-center border px-4 text-sm'
                        placeholder='e-mail' />
                    <button className=' hover:bg-orange-700 border  text-white rounded-lg max-[600px]:bg-orange-700 bg-transparent'> Suscribe </button>
                    <p className='text-center pt-2 max-w-[300px]'>Todos los derechos reservados</p>
                    <p className='text-center pt-2 max-w-[300px]'>Stilo`s S.R.L</p>
                </div>
                {/* Suscribe start */}

                {/* Suscribe end */}


            </div>
        </div>
    )
}

export default Footer