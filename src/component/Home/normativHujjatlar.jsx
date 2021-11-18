import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../../assets/scss/popular-slider.scss";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import axios from "axios";
import { API_URL } from "../../utils/constant";
import { withTranslation } from "react-i18next";
import gerbImg from "../../assets/img/useful/gerb.jpg";
import i18next from "i18next";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function NormativHujjatlar({ t,style }) {
  const [link, setLinks] = useState([]);
  const [countView, setcountView] = useState(3);

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth < 1200 && e.target.innerWidth > 900) {
      setcountView(2);
    } else if (e.target.innerWidth < 900) {
      setcountView(1);
    } else {
      setcountView(3);
    }
  });


  useEffect(() => {
    if (window.innerWidth < 1200 && window.innerWidth > 900) {
      setcountView(2);
    } else if (window.innerWidth < 900) {
      setcountView(1);
    } else {
      setcountView(3);
    }
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: API_URL + "/words",
    }).then((res) => {
      setLinks(res?.data?.object);
    });
  }, []);

  return (
    <div>
      <section style={style} className="logos">
        <div style={style} className="container">
          <Swiper
            slidesPerView={countView}
            centeredSlides={true}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
          >
            <ul className="owl-carousel clearfix">
              {link &&
                link?.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <li className="card my_card">
                        <a href={item.url[i18next.language]} target="_blank" className="card-body">
                          <div className="row ">
                            <div className="col-5 d-flex mt-4 h-100">
                              <img
                                src={gerbImg}
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <div className="col-7 d-flex justify-content-center align-items-center">
                              <p>{item.name[i18next.language]}</p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                  );
                })}
            </ul>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default withTranslation()(NormativHujjatlar);
