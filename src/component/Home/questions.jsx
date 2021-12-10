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
import {Avatar, Card, Image, Modal} from "antd";
import {questions} from "./data";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function PopularQuestionSlider({t, style}) {
    const [top, setTop] = useState([]);
    const [modal,setModal]=useState({
        img:"",
        name:"",
        title:"",
        desc:"",
        open:false
    })

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
                        <h2>{t("Popular questions")}</h2>
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
                            pagination={false}
                            navigation={true}
                            className="savollar"
                        >
                            <div className="testimonial-slide">
                                {top?.length > 0 ?
                                    top?.map((item, i) => {
                                        return (
                                            <SwiperSlide className="container pb-5" key={i}>
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <Avatar src={item?.applicant?.image &&
                                                        <Image width="100%" height="50px"
                                                               src={item?.applicant?.image}> </Image>}
                                                                className="m-0 p-0" style={{
                                                            backgroundColor: item?.applicant?.fullName && stringToHslColor(item?.applicant?.fullName, 50, 50),
                                                            float: 'left'
                                                        }} size={45}>{
                                                            item?.applicant?.fullName[0].toUpperCase()}</Avatar>
                                                    </div>
                                                    <div style={{width: "100%"}} className="text-center pt-2">
                                                        <strong>
                                                            {t("Subject of the appeal")}:
                                                        </strong>
                                                        {item?.title}
                                                    </div>
                                                    <hr/>
                                                    <p className="line_count_popular text-center p-0 m-0">{item.description.length > 250 ? item?.description.substring(0, 250) : item?.description}...</p>
                                                    <p className="text-center">{item?.applicant?.fullName}</p>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    }) :
                                    questions.map((item, i) => {
                                        return (
                                            <SwiperSlide className="container" key={i}>
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <Avatar src={item?.applicant?.image &&
                                                        <Image width="100%" height="50px"
                                                               src={item?.applicant?.image}> </Image>}
                                                                className="m-0 p-0" style={{
                                                            backgroundColor: item?.applicant?.fullName && stringToHslColor(item?.applicant?.fullName, 50, 50),
                                                            float: 'left'
                                                        }} size={45}>{
                                                            item?.applicant?.fullName[0].toUpperCase()}</Avatar>
                                                    </div>
                                                    <div style={{width: "100%"}} className="text-center pt-2 mb-3">
                                                        <strong style={{marginRight:"5px"}}>
                                                            {t("Subject of the appeal")}:
                                                        </strong>
                                                        {item?.title}
                                                    </div>
                                                    <div style={{paddingRight:"15px",paddingLeft:"15px"}}>
                                                        <p style={{cursor:"pointer"}} onClick={()=>{
                                                            setModal(
                                                                {
                                                                    img:item?.applicant?.image,
                                                                    name:item?.applicant?.fullName,
                                                                    title:item?.title,
                                                                    desc:item.description,
                                                                    open:true
                                                                }
                                                            )
                                                        }} className="line_count_popular text-center p-0 m-0">{item?.description.length > 500 ? item?.description.substring(0, 500) : item?.description}...</p>
                                                    </div>
                                                    <p className="text-center text-danger mt-3" style={{fontWeight:500}}>{"- "+item?.applicant?.fullName}</p>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </div>
                        </Swiper>
                    </div>
                    <Modal visible={modal?.open} title="Murojaat" footer={false} onCancel={()=>setModal({
                        img:"",
                        name:"",
                        title:"",
                        desc:"",
                        open:false
                    })}>
                        <div>
                            <div className="d-flex align-items-center">
                                <Avatar src={modal?.img &&
                                <Image width="100%" height="50px"
                                       src={modal?.img}> </Image>}
                                        className="m-0 p-0" style={{
                                    backgroundColor: modal?.name && stringToHslColor(modal?.name, 50, 50),
                                    float: 'left'
                                }} size={45}>{
                                    modal?.name.toUpperCase()}</Avatar>
                                <span style={{paddingLeft:"7px"}} className="text-danger">{modal?.name}</span>
                            </div>
                            <div style={{width: "100%"}} className="text-justify pt-2 mb-3">
                                <strong style={{marginRight:"5px"}}>
                                    {t("Subject of the appeal")}:
                                </strong>
                                {modal?.title}
                            </div>
                            <p className="text-justify" style={{maxHeight:"50vh",overflow:"auto"}}>
                                {modal?.desc}
                            </p>
                        </div>
                    </Modal>
                </div>
            </section>
        </>
    );
}

export default withTranslation()(PopularQuestionSlider);
