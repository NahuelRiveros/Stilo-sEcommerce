import React from 'react'
import { useState } from 'react';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
const Carrousel = () => {
    const [carrouselSlider, setCarrouselSlider] = useState(0)
    const prevSlide =()=>{
        setCarrouselSlider(carrouselSlider===0?3:(prev)=>prev-1)
    }
    const nextSlide=()=>{
        setCarrouselSlider(carrouselSlider===3?0:(prev)=>prev+1)
    }
    
    const data = ['https://images.pexels.com/photos/1884579/pexels-photo-1884579.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/4498143/pexels-photo-4498143.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=400'

    ]
    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen h-[400px] relative'>

                <div style={{transform:`translateX(-${carrouselSlider * 100}vw)`}} className='w-[400vw] flex transition-transform duration-1000 h-96'>
                    <img src={data[0]}
                        className='w-screen h-full object-cover' alt='1'
                        loading='priority'></img>
                    <img src={data[1]}
                        className='w-screen h-full object-cover' alt='1'
                        loading='priority'></img>
                    <img src={data[2]}
                        className='w-screen h-full object-cover' alt='1'
                        loading='priority'></img>
                    <img src={data[1]}
                        className='w-screen h-full object-cover' alt='1'
                        loading='priority'></img>
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-20 bottom-48'>
                    <div onClick={prevSlide} className='w-14 h-12 border-[1px] flex items-center justify-center hover:cursor-pointer border-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <KeyboardArrowLeftOutlinedIcon />
                    </div>
                    <div onClick={nextSlide} className='w-14 h-12 border-[1px] flex items-center justify-center hover:cursor-pointer border-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <KeyboardArrowRightOutlinedIcon />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carrousel