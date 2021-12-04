// import React from "react";

// const ALotOfQuestions = () => {
//   return (
//     <section className="testimonial padding-lg">
//     <div className="container">
//         <div className="row heading heading-icon">
//             <h2>Client testimonials</h2>
//         </div>
//         <div className="wrapper">
//             <ul className="testimonial-slide">
//                 <li>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ex quis erat
//                         elementum consectetur. Sed varius ultrices lacus. Vivamus semper orci efficitur
//                         mattis maximus. Nulla pretium tortor sit amet maximus viverra. Duis dapibus feugiat
//                         libero, ac dapibus leo suscipit at.</p>
//                     <p><span>- Mohin Shek</span></p></li>
//                 <li>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ex quis erat
//                         elementum consectetur. Sed varius ultrices lacus. Vivamus semper orci efficitur
//                         mattis maximus. Nulla pretium tortor sit amet maximus viverra. Duis dapibus feugiat
//                         libero, ac dapibus leo suscipit at.</p>
//                     <p><span>- Mohin Shek</span></p></li>
//                 <li>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ex quis erat
//                         elementum consectetur. Sed varius ultrices lacus. Vivamus semper orci efficitur
//                         mattis maximus. Nulla pretium tortor sit amet maximus viverra. Duis dapibus feugiat
//                         libero, ac dapibus leo suscipit at.</p>
//                     <p><span>- Mohin Shek</span></p></li>
//             </ul>
//             <div id="bx-pager"></div>
//         </div>
//     </div>
// </section>
//   );
// };
// export default ALotOfQuestions;

import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "../../assets/scss/popular-slider.scss";
import SwiperCore, {Autoplay, Pagination, Navigation} from "swiper/core";
import axios from "axios";
import {API_URL} from "../../utils/constant";
import {withTranslation} from "react-i18next";
import {Avatar, Card, Image} from "antd";
import {questions} from "./data";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function PopularQuestionSlider({t, style}) {
    const [top, setTop] = useState([]);

    useEffect(() => {

        fetchTop();
        return () => {
            setTop([]); // This worked for me
        };
    }, []);

    const fetchTop = () => {
        axios({
            method: "get",
            url: API_URL + "/application/top",
        }).then((r) => {
            setTop(r.data);
        });
    };

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    }

    return (
        <>
            <section style={style} className="testimonial padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2 className="text-dark">{t("Popular questions")}</h2>
                    </div>
                    <div id="base"/>
                    <div className="wrapper">
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                        >
                            <div className="testimonial-slide">
                                {top?.length > 0 ?
                                    top?.map((item, i) => {
                                        return (
                                            <SwiperSlide className="container pb-5" key={i}>
                                                <Card
                                                    style={
                                                        {
                                                            minHeight: "350px",
                                                            maxHeight: "350px",
                                                            overflow: "auto"

                                                        }
                                                    } title={
                                                    <div>
                                                        <Avatar className="m-0 p-0" style={{
                                                            backgroundColor: item?.applicant?.fullName && stringToHslColor(item?.applicant?.fullName, 50, 50),
                                                            float: 'left'
                                                        }} size={45}>{item?.applicant?.image ?
                                                            <img src={API_URL + item?.applicant?.image} alt=""/>
                                                            : item?.applicant?.fullName[0].toUpperCase()}</Avatar>
                                                        <span
                                                            className="d-flex p-2 justify-content-center aligin-items-center"
                                                            style={{
                                                                backgroundColor: "",
                                                                float: 'left'
                                                            }}>{item?.applicant?.fullName}</span>
                                                    </div>
                                                } className="shadow m-2">
                                                    <div style={{width: "100%"}} className="text-justify">
                                                        <strong style={{marginRight: "5px"}}>
                                                            {t("Subject of the appeal")}:
                                                        </strong>
                                                        {item?.title}
                                                    </div>
                                                    <hr/>
                                                    <p className="line_count_popular text-justify">{item.description}</p>
                                                </Card>
                                            </SwiperSlide>
                                        );
                                    }) :
                                    questions.map((item, i) => {
                                        return (
                                            <SwiperSlide className="container" key={i}>
                                                <Card
                                                    style={
                                                        {
                                                            minHeight: "350px",
                                                            maxHeight: "350px",
                                                            overflow: "auto"

                                                        }
                                                    } title={
                                                    <div>
                                                        <Avatar src={item?.applicant?.image &&
                                                        <Image width="100%" height="50px"
                                                               src={item?.applicant?.image}> </Image>}
                                                                className="m-0 p-0" style={{
                                                            backgroundColor: item?.applicant?.fullName && stringToHslColor(item?.applicant?.fullName, 50, 50),
                                                            float: 'left'
                                                        }} size={45}>{
                                                            item?.applicant?.fullName[0].toUpperCase()}</Avatar>
                                                        <span
                                                            className="d-flex p-2 justify-content-center aligin-items-center"
                                                            style={{
                                                                backgroundColor: "",
                                                                float: 'left'
                                                            }}>{item?.applicant?.fullName}</span>
                                                    </div>
                                                } className="shadow m-2">
                                                    <div style={{width: "100%"}} className="text-justify">
                                                        <strong style={{marginRight: "5px"}}>
                                                            {t("Subject of the appeal")}:
                                                        </strong>
                                                        {item?.title}
                                                    </div>
                                                    <hr/>
                                                    <p className="line_count_popular text-justify">{item.description}</p>
                                                </Card>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default withTranslation()(PopularQuestionSlider);
