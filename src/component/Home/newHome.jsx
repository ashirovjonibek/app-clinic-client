import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { Link,useHistory } from "react-router-dom";
import "../../assets/aa/bootstrap/css/bootstrap.min.css";
import "../../assets/aa/datepicker/css/datepicker.css";
import "../../assets/aa/font-awesome/css/font-awesome.min.css";
import "../../assets/aa/iconmoon/css/iconmoon.css";
import "../../assets/aa/magnific-popup/css/magnific-popup.css";
import "../../assets/aa/select2/css/select2.min.css";
import logo from "../../assets/img/logo.svg";
import requestLawyer from "../../assets/images/request-lawyer.png";
import investigation from "../../assets/images/case-investigation.png";
import searchDirectory from "../../assets/images/search-directory.png";
import placeholder555x493 from "../../assets/images/placeholder-555x493.jpg";
import sucessCases from "../../assets/images/sucess-cases.png";
import clientsIcon from "../../assets/images/clients-icon.png";
import awardsIcon from "../../assets/images/awards-icon.png";
import lawyersIcon from "../../assets/images/lawyers-icon.png";
import placeholder115x92 from "../../assets/images/placeholder-115x92.jpg";
import "../../assets/newHome/customhjlkhkjh.css";
import "../../assets/newHome/custom.css";
import "../../assets/newHome/reset.css";
import "../../assets/newHome/animate.css";
import CountUp from "react-countup";
import { withTranslation } from "react-i18next";
import video from "../../assets/a/Proclinics.mp4";
import NavLanguage from "../Nav/NavLanguage";
import LangContener from "./helper";
import Mudirlar from "./kafedraMudirlari";
import PopularQuestionSlider from "./questions";
import NormativHujjatlar from "./normativHujjatlar";
import NewsContent from "./newsContent";
import NewFooter from "../Footer/NewFooter";
import FooterUsaid from "../Footer/FooterUsaid";
import WhatClinic from "./whatClinic";
import CellClinic from "./cellClinic";
import {useDispatch, useSelector} from "react-redux";
import { CHANGE_EYE, CHANGE_SCROLL } from "../../redux/me/actionType";
import DropDown from "./dropdown/dropdown";
import {Button} from 'antd'

const NewHome = ({ t }) => {
  const container = useRef();
  const [collapse, setCollapse] = useState(false);
  const [scrollEl, setScrollEl] = useState(false);
  const [path,setPath]=useState(window.location.href);
  const [headerClass, setHeaderClass] = useState("");
  const [color, setColor] = useState("#f2f2f2");
  const [isMobile, setIsMobile] = useState(false);
  const theme=useSelector(state => state.theme);
  const dispatch = useDispatch();
  const history=useHistory();

  console.log(path)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setColor(theme?.eye=="3"?"yellow":"#2a2a2a");
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setColor(theme?.eye=="3"?"yellow":"#2a2a2a");
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <div
      ref={container}
      onScroll={(e) => {
        if (e.target.scrollTop > 1) {
          setHeaderClass("header-small");
          setColor(theme?.eye=="3"?"yellow":"#2a2a2a");
        } else {
          if (window.innerWidth > 768) {
            setHeaderClass("");
            setColor(theme?.eye=="3"?"yellow":"#f2f2f2");
          }
        }
        if (e.target.scrollTop > 792 && e?.target?.scrollTop < 2600) {
          setScrollEl(true);
        } else {
          setScrollEl(false);
        }
        dispatch({type:CHANGE_SCROLL,data:e.target.scrollTop})
      }}
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <header style={theme} id="header" className={headerClass}>
        <div className="container header-middle">
          <div className="row">
            <div className="col-12 col-md-5 row logo">
              {!isMobile && (
                <div className="col-3">
                  <a href="#/">
                    <img
                      src={logo}
                      width="65px"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
              )}
              <div id="academy-name"
                className={isMobile ? "col-12" : "col-9"}
                style={{ color: color}}
              >
                <p className="academy-name" style={{ fontSize: "20px",lineHeight: "24px" }}>
                  {t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan")}
                  <p style={{ fontSize: "18px" }}>{t("Legal clinic")}</p>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-7 header-right-bottom">
              <div className="header-right-top">
                <a
                  className="tel-number"
                  style={{ color: color }}
                  href="tel:+998 71 202-04-96"
                >
                  <i className="fa fa-phone" aria-hidden="true"></i> +998 (71)
                  202-04-96
                </a>

                <DropDown color={color}/>
                <LangContener
                  className={isMobile ? "mb-2" : ""}
                  color={color}
                />
                <Link
                  className="free-consultation_btn"
                  to={{
                    pathname: "/applicantAppeal",
                    state: {
                      to: "home",
                    },
                  }}
                >
                  {t("Appeals send")}
                </Link>
              </div>
              <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
                <button
                  onClick={() => setCollapse(!collapse)}
                  className="navbar-toggler navbar-toggler-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={
                    collapse
                      ? "collapse navbar-collapse show"
                      : "collapse navbar-collapse"
                  }
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a
                        style={{
                          color: color,
                        }}
                        className="nav-link"
                        onClick={() => {
                          if (container?.current) {
                            container?.current.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }}
                        href="#about"
                      >
                        {t("What is clinic")}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{
                          color: color,
                        }}
                        className="nav-link"
                        href="#cell-clinic"
                      >
                        {t("Goal of the clinic")}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{
                          color: color,
                        }}
                        className="nav-link"
                        onClick={() => {
                          if (container?.current) {
                            console.log(container);
                            container?.current.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }}
                        href="#popular-questions"
                      >
                        {t("Popular questions")}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{
                          color: color,
                        }}
                        className="nav-link"
                        onClick={() => {
                          if (container?.current) {
                            console.log(container);
                            container?.current.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }}
                        href="#news"
                      >
                        {t("News")}
                      </a>
                    </li>
                    <li className="nav-item">
                      <Button className="nav-link-login text-uppercase"
                        type="primary"
                        onClick={()=>{
                          history.push("/auth/login")
                        }}
                      >
                        {t("Login")}
                      </Button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div style={theme} className="banner-outer">
        <div className="banner-image">
          <div className="slide1" style={{ width: "100%" }}>
            <div className="container" style={{ width: "100% !important" }}>
              <div
                className="content animated fadeInLeft m-0"
                style={{ margin: "0 !important", width: "100%" }}
              >
                <h1 className="animated fadeInLeft" style={{ width: "100%" }}>
                  {t("Academy of the Prosecutor General's Office of the Republic of Uzbekistan")}
                </h1>
                <p className="animated fadeInLeft">{t("Legal clinic")}</p>
              </div>
            </div>
          </div>
        </div>
        <video
          width={"100%"}
          style={{ objectFit: "cover", height: "930px" }}
          muted
          loop
          autoPlay={true}
          src={video}
        />
      </div>
      <section style={theme} id="about" className="about about1">
        <div className="container">
          <ul className="row our-links">
            <li className="col-12 col-md-4 clearfix equal-hight">
              <div className="box">
                <div className="icon">
                  <img
                    src={requestLawyer}
                    className="img-responsive"
                    alt="Request A Lawyer"
                  />
                </div>
                <div className="detail">
                  <h3>{t("Qualified professionals")}</h3>
                  <p>
                    {t("Legal advice from qualified staff of the Academy of the Prosecutor General's Office of the Republic of Uzbekistan")}{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="col-12 col-md-4 clearfix equal-hight">
              <div className="box">
                <div className="icon">
                  <img
                    src={investigation}
                    className="img-responsive"
                    alt="Case Investigation"
                  />
                </div>
                <div className="detail">
                  <h3>{t("Free legal advice")}</h3>
                  <p>
                    {t("All advice given by the staff of the General Prosecutor's Office Clinic is absolutely free")}{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="col-12 col-md-4 clearfix equal-hight">
              <div className="box">
                <div className="icon">
                  <img
                    src={searchDirectory}
                    className="img-responsive"
                    alt="Search Directory"
                  />
                </div>
                <div className="detail">
                  <h3>{t("Answers to legal questions")}</h3>
                  <p>
                    {t("Answers to continuous and ongoing legal questions by qualified professionals. The number of legal appeals is not limited")}{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <WhatClinic />
        <div id="cell-clinic" />
      </section>
      <CellClinic style={theme} scrollEl={scrollEl} />
      <section style={theme} id="practice-areas" className="practice-area padding-lg">
        <div className="container">
          <div className="row heading heading-icon">
            <h2>Practice Area</h2>
          </div>
          <ul className="row">
            <li className="col-12 col-md-4 equal-hight">
              <div className="inner">
                <img
                  src="images/intellectual-icon.png"
                  alt="Intellectual Property"
                />
                <h3>Intellectual Property</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam condimentum enim non ornare vulputate. Sed convallis
                  magna eu metus fringilla mattis.
                </p>
                <a className="read-more" href="practice-areas-detail.html">
                  READ More
                </a>
              </div>
            </li>
            <li className="col-12 col-md-4 equal-hight">
              <div className="inner">
                <img src="images/finance-icon.png" alt="Finance & Banking" />
                <h3>Finance & Banking</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam condimentum enim non ornare vulputate. Sed convallis
                  magna eu metus fringilla mattis.
                </p>
                <a className="read-more" href="practice-areas-detail.html">
                  READ More
                </a>
              </div>
            </li>
            <li className="col-12 col-md-4 equal-hight">
              <div className="inner">
                <img src="images/sexual-icon.png" alt="Sexual Offences" />
                <h3>Sexual Offences</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam condimentum enim non ornare vulputate. Sed convallis
                  magna eu metus fringilla mattis.
                </p>
                <a className="read-more" href="practice-areas-detail.html">
                  READ More
                </a>
              </div>
            </li>
            <li className="col-12 col-md-4 equal-hight">
              <div className="inner">
                <img
                  src="images/real-estate-icon.png"
                  alt="Real Estate Constuction"
                />
                <h3>Real Estate Constuction</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam condimentum enim non ornare vulputate. Sed convallis
                  magna eu metus fringilla mattis.
                </p>
                <a className="read-more" href="practice-areas-detail.html">
                  READ More
                </a>
              </div>
            </li>
            <li className="col-12 col-md-4 equal-hight">
              <div className="inner">
                <img
                  src="images/money-laundering-icon.png"
                  alt="Money Laundering"
                />
                <h3>Money Laundering</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam condimentum enim non ornare vulputate. Sed convallis
                  magna eu metus fringilla mattis.
                </p>
                <a className="read-more" href="practice-areas-detail.html">
                  READ More
                </a>
              </div>
            </li>
            <li className="col-12 col-md-4 equal-hight">
              <div className="inner">
                <img
                  src="images/merger-acquisition-icon.png"
                  alt="Merger & Acquisition"
                />
                <h3>Merger & Acquisition</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam condimentum enim non ornare vulputate. Sed convallis
                  magna eu metus fringilla mattis.
                </p>
                <a className="read-more" href="practice-areas-detail.html">
                  READ More
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Mudirlar style={theme} />
      <div id="popular-questions"/>
      <PopularQuestionSlider style={theme} />
      <NormativHujjatlar style={theme} />
      <div id="news"/>
      <NewsContent style={theme} />
      <NewFooter style={theme} />
      <FooterUsaid />
      <a href="#" className="scroll-top">
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default withTranslation()(NewHome);
