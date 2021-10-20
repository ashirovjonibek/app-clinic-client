import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./styles.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
// import {withTranslation} from "react-i18next";

// import gerbImg from '../../assets/img/useful/gerb.jpg';
// import gerbImg from '../../assets/img/useful/gerb.jpg';
// import i18next from "i18next";

const LinkSlider = ({ links, gerbImg }) => {
const [countView, setcountView] = useState(3)

window.addEventListener('resize', (e)=>{
  // console.log("eee", e.target.innerWidth);
  if(e.target.innerWidth<1150 && e.target.innerWidth>900){
    setcountView(2)
  }else if(e.target.innerWidth<900){
    setcountView(1)
  }else{
    setcountView(3)
  }
});


  return (
    <>
      <Swiper
        slidesPerView={countView}
        spaceBetween={30}
        slidesPerGroup={countView}
        loop={false}
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
        {links &&
          links?.map((item, i) => (
            <SwiperSlide key={i}>
              <a href={item?.url["uz"]} className="useful-links-item1">
              <img src={gerbImg} alt="" />
              <p>{item?.name["uz"]}</p>
            </a>
            </SwiperSlide>
            
          ))}
      </Swiper>
    </>
  );
};
export default LinkSlider;
