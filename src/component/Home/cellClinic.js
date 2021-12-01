import React, {useEffect, useState} from "react";
import sucessCases from "../../assets/images/sucess-cases.png";
import CountUp from "react-countup";
import clientsIcon from "../../assets/images/clients-icon.png";
import awardsIcon from "../../assets/images/awards-icon.png";
import lawyersIcon from "../../assets/images/lawyers-icon.png";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../utils/constant";
import home from '../../assets/img/home.jpg'
import {statistic} from "./data";

let duration=2;

const CellClinic = ({scrollEl, t,style}) => {
    const [sts, setSts] = useState({});
    const [style1,setStyle1]=useState({
        background: `url(${home}) no-repeat center bottom / cover`
    })

    useEffect(()=>{
        axios({
            url: API_URL + "/application/home-statistic",
            method: "get",
        }).then((res) => {
            setSts(res?.data?.object);
        });
    },[]);

    return (
        <section style={{...style,...style1}} className="we-are-here">
            <div style={style} className="container">
                <div className="row">
                    <div className="col-12 col-md-7 left-block">
                        <div className="details">
                            <h5>{t("The main objectives of the clinic are")}:</h5>
                            <p>
                                <ul>
                                    <li>
                                        <span>{t("Ensuring the correspondence of theoretical knowledge of students to practice")}</span>
                                    </li>
                                    <li>
                                        <span>{t("Providing impartial legal assistance to individuals and legal entities")}</span>
                                    </li>
                                    <li>
                                        <span>{t("Formation and development of practical skills in students")}</span>
                                    </li>
                                    <li>
                                        <span>{t("Raising the legal awareness and legal culture of the population")}</span>
                                    </li>
                                </ul>
                            </p>

                            <Link className="free-btn" to={
                                {
                                    pathname: '/applicantAppeal',
                                    state: {
                                        to: "home"
                                    }
                                }
                            }>{t("Appeals send")}</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 right-block cases-box">
                        <div className="col-12 col-md-6">
                            <div className="box">
                                <div className="icon">
                                    <img src={sucessCases} alt=""/>
                                </div>
                                <span className="counter"><CountUp end={scrollEl ? sts?.all>0?sts?.all:statistic.all : 0} duration={duration}/></span>
                                <div className="title">{t("General applications")}</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="box">
                                <div className="icon">
                                    <img src={clientsIcon} alt=""/>
                                </div>
                                <span className="counter"><CountUp end={scrollEl ? sts?.inprocces>0?sts?.inprocces:statistic.inprocces : 0} duration={duration}/></span>
                                <div className="title">{t("In progress")}</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="box">
                                <div className="icon">
                                    <img src={awardsIcon} alt=""/>
                                </div>
                                <span className="counter"><CountUp end={scrollEl ? sts?.complete>0?sts?.complete:statistic.complete : 0} duration={duration}/></span>
                                <div className="title">{t("Done")}</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="box">
                                <div className="icon">
                                    <img src={lawyersIcon} alt=""/>
                                </div>
                                <span className="counter"><CountUp end={scrollEl ? sts?.applicants>0?sts?.applicants:statistic.applicants : 0} duration={duration}/></span>
                                <div className="title">{t("Users")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default withTranslation()(CellClinic);