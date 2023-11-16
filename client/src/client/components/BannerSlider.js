import React, { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

import "../style/component/BannerSlider.css";

const BannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
        "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg",
        "https://images.pexels.com/photos/2747600/pexels-photo-2747600.jpeg",
        "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
    <div className='bannercontainer'>
        <div className='bancont'>
            <div 
            style={{transform : `translateX(-${currentSlide * 100}vw)`}} 
            className='imgcontslider'>
                <img 
                className='imgslider' 
                src={data[0]} 
                alt="imgOne"
                loading='priority' />

                <img 
                className='imgslider' 
                src={data[1]} 
                alt="imgOne"
                loading='priority' />

                <img 
                className='imgslider' 
                src={data[2]} 
                alt="imgOne"
                loading='priority' />

                <img 
                className='imgslider' 
                src={data[3]} 
                alt="imgOne"
                loading='priority' />
            </div>
            <div className='btnslidercont'>
                <div onClick={prevSlide} className='btnslider'>
                    <HiArrowLeft /> 
                </div>
                <div onClick={nextSlide} className='btnslider'>
                    <HiArrowRight /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSlider