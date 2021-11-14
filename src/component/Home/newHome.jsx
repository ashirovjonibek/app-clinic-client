import React, {useEffect, useState} from 'react'
import $ from 'jquery'
import '../../assets/newHome/animate.css'
import '../../assets/newHome/custom.css'
// import '../../assets/newHome/customhjlkhkjh.css'
import '../../assets/newHome/reset.css'
import '../../assets/aa/bootstrap/css/bootstrap.min.css'
import '../../assets/aa/datepicker/css/datepicker.css'
import '../../assets/aa/font-awesome/css/font-awesome.min.css'
import '../../assets/aa/iconmoon/css/iconmoon.css'
import '../../assets/aa/magnific-popup/css/magnific-popup.css'
import '../../assets/aa/select2/css/select2.min.css'
import logo from '../../assets/images/logo.png'
import requestLawyer from '../../assets/images/request-lawyer.png'
import investigation from '../../assets/images/case-investigation.png'
import searchDirectory from '../../assets/images/search-directory.png'
import placeholder555x493 from '../../assets/images/placeholder-555x493.jpg'
import sucessCases from '../../assets/images/sucess-cases.png'
import clientsIcon from '../../assets/images/clients-icon.png'
import awardsIcon from '../../assets/images/awards-icon.png'
import lawyersIcon from '../../assets/images/lawyers-icon.png'

import CountUp from "react-countup";
import Mudirlar from './kafedraMudirlari'
import PopularQuestionSlider from './questions'
import NormativHujjatlar from './normativHujjatlar'
import NewsContent from "./newsContent"
import NewFooter from '../Footer/NewFooter'

const NewHome = () => {
    const [scrollEl,setScrollEl]=useState(false);
    const [headerClass,setHeaderClass]=useState("");
    window.addEventListener('scroll',function(e) {
        if ($(this).scrollTop() > 1) {
            $('#header').addClass("header-small");
        } else {
            $('#header').removeClass("header-small");
        }
    });

    useEffect(()=>{

    },[]);

    return (
        <div onScroll={(e)=>
        {
            console.log(e.target.scrollTop)
            if (e.target.scrollTop>1){
                setHeaderClass("header-small")
            }else {
                setHeaderClass("")
            }
            if (e.target.scrollTop>792&&e?.target?.scrollTop<2600){
                setScrollEl(true)
            }else {
                setScrollEl(false)
            }
        }} style={{
            height:'100vh',
            overflow:'auto'
        }} >
            <header id="header" className={headerClass}>
                <div className="container header-middle">
                    <div className="row"><span className="col-12 col-md-5 logo"><a href="index.html"><img
                        src={logo} className="img-responsive" alt=""/></a></span>
                        <div className="col-12 col-md-7 header-right-bottom">
                            <div className="header-right-top">
                                <a className="tel-number" href="tel:+1-760-284-3410"><i className="fa fa-phone"
                                                                                        aria-hidden="true"></i> 760-284-3410</a>
                                <a className="free-consultation_btn" href="contact-us.html">Free Consultation</a>
                            </div>
                            <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
                                <button className="navbar-toggler navbar-toggler-right" type="button"
                                        data-toggle="collapse" data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link dropdown-toggle" href="#about"
                                               id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                About Us
                                            </a>
                                            {/*<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">*/}
                                            {/*    <a className="dropdown-item" href="who-we-are.html">About Us</a>*/}
                                            {/*    <a className="dropdown-item" href="who-we-are.html">Who We Are</a>*/}
                                            {/*    <a className="dropdown-item" href="#">Something else here</a>*/}
                                            {/*</div>*/}
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#practice-areas">PRACTICe AREAs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="case-result.html">CASE RESULT</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="attorney.html">ATTORNEY</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="news.html">NEWS</a>
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
                    <div className="slide1">
                        <div className="container">
                            <div className="content animated fadeInLeft">
                                <h1 className="animated fadeInLeft">Hundreds of Millions</h1>
                                <p className="animated fadeInLeft">Recovered for Our Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="about" className="about">
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
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>WHO WE ARE</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 left-block">
                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada elementum nisl
                                at rhoncus. Fusce at est hendrerit, laoreet nulla non, cursus neque. Integer a lacinia
                                mauris. Duis rutrum urna finibus, dapibus leo cursus, rutrum nibh. Suspendisse
                                potenti. </i>
                            <p>Quam velit pretium ante, eu posuere sem massa non libero. Nunc viverra pretium nisi ut
                                pellentesque. Nullam sem sem, dignissim nec consequat sed, facilisis eu velit. Nunc
                                pharetra blandit diam commodo consequat. Sed placerat arcu hendrerit lorem finibus, in
                                posuere arcu ullamcorper. In hac habitasse platea dictumst. Donec scelerisque enim vitae
                                magna pretium dapibus ac et sapien.Aliquam erat volutpat. Cras eu neque diam. In
                                pellentesque nunc varius, tempus turpis nec, elementum odio. Pellentesque id metus id
                                velit efficitur lacinia. Proin tincidunt aliquam sollicitudin.</p>
                            <p>Fusce sed dignissim sapien. Curabitur ullamcorper tempus elementum. Duis id tristique
                                erat. Aliquam blandit felis nulla, at dapibus dui mollis id. Curabitur pellentesque
                                pellentesque elit, vitae vestibulum odio tempus ut.</p>
                            <a href="who-we-are.html" className="know-more">Know More </a>
                        </div>
                        <div className="col-12 col-md-6 right-block">
                            <img src={placeholder555x493} className="img-responsive" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="we-are-here">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 left-block">
                            <div className="details">
                                <h2>We Are here</h2>
                                <h4>to help you with law quetions</h4>
                                <p>Quam velit pretium ante, eu posuere sem massa non libero. Nunc viverra pretium nisi
                                    ut pellentesque. Nullam sem sem, dignissim nec consequat sed, facilisis eu velit.
                                    Nunc</p>
                                <a className="free-btn" href="contact-us.html">Free Consultation</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 right-block cases-box">
                            <div className="col-12 col-md-6">
                                <div className="box">
                                    <div className="icon">
                                        <img src={sucessCases} alt=""/>
                                    </div>
                                    <span className="counter"><CountUp end={scrollEl?800:0} duration={4}/></span>
                                    <div className="title">Successful cases</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="box">
                                    <div className="icon">
                                        <img src={clientsIcon} alt=""/>
                                    </div>
                                    <span className="counter"><CountUp end={scrollEl?1000:0} duration={4}/></span>
                                    <div className="title">TRUSTED CLIENTS</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="box">
                                    <div className="icon">
                                        <img src={awardsIcon} alt=""/>
                                    </div>
                                    <span className="counter"><CountUp end={scrollEl?2000:0} duration={4}/></span>
                                    <div className="title">HONORS & AWaRDS</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="box">
                                    <div className="icon">
                                        <img src={lawyersIcon} alt=""/>
                                    </div>
                                    <span className="counter"><CountUp end={scrollEl?600:0} duration={4}/></span>
                                    <div className="title">Qualified Lawyers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                            <div className="inner"><img src="images/real-estate-icon.png" alt="Real Estate Constuction"/>
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
        </div>
    )
};

export default NewHome