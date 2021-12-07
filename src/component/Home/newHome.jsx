import React, {useEffect, useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Phone,Visibility} from "@material-ui/icons";
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
import "../../assets/newHome/customhjlkhkjh.css";
import "../../assets/newHome/custom.css";
import "../../assets/newHome/reset.css";
import "../../assets/newHome/animate.css";
import {withTranslation} from "react-i18next";
import video from "../../assets/a/Proclinics.mp4";
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
import {CHANGE_SCROLL} from "../../redux/me/actionType";
import DropDown from "./dropdown/dropdown";
import {Button} from 'antd'
import flag from '../../assets/img/prokratura_flag_slow.mp4'
import ph1 from '../../assets/img/1.png'
import ph2 from '../../assets/img/2.png'
import ph3 from '../../assets/img/3.png'

const NewHome = ({t}) => {
    const container = useRef();
    const [collapse, setCollapse] = useState(false);
    const [scrollEl, setScrollEl] = useState(false);
    const [path, setPath] = useState(window.location.href);
    const [headerClass, setHeaderClass] = useState("");
    const [color, setColor] = useState("#f2f2f2");
    const [isMobile, setIsMobile] = useState(false);
    const theme = useSelector(state => state.theme);
    const [shh1,setShh1]=useState(false);
    const [shh2,setShh2]=useState(false);
    const [shh3,setShh3]=useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log(path)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setColor(theme?.eye == "3" ? "yellow" : "#2a2a2a");
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth < 768) {
                setColor(theme?.eye == "3" ? "yellow" : "#2a2a2a");
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
    }, []);

    return (
        <div>
            <video src={flag}
                   style={{
                       width: "100%",
                       objectFit: "cover",
                       height: "100vh"
                   }}
                   loop={true} autoPlay={true} controls={false} muted={true}/>
            <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                zIndex: 1
            }}>
                <div style={{
                    position: "relative"
                }}>
                    <div
                        ref={container}
                        onScroll={(e) => {
                            console.log(e.target.scrollTop)
                            if (e.target.scrollTop > 1) {
                                setHeaderClass("header-small");
                                setColor(theme?.eye == "3" ? "yellow" : "#2a2a2a");
                            } else {
                                if (window.innerWidth > 768) {
                                    setHeaderClass("");
                                    setColor(theme?.eye == "3" ? "yellow" : "#f2f2f2");
                                }
                            }
                            if (isMobile) {
                                if (e.target.scrollTop > 2000 && e?.target?.scrollTop < 3800) {
                                    setScrollEl(true);
                                } else {
                                    setScrollEl(false);
                                }
                            } else {
                                if (e.target.scrollTop > 792 && e?.target?.scrollTop < 2600) {
                                    setScrollEl(true);
                                } else {
                                    setScrollEl(false);
                                }
                            }
                            dispatch({type: CHANGE_SCROLL, data: e.target.scrollTop})
                        }}
                        style={{
                            height: "100vh",
                            overflow: "auto",
                        }}
                    >
                        <header style={{
                            filter: theme?.filter,
                            backgroundColor: isMobile ? "white" : ""
                        }} id="header" className={headerClass}>
                            <div
                                style={{width:"66%",margin:"0 auto"}}
                                className={isMobile?"container header-middle":"header-middle"}>
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
                                             style={{color: color}}
                                        >
                                            <p className="academy-name" style={{fontSize: "20px", lineHeight: "24px"}}>
                                                {t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan")}
                                                <p style={{fontSize: "18px"}}>{t("Legal clinic")}</p>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-7 header-right-bottom">
                                        <div className="header-right-top">
                                            <a
                                                className="tel-number"
                                                style={{color: color}}
                                                href="tel:+998 71 202-04-96"
                                            >
                                                <Phone/> +998 (71)
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
                                                <ul className="navbar-nav d-flex justify-content-end p-0" style={{width:"100%"}}>
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
                                                                onClick={() => {
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
                            {!isMobile && <div className="banner-image">
                                <div className="slide1" style={{width: "100%"}}>
                                    <div className="container" style={{width: "100% !important"}}>
                                        <div
                                            className={isMobile ? "content animated fadeInLeft m-0 " : "content animated fadeInLeft m-0 d-flex justify-content-center align-items-center"}
                                        >
                                            <div>
                                                <h1 className="animated fadeInLeft" style={{width: "100%"}}>
                                                    {t("Academy of the Prosecutor General's Office of the Republic of Uzbekistan")}
                                                </h1>
                                                <p className="animated fadeInLeft">{t("Legal clinic")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            <video
                                width={"100%"}
                                style={{objectFit: "cover", height: isMobile ? "" : "100vh"}}
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
                            <WhatClinic/>
                            <div id="cell-clinic"/>
                        </section>
                        <CellClinic style={theme} scrollEl={scrollEl}/>
                        <section style={theme} id="practice-areas" className="practice-area padding-lg">
                            <div className="container">
                                <div className="row heading heading-icon">
                                    <h2>{t("Clinic plans")}</h2>
                                </div>
                                <ul className="row">
                                    <li className="col-12 col-md-4 equal-hight">
                                        <div className="inner"><img src={ph1}
                                                                    alt="Intellectual Property"/>
                                            <h3>{t("Ensuring that trainees undergo internships at the clinic during their studies at the Academy")}</h3>
                                            <p>
                                                <ul>
                                                    <li style={{fontSize: "17px", borderBottom:"1px dashed",paddingBottom:"10px"}}>
                                                        <span>{t("take organizational measures to organize internships for students in the clinic;")}</span>
                                                    </li>
                                                    <li style={{fontSize: "17px",paddingTop:"10px"}}>
                                                        <span>{t("to involve students in law enforcement practice by ensuring that their theoretical knowledge is inextricably linked with practice;")}</span>
                                                    </li>
                                                </ul>
                                            </p>
                                            {/*<a className="read-more" onClick={()=>setShh1(!shh1)} href="#">{shh1?"Berkitish":"Batafsil"}</a>*/}
                                        </div>
                                    </li>
                                    <li className="col-12 col-md-4 equal-hight">
                                        <div className="inner"><img src={ph2}
                                                                    alt="Intellectual Property"/>
                                            <h3>{t("Regarding the provision of free legal aid to individuals and legal entities")}</h3>
                                            <p>
                                                <ul>
                                                    <li style={{fontSize: "17px", borderBottom:"1px dashed",paddingBottom:"10px"}}>
                                                        <span>{t("to ensure timely and quality consideration of appeals of individuals and legal entities for legal advice;")}</span>
                                                    </li>
                                                    <li style={{fontSize: "17px",paddingTop:"10px"}}>
                                                        <span>{t("make recommendations on the nature and complexity of appeals of individuals and legal entities, and the need to apply to the relevant state and economic authorities, courts, law enforcement agencies and advocacy structures to resolve them;")}</span>
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="col-12 col-md-4 equal-hight">
                                        <div className="inner"><img src={ph3}
                                                                    alt="Intellectual Property"/>
                                            <h3>{t("To increase the level of professional training of students and develop their skills in working with legal entities and individuals")}</h3>
                                            <p>
                                                <ul>
                                                    <li style={{fontSize: "17px", borderBottom:"1px dashed",paddingBottom:"10px"}}>
                                                        <span>{t("preparation of analytical data on legal issues, development of new programs to help develop practical skills;")}</span>
                                                    </li>
                                                    <li style={{fontSize: "17px",paddingTop:"10px"}}>
                                                        <span>{t("conducting seminars and trainings aimed at developing professional ethics and professional skills in trainees undergoing internships in the clinic;")}</span>
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <NewsContent style={theme}/>
                        <div id="popular-questions"/>
                        <PopularQuestionSlider style={theme}/>
                        <NormativHujjatlar style={theme}/>
                        <div id="news"/>
                        <Mudirlar style={theme}/>
                        <NewFooter style={theme}/>
                        <FooterUsaid/>
                        <a href="#" className="scroll-top">
                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withTranslation()(NewHome);
