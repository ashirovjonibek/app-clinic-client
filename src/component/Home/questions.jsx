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

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "../../assets/scss/popular-slider.scss";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import axios from "axios";
import { API_URL } from "../../utils/constant";
import { withTranslation } from "react-i18next";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function PopularQuestionSlider({ t }) {
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

  return (
    <>
      <section className="testimonial padding-lg">
        <div className="container">
          <div className="row heading heading-icon">
            <h2>{t("Popular questions")}</h2>
          </div>
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
            >
              <ul className="testimonial-slide">
                {top &&
                  top?.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <li className="px-5 mt-5 pt-4">
                        {/* <span>{item?.title}</span> */}
                          <p className="line_count_popular">{item.description}</p>
                          <p>
                            <span>{item?.applicant?.fullName}</span>
                          </p>
                        </li>
                        {/* <div>
                  <UserName
                    text={item?.applicant?.fullName}
                    avatar={item?.applicant?.image}
                  />
                  <div className="document-text">
                    <div className="document-text-title">
                      <h4>{t("Subject of the appeal")}:</h4>
                      <p>{item.title}</p>
                    </div>
                    <hr
                      style={{
                        backgroundColor: "rgba(0,0,0,0.3)",
                        height: "1px",
                      }}
                    />
                    <div
                      style={{
                        maxHeight: "150px",
                        wordBreak: "break-all",
                        overflow: "auto",
                      }}
                      className="document-text-item"
                    >
                      {item.description}
                    </div>
                  </div>
                </div> */}
                      </SwiperSlide>
                    );
                  })}
              </ul>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default withTranslation()(PopularQuestionSlider);
