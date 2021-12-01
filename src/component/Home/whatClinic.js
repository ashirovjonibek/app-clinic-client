import React from 'react';
import { withTranslation } from 'react-i18next';
import placeholder555x493 from "../../assets/img/home.jpg";

const WhatClinic=({t})=>{


    return(
        <div className="container">
            <div className="row heading heading-icon">
                <h2 className="text-dark">{t("What is clinic")}</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 left-block row">
                    <i> </i>
                    <p className="col-12 col-md-12 left-block">{t(
                "The clinic is an integral part of the Academy, which carries out activities to ensure the integration of theoretical knowledge of students with practice, the development of practical skills among students and the provision of non-discriminatory legal advice to individuals and legal entities"
              )}</p>
                    <div className="col-12 col-md-12 left-block">
                        <div className="details">
                            <h3 style={{fontSize:"16px"}}>{t("Ensuring that trainees undergo internships at the clinic during their studies at the Academy")}:</h3>
                            <p style={{paddingLeft:"20px"}}>
                                <ul >
                                    <li style={{listStyleType:'circle',fontSize:"14px"}}>
                                        <span>{t("take organizational measures to organize internships for students in the clinic;")}</span>
                                    </li>
                                    <li style={{listStyleType:'circle',fontSize:"14px"}}>
                                        <span>{t("to involve students in law enforcement practice by ensuring that their theoretical knowledge is inextricably linked with practice;")}</span>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 right-block">
                    <img src={placeholder555x493} className="img-responsive" alt=""/>
                </div>
            </div>
        </div>
    )
};

export default withTranslation()(WhatClinic)