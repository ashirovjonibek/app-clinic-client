import React, {useEffect, useState} from 'react';
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
import axios from "axios";
import i18next from "i18next";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function WhatSlider() {

    const [news,setNews]=useState([]);
    const [one,setOne]=useState({
        id:0,
        title:"",
        content:"",
        date:"",
        view:0,
        img:""
    })
    const [imgLoader,setImgLoader]=useState(false);

    useEffect(()=>{
        axios({
            method:'get',
            url:'https://proacademy.uz/uz-cyr/post'
        }).then((res)=>{
            console.log(res)
            setNews(res?.data?.items);
        })
    },[]);

    const getLangContent=(content)=>{
        let lng = i18next.language;
        if (lng==="uz"||lng==="en") lng="uz-Lat";

        let parse = JSON.parse(content);

        console.log(parse[lng])
        return parse[lng]

    };

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
                {
                    news&&news.map((item,i)=>
                        <SwiperSlide key={i} style={{margin:'0', width:"100%", borderBottom:"solid 1px #d9d9d9"}}>
                            <img src={"https://proacademy.uz/postfiles/documents"+item?.img_link} alt="img" />
                            <div className="jus-center">
                                <p className="ver_slider_header">{getLangContent(item?.title)}.</p>
                                <p className="ver_slider_text">{getLangContent(item?.short_content)}.</p>
                                <div className="ver_slider_bottom">
                            <span className="ver_slider_bottom">
                                <DateRange  /> {item?.published_date}
                            </span>
                                    <span className="ver_slider_bottom">
                                <RemoveRedEye /> {item?.views}
                            </span>
                                    <a href="#">batafsil...</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default WhatSlider
