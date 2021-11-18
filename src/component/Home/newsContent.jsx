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
import { DateRange, Visibility } from "@material-ui/icons";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function NewsContent({ t,style }) {

  const [news, setNews] = useState([]);
  const [right, setRight] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://proacademy.uz/uz-cyr/post",
    }).then((res) => {
      let a = [],
        b = [];
      for (let i = 0; i < 6; i++) {
        a.push(res?.data?.items[i]);
      }
      for (
        let i = res?.data?.items.length - 4;
        i < res?.data?.items?.length;
        i++
      ) {
        b.push(res?.data?.items[i]);
      }
      setRight(b);
      setNews(a);
      console.log("a", a, "b", b);
    });
  }, []);

  const getLangContent = (content) => {
    let lng = i18next.language;
    if (lng === "uz" || lng === "en") lng = "uz-Lat";

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
      <section className="news-events padding-lg">
        <div className="container">
          <div className="row heading heading-icon">
            <h2>{t("News")}</h2>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 left-block">
              <div className="news-box">
                <figure>
                  {
                    news[0] &&
                  <img
                    className="big_image_new"
                    src={"https://proacademy.uz/postfiles/documents" +
                     news[0]?.img_link}
                    alt=""
                  />
                  }
                </figure>
                <h2 >
                  <a href={`https://proacademy.uz/ru/news/view?alias=${news[0] && news[0]?.id}`} target="_blank">{news[0] && getLangContent(news[0]?.title)}</a>
                </h2>
                <div className="meta">
                  <DateRange className="mr-2" />{ news[0] && news[0]?.published_date}
                  <span>
                  <Visibility className="mr-2" />{news[0] && news[0]?.views}
                  </span>
                </div>
                <p>
                  {
                    news[0]?.short_content&&getLangContent(news[0]?.short_content)
                  }
                </p>
                {/*<a href="#" className="read-more">*/}
                {/*  Know More{" "}*/}
                {/*</a>*/}
              </div>
            </div>
            <div className="col-12 col-md-4 right-block">
              <ul className="news-listes">
                {
                  right && right?.map((item, i) => (
                    <li>
                      <figure>
                        <img className="ccccc" src={
                        "https://proacademy.uz/postfiles/documents" +
                        item?.img_link
                      } alt="" />
                      </figure>
                      <div className="news-list-details">
                        <a target="_blank" href={`https://proacademy.uz/ru/news/view?alias=${item?.id}`} className="line_count_two">{getLangContent(item?.title)}</a>
                        <div className="meta">
                          <DateRange className=""/>
                          <span>
                            {item?.published_date.slice(0, 10)}
                          </span>
                          <span>
                          <Visibility className="mr-2" />{item?.views}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withTranslation()(NewsContent);
