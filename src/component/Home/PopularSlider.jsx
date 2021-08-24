import React from 'react';
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

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function PopularSlider() {
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
                }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className="popular-text">
                        <UserName text="Aliyev Vali" />
                        <div className="document-text">
                            <div className="document-text-title">
                                <h4>Тема обращения:</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="document-text-item">
                                Повседневная практика показывает, что сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы обучения кадров, соответствующей насущным потребностям. Явные признаки победы институционализации формируют глобальную экономическую сеть и при этом -  в равной степени предоставлены сами себе. А также независимые государства и по сей день остаются уделом либералов, которые жаждут быть описаны максимально подробно.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="popular-text">
                        <UserName text="Aliyev Vali" />
                        <div className="document-text">
                            <div className="document-text-title">
                                <h4>Тема обращения:</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="document-text-item">
                                Повседневная практика показывает, что сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы обучения кадров, соответствующей насущным потребностям. Явные признаки победы институционализации формируют глобальную экономическую сеть и при этом -  в равной степени предоставлены сами себе. А также независимые государства и по сей день остаются уделом либералов, которые жаждут быть описаны максимально подробно.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="popular-text">
                        <UserName text="Aliyev Vali" />
                        <div className="document-text">
                            <div className="document-text-title">
                                <h4>Тема обращения:</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="document-text-item">
                                Повседневная практика показывает, что сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы обучения кадров, соответствующей насущным потребностям. Явные признаки победы институционализации формируют глобальную экономическую сеть и при этом -  в равной степени предоставлены сами себе. А также независимые государства и по сей день остаются уделом либералов, которые жаждут быть описаны максимально подробно.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default PopularSlider;
