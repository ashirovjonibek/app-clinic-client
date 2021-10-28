import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import swiperImg1 from '../../assets/img/what-slider/what-slider-img-1.jpg';
import swiperImg2 from '../../assets/img/what-slider/what-slider-img-2.jpg';
import swiperImg3 from '../../assets/img/what-slider/what-slider-img-3.jpg';
import swiperImg4 from '../../assets/img/what-slider/what-slider-img-4.jpg';
import swiperImg5 from '../../assets/img/what-slider/what-slider-img-5.jpg';
import swiperImg6 from '../../assets/img/what-slider/what-slider-img-6.jpg';
import swiperImg7 from '../../assets/img/what-slider/what-slider-img-7.jpg';
import {DateRange} from '@material-ui/icons';
import {RemoveRedEye} from '@material-ui/icons';
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
                slidesPerView={3}
                spaceBetween={0}
                direction={'vertical'}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    "delay": 2000,
                    "disableOnInteraction": false
                }}
                pagination={{
                    "clickable": true
                }}
                navigation={true} className="mySwiper"
            
            >
                <SwiperSlide style={{margin:'0', width:"100%", borderBottom:"solid 1px #d9d9d9"}}> 
                    <img src={swiperImg1} alt="img" />
                    <div className="jus-center">
                        <p className="ver_slider_header">Lorem, ipsum dolor.</p>
                        <p className="ver_slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.</p>
                        <div className="ver_slider_bottom">
                            <span className="ver_slider_bottom">
                                <DateRange  /> 25 oktabr 2021 
                            </span>
                            <span className="ver_slider_bottom">
                                <RemoveRedEye /> 25
                            </span>
                            <a href="#">batafsil...</a>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{margin:'0', width:"100%", borderBottom:"solid 1px #d9d9d9"}}> 
                    <img src={swiperImg2} alt="img" />
                    <div className="jus-center">
                        <p className="ver_slider_header">Lorem, ipsum dolor.</p>
                        <p className="ver_slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.</p>
                        <div className="ver_slider_bottom">
                            <span className="ver_slider_bottom">
                                <DateRange  /> 25 oktabr 2021 
                            </span>
                            <span className="ver_slider_bottom">
                                <RemoveRedEye /> 25
                            </span>
                            <a href="#">batafsil...</a>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{margin:'0', width:"100%", borderBottom:"solid 1px #d9d9d9"}}> 
                    <img src={swiperImg3} alt="img" />
                    <div className="jus-center">
                        <p className="ver_slider_header">Lorem, ipsum dolor.</p>
                        <p className="ver_slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.</p>
                        <div className="ver_slider_bottom">
                            <span className="ver_slider_bottom">
                                <DateRange  /> 25 oktabr 2021 
                            </span>
                            <span className="ver_slider_bottom">
                                <RemoveRedEye /> 25
                            </span>
                            <a href="#">batafsil...</a>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{margin:'0', width:"100%", borderBottom:"solid 1px #d9d9d9"}}> 
                    <img src={swiperImg4} alt="img" />
                    <div className="jus-center">
                        <p className="ver_slider_header">Lorem, ipsum dolor.</p>
                        <p className="ver_slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.</p>
                        <div className="ver_slider_bottom">
                            <span className="ver_slider_bottom">
                                <DateRange  /> 25 oktabr 2021 
                            </span>
                            <span className="ver_slider_bottom">
                                <RemoveRedEye /> 25
                            </span>
                            <a href="#">batafsil...</a>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{margin:'0', width:"100%", borderBottom:"solid 1px #d9d9d9"}}> 
                    <img src={swiperImg5} alt="img" />
                    <div className="jus-center">
                        <p className="ver_slider_header">Lorem, ipsum dolor.</p>
                        <p className="ver_slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.</p>
                        <div className="ver_slider_bottom">
                            <span className="ver_slider_bottom">
                                <DateRange  /> 25 oktabr 2021 
                            </span>
                            <span className="ver_slider_bottom">
                                <RemoveRedEye /> 25
                            </span>
                            <a href="#">batafsil...</a>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{margin:'0', width:"100%", borderBottom:"solid 1px #d9d9d9"}}> 
                    <img src={swiperImg6} alt="img" />
                    <div className="jus-center">
                        <p className="ver_slider_header">Lorem, ipsum dolor.</p>
                        <p className="ver_slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.</p>
                        <div className="ver_slider_bottom">
                            <span className="ver_slider_bottom">
                                <DateRange  /> 25 oktabr 2021 
                            </span>
                            <span className="ver_slider_bottom">
                                <RemoveRedEye /> 25
                            </span>
                            <a href="#">batafsil...</a>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{margin:'0', width:"100%", borderBottom:"solid 1px #d9d9d9"}}> 
                    <img src={swiperImg7} alt="img" />
                    <div className="jus-center">
                        <p className="ver_slider_header">Lorem, ipsum dolor.</p>
                        <p className="ver_slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.</p>
                        <div className="ver_slider_bottom">
                            <span className="ver_slider_bottom">
                                <DateRange  /> 25 oktabr 2021 
                            </span>
                            <span className="ver_slider_bottom">
                                <RemoveRedEye /> 25
                            </span>
                            <a href="#">batafsil...</a>
                        </div> 
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default WhatSlider
