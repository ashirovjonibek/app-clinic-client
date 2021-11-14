import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import "./news.scss";
import { Visibility, DateRange } from "@material-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import i18next from "i18next";
const NewsPaper = () => {
  const [news, setNews] = useState([]);
  const [right, setRight] = useState([]);
  const [imgLoader, setImgLoader] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://proacademy.uz/uz-cyr/post",
    }).then((res) => {
      console.log(res);
      let a = [],
        b = [];
      for (let i = 0; i < 6; i++) {
        a.push(res?.data?.items[i]);
      }
      for (
        let i = res?.data?.items.length - 4;
        i < res?.data?.items.length;
        i++
      ) {
        b.push(res?.data?.items[i]);
      }
      setRight(b);
      setNews(a);
    });
  }, []);

  const getLangContent = (content) => {
    let lng = i18next.language;
    if (lng === "uz" || lng === "en") lng = "uz-Lat";

    let parse = JSON.parse(content);

    console.log(parse[lng]);
    return parse[lng];
  };

  // const targetLink = (id) => {
  //   let htmlAnchorElement = document.createElement("a");
  //   htmlAnchorElement.href = "https://proacademy.uz/ru/news/view?alias=" + id;
  //   htmlAnchorElement.target = "_blank";
  //   htmlAnchorElement.click();
  // };

  return (
    <div className="container-fluit">
      <div className="new-container">
        <Swiper
          className="news-swipe"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          zoom={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
        >
          {news &&
            news.map((item, i) => (
              <SwiperSlide key={i} className="news-swipe-slide">
                <a 
                  href={"https://proacademy.uz/ru/news/view?alias=" + item.id}
                  className="general-news"
                >
                  <div className="general-new-img">
                    <img
                      src={
                        "https://proacademy.uz/postfiles/documents" +
                        item?.img_link
                      }
                      alt="img"
                    />
                  </div>
                  <div className="general-news-content">
                    <div className="general-news-title">
                      <p>{getLangContent(item?.title)}</p>
                    </div>
                    <div className="general-news-action">
                      <span className="date">
                        <span>
                          <DateRange />
                        </span>
                        <span>{item?.published_date}</span>
                      </span>
                      <span className="view">
                        <span>
                          <Visibility />
                        </span>
                        <span>{item?.views}</span>
                      </span>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="other-news">
          {right &&
            right.map((item, i) => (
              <a
                key={i}
                href={"https://proacademy.uz/ru/news/view?alias=" + item.id}
                className="news-card"
              >
                <div className="news-card-container">
                  <div className="news-card-imd">
                    <img style={{width:"100px"}}
                      src={
                        "https://proacademy.uz/postfiles/documents" +
                        item?.img_link
                      }
                      alt="img"
                    />
                  </div>
                  <div className="news-card-content">
                    <p className="other-news-title">
                      {getLangContent(item?.title)}
                    </p>
                    <p className="other-news-short">
                      {getLangContent(item?.short_content)}
                    </p>
                    <p className="other-news-action">
                      <span className="date">
                        <span>
                          <DateRange />
                        </span>
                        <span>{item?.published_date}</span>
                      </span>
                      <span className="view">
                        <span>
                          <Visibility />
                        </span>
                        <span>{item?.views}</span>
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPaper;
