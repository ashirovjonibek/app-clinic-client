import React, {useEffect, useState} from "react";
import axios from "axios";
import i18next from "i18next";
import {withTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";

const Mudirlar = ({style, t}) => {
    const [items, setItems] = useState([]);
    const [showCount,setShowCount]=useState(3);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://proacademy.uz/uz-lat/head'
        }).then((response) => {
            setItems(response?.data?.items);
        })

      if (window.innerWidth<768){
        setShowCount(1)
      }
      if (window.innerWidth>768&&window.innerWidth<992){
        setShowCount(2)
      }
      if (window.innerWidth>992){
        setShowCount(3)
      }

      window.addEventListener('resize',()=>{
          if (window.innerWidth<768){
              setShowCount(1)
          }
          if (window.innerWidth>768&&window.innerWidth<992){
              setShowCount(2)
          }
          if (window.innerWidth>992){
              setShowCount(3)
          }
      })

    }, []);


    const getTitle = (title) => {
        let language = i18next.language;
        let a = JSON.parse(title);

        if (language === "uz") {
            return a["uz-Lat"];
        } else {
            return a[language];
        }

    };

    return (
        <section style={style} className="our-attorneys padding-lg">
            <div className="container">
                <div className="row heading heading-icon">
                    <h2 className="text-dark">{t("Our Attorneys")}</h2>
                </div>
                <Swiper
                    slidesPerView={showCount}
                    spaceBetween={30}
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
                    navigation={true}
                    className=""
                    style={{width:"100%"}}
                >
                    {
                        items && items?.map((item, i) =>
                            <SwiperSlide className="">
                                <div className="cnt-block equal-hight bg-light p-0">
                                    <figure style={{position:"relative"}} className="p-0 m-0">
                                        <img
                                            style={{
                                                borderRadius:0,
                                                margin:0,
                                                width:"100%"
                                            }}
                                            src={item?.img_link}
                                            className="img-responsive"
                                            alt=""
                                        />
                                        <div className="more-content-attorney d-flex justify-content-center align-items-center text-light" >more content...</div>
                                    </figure>
                                    <h3 style={{padding:"0 5px"}} className="d-flex justify-content-center align-items-center m-0 p-2 text-light">
                                        <a href="#">{getTitle(item?.title)}</a>
                                    </h3>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};
export default withTranslation()(Mudirlar);
