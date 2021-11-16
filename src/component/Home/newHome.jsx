import React, {useEffect, useRef, useState} from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import '../../assets/aa/bootstrap/css/bootstrap.min.css'
import '../../assets/aa/datepicker/css/datepicker.css'
import '../../assets/aa/font-awesome/css/font-awesome.min.css'
import '../../assets/aa/iconmoon/css/iconmoon.css'
import '../../assets/aa/magnific-popup/css/magnific-popup.css'
import '../../assets/aa/select2/css/select2.min.css'
import logo from '../../assets/img/logo.svg'
import requestLawyer from '../../assets/images/request-lawyer.png'
import investigation from '../../assets/images/case-investigation.png'
import searchDirectory from '../../assets/images/search-directory.png'
import placeholder555x493 from '../../assets/images/placeholder-555x493.jpg'
import sucessCases from '../../assets/images/sucess-cases.png'
import clientsIcon from '../../assets/images/clients-icon.png'
import awardsIcon from '../../assets/images/awards-icon.png'
import lawyersIcon from '../../assets/images/lawyers-icon.png'
import placeholder115x92 from '../../assets/images/placeholder-115x92.jpg'
import '../../assets/newHome/customhjlkhkjh.css'
import '../../assets/newHome/custom.css'
import '../../assets/newHome/reset.css'
import '../../assets/newHome/animate.css'
import CountUp from "react-countup";
import {withTranslation} from "react-i18next";
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

const NewHome = ({t}) => {
    const container = useRef();
    const [collapse, setCollapse] = useState(false);
    const [scrollEl, setScrollEl] = useState(false);
    const [headerClass, setHeaderClass] = useState("");
    const [color, setColor] = useState("#f2f2f2");

    useEffect(() => {
        if (window.innerWidth<768){
            setColor("#2a2a2a")
        }
        window.addEventListener("resize",()=>{
            if (window.innerWidth<768){
                setColor("#2a2a2a")
            }        })
    }, []);

    return (
        <div ref={container} onScroll={(e) => {
            console.log(e.target.scrollTop)
            if (e.target.scrollTop > 1) {
                setHeaderClass("header-small")
                setColor("#2a2a2a")
            } else {
                setHeaderClass("");
                setColor("#f2f2f2")
            }
            if (e.target.scrollTop > 792 && e?.target?.scrollTop < 2600) {
                setScrollEl(true)
            } else {
                setScrollEl(false)
            }
        }} style={{
            height: '100vh',
            overflow: 'auto'
        }}>
            <header id="header" className={headerClass}>
                <div className="container header-middle">
                    <div className="row">
                        <div className="col-12 col-md-5 row logo">
                           <div className="col-3">
                            <a href="#/"><img
                                src={logo} width="65px" className="img-responsive" alt=""/></a>
                           </div>
                            <div className="col-9" style={{color:color}}>
                                <p className="" style={{fontSize:"20px"}}>
                                    O'zbekiston Respublikasi Bosh prokratura akademyasi
                                </p>
                                <p>
                                    Yuridik klinikasi
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 header-right-bottom">
                            <div className="header-right-top">
                                <a className="tel-number" style={{color: color}} href="tel:+998 71 202-04-96"><i
                                    className="fa fa-phone"
                                    aria-hidden="true"></i> +998 (71) 202-04-96</a>
                                    <LangContener/>
                                <Link className="free-consultation_btn" to={
                                    {
                                        pathname: '/applicantAppeal',
                                        state: {
                                            to: "home"
                                        }
                                    }
                                }>{t("Appeals send")}</Link>
                            </div>
                            <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
                                <button onClick={() => setCollapse(!collapse)}
                                        className="navbar-toggler navbar-toggler-right" type="button"
                                        data-toggle="collapse" data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className={collapse ? "collapse navbar-collapse show" : "collapse navbar-collapse"}
                                     id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <a style={{
                                                color: color
                                            }} className="nav-link" onClick={() => {
                                                if (container?.current) {
                                                    container?.current.scrollIntoView({behavior: 'smooth'})
                                                }
                                            }} href="#about">{t("What is clinic")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a style={{
                                                color: color
                                            }} className="nav-link" href="#cell-clinic">
                                                {t("Goal of the clinic")}
                                            </a>
                                        </li>
                                        {/*<li className="nav-item">*/}
                                        {/*    <a style={{*/}
                                        {/*        color: color*/}
                                        {/*    }} className="nav-link" onClick={() => {*/}
                                        {/*        if (container?.current) {*/}
                                        {/*            console.log(container)*/}
                                        {/*            container?.current.scrollIntoView({behavior: 'smooth'})*/}
                                        {/*        }*/}
                                        {/*    }} href="#practice-areas">{t("Purpose of the clinic")}</a>*/}
                                        {/*</li>*/}
                                        <li className="nav-item">
                                            <a style={{
                                                color: color
                                            }} className="nav-link" onClick={() => {
                                                if (container?.current) {
                                                    console.log(container);
                                                    container?.current.scrollIntoView({behavior: 'smooth'})
                                                }
                                            }} href="#case-result">{t("Popular questions")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a style={{
                                                color: color
                                            }} className="nav-link" onClick={() => {
                                                if (container?.current) {
                                                    console.log(container)
                                                    container?.current.scrollIntoView({behavior: 'smooth'})
                                                }
                                            }} href="#attorney">{t("Regulatory base")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link  style={{
                                                backgroundColor:' #00202f',
                                                marginTop:"6px",
                                                padding:"6px 8px",
                                                color:"white"
                                            }}  className="nav-link" to="/auth/login">{t("Login")}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div className="banner-outer">
                <div className="banner-image">
                    <div className="slide1" style={{width: "100%"}}>
                        <div className="container" style={{width: "100% !important"}}>
                            <div className="content animated fadeInLeft m-0"
                                 style={{margin: "0 !important", width: "100%"}}>
                                <h1 className="animated fadeInLeft" style={{width: "100%"}}>O'zbekiston Respublikasi
                                    Bosh prokratura akademyasi</h1>
                                <p className="animated fadeInLeft">Yuridik klinikasi</p>
                            </div>
                        </div>
                    </div>

                </div>
                <video
                    width={"100%"}
                    style={{objectFit: "cover", height: "930px"}}
                    muted
                    loop
                    autoPlay={true}
                    src={video}
                />
            </div>
            <section id="about" className="about about1">
                <div className="container">
                    <ul className="row our-links">
                        <li className="col-12 col-md-4 clearfix equal-hight">
                            <div className="box">
                                <div className="icon"><img src={requestLawyer} className="img-responsive"
                                                           alt="Request A Lawyer"/></div>
                                <div className="detail">
                                    <h3>Request A Lawyer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis,
                                        arcu tristique suscipit convallis, </p>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-md-4 clearfix equal-hight">
                            <div className="box">
                                <div className="icon"><img src={investigation}
                                                           className="img-responsive" alt="Case Investigation"/></div>
                                <div className="detail">
                                    <h3>Case Investigation</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis,
                                        arcu tristique suscipit convallis, </p>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-md-4 clearfix equal-hight">
                            <div className="box">
                                <div className="icon"><img src={searchDirectory} className="img-responsive"
                                                           alt="Search Directory"/></div>
                                <div className="detail">
                                    <h3>Search Directory</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis,
                                        arcu tristique suscipit convallis, </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <WhatClinic/>
                <div id="cell-clinic"/>
            </section>
            <CellClinic scrollEl={scrollEl}/>
            <section id="practice-areas" className="practice-area padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>Practice Area</h2>
                    </div>
                    <ul className="row">
                        <li className="col-12 col-md-4 equal-hight">
                            <div className="inner"><img src="images/intellectual-icon.png" alt="Intellectual Property"/>
                                <h3>Intellectual Property</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum enim non
                                    ornare vulputate. Sed convallis magna eu metus fringilla mattis.</p>
                                <a className="read-more" href="practice-areas-detail.html">READ More</a>
                            </div>
                        </li>
                        <li className="col-12 col-md-4 equal-hight">
                            <div className="inner"><img src="images/finance-icon.png" alt="Finance & Banking"/>
                                <h3>Finance & Banking</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum enim non
                                    ornare vulputate. Sed convallis magna eu metus fringilla mattis.</p>
                                <a className="read-more" href="practice-areas-detail.html">READ More</a>
                            </div>
                        </li>
                        <li className="col-12 col-md-4 equal-hight">
                            <div className="inner"><img src="images/sexual-icon.png" alt="Sexual Offences"/>
                                <h3>Sexual Offences</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum enim non
                                    ornare vulputate. Sed convallis magna eu metus fringilla mattis.</p>
                                <a className="read-more" href="practice-areas-detail.html">READ More</a>
                            </div>
                        </li>
                        <li className="col-12 col-md-4 equal-hight">
                            <div className="inner"><img src="images/real-estate-icon.png"
                                                        alt="Real Estate Constuction"/>
                                <h3>Real Estate Constuction</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum enim non
                                    ornare vulputate. Sed convallis magna eu metus fringilla mattis.</p>
                                <a className="read-more" href="practice-areas-detail.html">READ More</a>
                            </div>
                        </li>
                        <li className="col-12 col-md-4 equal-hight">
                            <div className="inner"><img src="images/money-laundering-icon.png" alt="Money Laundering"/>
                                <h3>Money Laundering</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum enim non
                                    ornare vulputate. Sed convallis magna eu metus fringilla mattis.</p>
                                <a className="read-more" href="practice-areas-detail.html">READ More</a>
                            </div>
                        </li>
                        <li className="col-12 col-md-4 equal-hight">
                            <div className="inner"><img src="images/merger-acquisition-icon.png"
                                                        alt="Merger & Acquisition"/>
                                <h3>Merger & Acquisition</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum enim non
                                    ornare vulputate. Sed convallis magna eu metus fringilla mattis.</p>
                                <a className="read-more" href="practice-areas-detail.html">READ More</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <Mudirlar />
            <PopularQuestionSlider />
            <NormativHujjatlar />
            <NewsContent />
            <NewFooter />
            <FooterUsaid/>
            <a href="#" className="scroll-top"><i className="fa fa-chevron-up" aria-hidden="true"></i></a>
        </div>
    )
};

export default withTranslation()(NewHome)