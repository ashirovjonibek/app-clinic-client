import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import swiperImg1 from '../../assets/img/what-slider/what-slider-img-1.jpg';
import swiperImg2 from '../../assets/img/what-slider/what-slider-img-2.jpg';
import swiperImg3 from '../../assets/img/what-slider/what-slider-img-3.jpg';
import swiperImg4 from '../../assets/img/what-slider/what-slider-img-4.jpg';
import swiperImg5 from '../../assets/img/what-slider/what-slider-img-5.jpg';
import swiperImg6 from '../../assets/img/what-slider/what-slider-img-6.jpg';
import swiperImg7 from '../../assets/img/what-slider/what-slider-img-7.jpg';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../../assets/scss/what-slider.scss";

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function WhatSlider() {
    return (
        <div className="what-slider">
            <Swiper
                spaceBetween={100}
                centeredSlides={true}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}
                pagination={{
                    "clickable": true
                }}
                navigation={true} className="mySwiper"
            >
                <SwiperSlide>
                    <img src={swiperImg1} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperImg2} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperImg3} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperImg4} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperImg5} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperImg6} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperImg7} alt="img" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default WhatSlider
