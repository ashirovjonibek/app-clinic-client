import React from 'react';
import { withTranslation } from 'react-i18next';
import placeholder555x493 from "../../assets/img/home.jpg";

const WhatClinic=({t})=>{


    return(
        <div className="container">
            <div className="row heading heading-icon">
                <h2>KLINIKA NIMA</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 left-block">
                    <i> </i>
                    <p>{t(
                "The clinic is an integral part of the Academy, which carries out activities to ensure the integration of theoretical knowledge of students with practice, the development of practical skills among students and the provision of non-discriminatory legal advice to individuals and legal entities"
              )}</p>
                </div>
                <div className="col-12 col-md-6 right-block">
                    <img src={placeholder555x493} className="img-responsive" alt=""/>
                </div>
            </div>
        </div>
    )
};

export default withTranslation()(WhatClinic)