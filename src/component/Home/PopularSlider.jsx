import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import UserName from '../UserName';
// import DocumentText from '../DocumentText';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../../assets/scss/popular-slider.scss";

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import axios from "axios";
import {API_URL} from "../../utils/constant";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
function PopularSlider() {

    const [top,setTop]=useState([])

    useEffect(()=>{
        axios({
            method:'get',
            url:API_URL+"/application/top"
        }).then((r)=>{
            console.log(r.data)
            setTop(r.data)
        })
    },[]);
    return (
        <div className="popular-slider">
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                loop={true}
                spaceBetween={35}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper"
            >
                <SwiperSlide>
                {
                    top&&top?.map((item)=>

                            <div className="popular-text">
                                <UserName text={item?.applicant.fullName} />
                                <div className="document-text">
                                    <div className="document-text-title">
                                        <h4>Тема обращения:</h4>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="document-text-item">
                                        {
                                            item.description
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                }
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default PopularSlider;
