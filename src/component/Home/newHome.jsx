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
import placeholder115x92 from '../../assets/images/placeholder-115x92.jpg'
import CountUp from "react-countup";

const NewHome = () => {
    const [scrollEl,setScrollEl]=useState(false);
    const [headerClass,setHeaderClass]=useState("");
    window.addEventListener('scroll',function(e) {
        console.log("aaaaaaaaaaaaaaaaaa",e);
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
            <section className="our-attorneys padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>Our Attorneys</h2>
                    </div>
                    <ul className="row">
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight">
                                <figure><img src="images/placeholder-148x148.jpg" className="img-responsive" alt=""/>
                                </figure>
                                <h3><a href="attorney-profile.html">Guptam Holla</a></h3>
                                <p>Hofstra University School of Law Hempstead, New York</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight">
                                <figure><img src="images/placeholder-148x148.jpg" className="img-responsive" alt=""/>
                                </figure>
                                <h3><a href="attorney-profile.html">Kappua Billa</a></h3>
                                <p>Hofstra University School of Law Hempstead, New York</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight">
                                <figure><img src="images/placeholder-148x148.jpg" className="img-responsive" alt=""/>
                                </figure>
                                <h3><a href="attorney-profile.html">Omin Goshu</a></h3>
                                <p>Hofstra University School of Law Hempstead, New York</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight">
                                <figure><img src="images/placeholder-148x148.jpg" className="img-responsive" alt=""/>
                                </figure>
                                <h3><a href="attorney-profile.html">NArman Bandhu</a></h3>
                                <p>Hofstra University School of Law Hempstead, New York</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="testimonial padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>Client testimonials</h2>
                    </div>
                    <div className="wrapper">
                        <ul className="testimonial-slide">
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ex quis erat
                                    elementum consectetur. Sed varius ultrices lacus. Vivamus semper orci efficitur
                                    mattis maximus. Nulla pretium tortor sit amet maximus viverra. Duis dapibus feugiat
                                    libero, ac dapibus leo suscipit at.</p>
                                <p><span>- Mohin Shek</span></p></li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ex quis erat
                                    elementum consectetur. Sed varius ultrices lacus. Vivamus semper orci efficitur
                                    mattis maximus. Nulla pretium tortor sit amet maximus viverra. Duis dapibus feugiat
                                    libero, ac dapibus leo suscipit at.</p>
                                <p><span>- Mohin Shek</span></p></li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ex quis erat
                                    elementum consectetur. Sed varius ultrices lacus. Vivamus semper orci efficitur
                                    mattis maximus. Nulla pretium tortor sit amet maximus viverra. Duis dapibus feugiat
                                    libero, ac dapibus leo suscipit at.</p>
                                <p><span>- Mohin Shek</span></p></li>
                        </ul>
                        <div id="bx-pager"></div>
                    </div>
                </div>
            </section>
            <section className="logos">
                <div className="container">
                    <ul className="owl-carousel clearfix">
                        <li><a href="#"><img src={placeholder115x92} className="img-responsive" alt=""/></a>
                        </li>
                        <li><a href="#"><img src={placeholder115x92} className="img-responsive" alt=""/></a>
                        </li>
                        <li><a href="#"><img src={placeholder115x92} className="img-responsive" alt=""/></a>
                        </li>
                        <li><a href="#"><img src={placeholder115x92} className="img-responsive" alt=""/></a>
                        </li>
                        <li><a href="#"><img src={placeholder115x92} className="img-responsive" alt=""/></a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="news-events padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>OUR FIRM NEWS</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 left-block">
                            <div className="news-box">
                                <figure>
                                    <img src="images/placeholder-750x270.jpg" className="img-responsive" alt=""/>
                                </figure>
                                <div className="date"><span>05</span>Jan 2020</div>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet cursus
                                    felis. </h2>
                                <div className="meta"><i className="fa fa-user" aria-hidden="true"></i>By John
                                    Smith<span><i className="fa fa-comment" aria-hidden="true"></i>32</span></div>
                                <p>Quam velit pretium ante, eu posuere sem massa non libero. Nunc viverra pretium nisi
                                    ut pellentesque. Nullam sem sem, dignissim nec consequat sed, facilisis eu velit,
                                    [...]</p>
                                <a href="#" className="read-more">Know More </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 right-block">
                            <ul className="news-listes">
                                <li>
                                    <figure>
                                        <img src="images/placeholder-115x92.jpg" alt=""/>
                                    </figure>
                                    <div className="news-list-details">
                                        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                                        <div className="meta"><i className="fa fa-user" aria-hidden="true"></i>By John
                                            Smith<span><i className="fa fa-comment" aria-hidden="true"></i>32</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="images/placeholder-115x92.jpg" alt=""/>
                                    </figure>
                                    <div className="news-list-details">
                                        <h2> sagittis ipsum vel, accumsan est.</h2>
                                        <div className="meta"><i className="fa fa-user" aria-hidden="true"></i>By John
                                            Smith<span><i className="fa fa-comment" aria-hidden="true"></i>32</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="images/placeholder-115x92.jpg" alt=""/>
                                    </figure>
                                    <div className="news-list-details">
                                        <h2>Orci varius natoque penatibus et magnis</h2>
                                        <div className="meta"><i className="fa fa-user" aria-hidden="true"></i>By John
                                            Smith<span><i className="fa fa-comment" aria-hidden="true"></i>32</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img src="images/placeholder-115x92.jpg" alt=""/>
                                    </figure>
                                    <div className="news-list-details">
                                        <h2>Nunc condimentum nunc urna</h2>
                                        <div className="meta"><i className="fa fa-user" aria-hidden="true"></i>By John
                                            Smith<span><i className="fa fa-comment" aria-hidden="true"></i>32</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="contact-us">
                                    <h3>CONTACT US</h3>
                                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>234, My Street,
                                        Kingston,<br/> New York</p>
                                    <a href="tel:+1-760-284-3410"><i className="fa fa-phone" aria-hidden="true"></i>760-284-3410</a>
                                    <a href="mailto:info@demoemail.com"><i className="fa fa-envelope"
                                                                           aria-hidden="true"></i>info@demoemail.com</a>
                                    <ul className="follow-us clearfix">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="open-time">
                                    <h3>OPEN TIME</h3>
                                    <p><strong>Opening Day:</strong><br/>Monday - Friday: 8am to 6pm<br/> Saturday: 9am
                                        to 5pm</p>
                                    <p><strong>Vacation:</strong><br/> All Sunday Day<br/> All Vacation Holiday</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="practice-area">
                                    <h3>PRACTICE AREAS</h3>
                                    <ul className="clearfix">
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Sexual
                                            Offences</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Finance
                                            & Banking</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right"
                                                           aria-hidden="true"></i> Intellectual Property</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Merger
                                            & Acquisition</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Real
                                            Estate Constuction</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Money
                                            Laundering</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="practice-area">
                                    <h3>OUR ATTORNEYS</h3>
                                    <ul className="clearfix">
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Jon
                                            Bitoda</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Petar
                                            Gossa</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Devid
                                            Favda</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Michal
                                            Khurpa</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Jali
                                            Hajji</a></li>
                                        <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i> Handu
                                            Smith</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-rights-section">
                    <div className="container">
                        <div className="row">
                            <p>© 2020 JOHN BISTAND - All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="#" className="scroll-top"><i className="fa fa-chevron-up" aria-hidden="true"></i></a>
        </div>
    )
};

export default NewHome