import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../../assets/scss/popular-slider.scss";
import SwiperCore, {Autoplay, Pagination, Navigation} from "swiper/core";
import axios from "axios";
import {API_URL} from "../../utils/constant";
import {withTranslation} from "react-i18next";
import gerbImg from "../../assets/img/useful/gerb.jpg";
import i18next from "i18next";
import {DateRange, Visibility} from "@material-ui/icons";
import {Card} from "antd";

const {Meta} = Card;
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function NewsContent({t, style}) {

    const [news, setNews] = useState([]);
    const [right, setRight] = useState([]);
    const [showCount, setShowCount] = useState(3);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://proacademy.uz/uz-cyr/post",
        }).then((res) => {
            setNews(res?.data?.items);
        });
    }, []);

    useEffect(() => {

        if (window.innerWidth < 768) {
            setShowCount(1)
        }
        if (window.innerWidth > 768 && window.innerWidth < 992) {
            setShowCount(2)
        }
        if (window.innerWidth > 992) {
            setShowCount(3)
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setShowCount(1)
            }
            if (window.innerWidth > 768 && window.innerWidth < 992) {
                setShowCount(2)
            }
            if (window.innerWidth > 992) {
                setShowCount(3)
            }
        })

    }, []);

    const getLangContent = (content) => {
        let lng = i18next.language;
        if (lng === "uz" || lng === "en") lng = "uz-Lat";
        if (lng === "uzCyr") lng = "uz-Cyr";

        let parse = JSON.parse(content);

        return parse[lng];
    };

    // const targetLink = (id) => {
    //   let htmlAnchorElement = document.createElement("a");
    //   htmlAnchorElement.href = "https://proacademy.uz/ru/news/view?alias=" + id;
    //   htmlAnchorElement.target = "_blank";
    //   htmlAnchorElement.click();
    // };

    return (
        <div style={style}>
            <section className="news-events padding-lg pb-5">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2 className="text-light">{t("News")}</h2>
                    </div>
                    <div className="row pb-4">
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
                            className="news-swipe1"
                            style={{width: "100%"}}
                        >
                            {
                                news && news?.map((item, i) =>
                                        <SwiperSlide className="pb-5 news-swipe-slide1">
                                            <Card hoverable
                                                  className=""
                                                  title={false}
                                            >
                                                <div>
                                                    <div>
                                                        <div style={{height:"200px",overflow:"hidden"}}>
                                                            <img alt="example" width="100%" style={{
                                                                objectFit:"cover"
                                                            }}
                                                                 src={"https://proacademy.uz/postfiles/documents" +
                                                                 item?.img_link}/>
                                                        </div>
                                                        <p className="news-dddd-title" style={{fontWeight:600}}>{getLangContent(item?.title)?.length>45?getLangContent(item?.title).substring(0,45)+"...":getLangContent(item?.title)}</p>
                                                        <p className="news-dddd-description">{getLangContent(item?.short_content)?.length>80?getLangContent(item?.short_content).substring(0,80)+"...":getLangContent(item?.short_content)}</p>
                                                    </div>
                                                    <p className="d-flex justify-content-between">
                                                        <span>
                                                            <span>
                                                            <DateRange/>
                                                        </span>
                                                        <span>{item?.published_date}</span>
                                                        </span>
                                                        <span>
                                                            <span>
                                                            <Visibility/>
                                                        </span>
                                                        <span>{item?.views}</span>
                                                        </span>
                                                    </p>
                                                </div>
                                            </Card>
                                        </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withTranslation()(NewsContent);
