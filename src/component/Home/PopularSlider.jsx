import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import UserName from '../UserName';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../../assets/scss/popular-slider.scss";
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import axios from "axios";
import {API_URL} from "../../utils/constant";
import {withTranslation} from "react-i18next";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function PopularSlider({t}) {

    const [top, setTop] = useState([]);
    const [countView, setcountView] = useState(2)

    window.addEventListener('resize', (e)=>{
        // console.log("eee", e.target.innerWidth);
        if(e.target.innerWidth<1150 && e.target.innerWidth>900){
            setcountView(1)
        }else if(e.target.innerWidth<900){
            setcountView(1)
        }else{
            setcountView(2)
        }
    });

    useEffect(() => {
        if(window.innerWidth<1150 && window.innerWidth>900){
            setcountView(1)
        }else if(window.innerWidth<900){
            setcountView(1)
        }else{
            setcountView(2)
        }

        fetchTop();
        return () => {
            setTop([]); // This worked for me
        };

    }, []);

    const fetchTop = () => {
        axios({
            method: 'get',
            url: API_URL + "/application/top"
        }).then((r) => {
            setTop(r.data)
        })
    }

    return (
        <div className="popular-slider">
            <Swiper
                slidesPerView={countView}
                centeredSlides={true}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                pagination={{clickable: true}}
                navigation={true}
            >
                {
                    top && top?.map((item, i) => {
                            return <SwiperSlide slot={"container-start"} key={i} >
                                <div className="popular-text" style={{margin:'0'}}>
                                    <UserName text={item?.applicant.fullName}/>
                                    <div className="document-text">
                                        <div className="document-text-title">
                                            <h4>{t("Subject of the appeal")}:</h4>
                                            <p>{item.title}</p>
                                        </div>
                                        <hr style={{backgroundColor:"rgba(0,0,0,0.3)",height:"1px"}}/>
                                        <div style={{maxHeight:"200px",wordBreak:"break-all",overflow:"auto"}} className="document-text-item">
                                            {
                                                item.description
                                            }
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        }
                    )
                }
            </Swiper>
        </div>
    );
}

export default withTranslation()(PopularSlider);
