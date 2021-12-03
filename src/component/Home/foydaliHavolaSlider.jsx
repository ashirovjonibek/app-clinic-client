// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper.min.css";
// // import "swiper/components/pagination/pagination.min.css";
// // import "swiper/components/navigation/navigation.min.css";
// // import "../../assets/scss/popular-slider.scss";
// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// import axios from "axios";
// import { API_URL } from "../../utils/constant";

// // install Swiper modules
// SwiperCore.use([Autoplay, Pagination, Navigation]);

// function FoydaliHavolaSlider({ t }) {
//   const [top, setTop] = useState([]);
//   const [countView, setcountView] = useState(2);

//   // window.addEventListener("resize", (e) => {
//   //   // console.log("eee", e.target.innerWidth);
//   //   if (e.target.innerWidth < 1150 && e.target.innerWidth > 900) {
//   //     setcountView(1);
//   //   } else if (e.target.innerWidth < 900) {
//   //     setcountView(1);
//   //   } else {
//   //     setcountView(2);
//   //   }
//   // });

//   useEffect(() => {
//     // if (window.innerWidth < 1150 && window.innerWidth > 900) {
//     //   setcountView(1);
//     // } else if (window.innerWidth < 900) {
//     //   setcountView(1);
//     // } else {
//     //   setcountView(2);
//     // }

//     fetchTop();
//     return () => {
//       setTop([]); // This worked for me
//     };
//   }, []);

//   const fetchTop = () => {
//     axios({
//       method: "get",
//       url: API_URL + "/application/top",
//     }).then((r) => {
//       setTop(r.data);
//     });
//   };

//   return (
//     <div className="popular-slider">
//     {/* <div className="popular-slider"> */}
//       <Swiper
//         centeredSlides={true}
//         spaceBetween={0}
//         loop={true}
//         autoplay={{
//           delay: 6000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         slidesPerView={4}
//       >
//         <SwiperSlide>
//           <a href="/#" className="useful-links-item">
//             <img src={prokuraturaImg} alt="" />
//             <p>
//               {t("Prosecutor General's Office of the Republic of Uzbekistan")}
//             </p>
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a href="/#" className="useful-links-item">
//             <img src={gerbImg} alt="" />
//             <p>
//               {t(
//                 "Official website of the President of the Republic of Uzbekistan"
//               )}
//             </p>
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a href="/#" className="useful-links-item">
//             <img src={tashabbusImg} alt="" />
//             <p>{t("Development strategy center")}</p>
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a href="/#" className="useful-links-item">
//             <img src={prokuraturaImg} alt="" />
//             <p>
//               {t("Prosecutor General's Office of the Republic of Uzbekistan")}
//             </p>
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a href="/#" className="useful-links-item">
//             <img src={prokuraturaImg} alt="" />
//             <p>
//               {t("Prosecutor General's Office of the Republic of Uzbekistan")}
//             </p>
//           </a>
//         </SwiperSlide>
//         {/* {
//                     top && top?.map((item, i) => {
//                             return <SwiperSlide slot={"container-start"} key={i} >
//                                 <div className="popular-text" style={{margin:'0'}}>
//                                     <UserName text={item?.applicant.fullName}/>
//                                     <div className="document-text">
//                                         <div className="document-text-title">
//                                             <h4>{t("Subject of the appeal")}:</h4>
//                                             <p>{item.title}</p>
//                                         </div>
//                                         <hr style={{backgroundColor:"rgba(0,0,0,0.3)",height:"1px"}}/>
//                                         <div style={{maxHeight:"150px",wordBreak:"break-all",overflow:"auto"}} className="document-text-item">
//                                             {
//                                                 item.description
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         }
//                     )
//                 } */}
//       </Swiper>
//     </div>
//   );
// }
// export default withTranslation()(FoydaliHavolaSlider);


import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {withTranslation} from "react-i18next";
import prokuraturaImg from "../../assets/img/useful/prokuratura.jpg";
import tashabbusImg from "../../assets/img/useful/5tashabbus.jpg";
import gerbImg from "../../assets/img/useful/gerb.jpg";

import SwiperCore, {Pagination, Navigation} from "swiper";

SwiperCore.use([Pagination, Navigation]);

function FoydaliHavolaSlider({t}) {
    const [countView, setcountView] = useState(6)

    window.addEventListener('resize', (e) => {
        // console.log("eee", e.target.innerWidth);
        if (e.target.innerWidth < 1600 && e.target.innerWidth > 1200) {
            setcountView(5)
        } else if (e.target.innerWidth < 1200 && e.target.innerWidth > 1100) {
            setcountView(4)
        } else if (e.target.innerWidth < 1100 && e.target.innerWidth > 1000) {
            setcountView(3)
        } else if (e.target.innerWidth < 1000 && e.target.innerWidth > 768) {
            setcountView(2)
        } else if (e.target.innerWidth < 768) {
            setcountView(1)
        } else {
            setcountView(6)
        }
    });

    useEffect(() => {
        if (window.innerWidth < 1600 && window.innerWidth > 1200) {
            setcountView(5)
        } else if (window.innerWidth < 1200 && window.innerWidth > 1100) {
            setcountView(4)
        } else if (window.innerWidth < 1100 && window.innerWidth > 1000) {
            setcountView(3)
        } else if (window.innerWidth < 1000 && window.innerWidth > 768) {
            setcountView(2)
        } else if (window.innerWidth < 768) {
            setcountView(1)
        } else {
            setcountView(6)
        }
    }, []);


    return (
        <>
            <Swiper
                slidesPerView={countView}
                spaceBetween={0}
                // slidesPerGroup={countView}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true
                }}
                freeMode={true}
                navigation={false}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="/#" className="useful-links-item">
                        <img src={prokuraturaImg} alt=""/>
                        <p>
                            {t("Prosecutor General's Office of the Republic of Uzbekistan")}
                        </p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#" className="useful-links-item">
                        <img src={gerbImg} alt=""/>
                        <p>
                            {t(
                                "Official website of the President of the Republic of Uzbekistan"
                            )}
                        </p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#" className="useful-links-item">
                        <img src={tashabbusImg} alt=""/>
                        <p>{t("Development strategy center")}</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#" className="useful-links-item">
                        <img src={prokuraturaImg} alt=""/>
                        <p>
                            {t("Prosecutor General's Office of the Republic of Uzbekistan")}
                        </p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#" className="useful-links-item">
                        <img src={prokuraturaImg} alt=""/>
                        <p>
                            {t("Prosecutor General's Office of the Republic of Uzbekistan")}
                        </p>
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default withTranslation()(FoydaliHavolaSlider);
