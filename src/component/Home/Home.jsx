import React, {useEffect, useState} from "react";
import Title from "../Title";
import WhatSlider from "./WhatSlider";
import PopularSlider from "./PopularSlider";
import DirectoryPdf from "../PersonalAccountListener/DirectoryPdf";
import prokuraturaImg from '../../assets/img/useful/prokuratura.jpg';
import gerbImg from '../../assets/img/useful/gerb.jpg';
import tashabbusImg from '../../assets/img/useful/5tashabbus.jpg';
import {withTranslation} from "react-i18next";
import axios from "axios";
import {API_URL} from "../../utils/constant";
import i18next from "i18next";

const Home = ({t}) => {
    const [links,setLinks]=useState([]);
    useEffect(()=>{
        axios({
            method:'get',
            url:API_URL+'/words'
        }).then((res)=>{
            setLinks(res.data.object);
        })
    },[]);
    return (
        <div style={{paddingTop:"190px"}} className="home">

            <div className="header-img">
                {/* <div className="container">
                    <button onClick={() => history.push('/applicantAppeal')} className="btn-default">Обращение</button>
                </div> */}
            </div>
            <div className="container">
                <div id="what-clinic" className="what-clinic">
                    <div className="what-clinic-text">
                        <Title text={t("What is clinic")}/>
                        <p>{t("The clinic is an integral part of the Academy, which carries out activities to ensure the integration of theoretical knowledge of students with practice, the development of practical skills among students and the provision of non-discriminatory legal advice to individuals and legal entities")}.</p>
                    </div>
                    <div className="what-clinic-mini"/>
                </div>

                <div  className="what-clinic what-clinic-slider">
                    <div className="what-clinic-mini">
                        <WhatSlider/>
                    </div>
                    <div className="what-clinic-text">
                        <p>{t("The clinic operates in accordance with the Constitution and laws of the Republic of Uzbekistan, resolutions of the chambers of the Oliy Majlis of the Republic of Uzbekistan, decrees, resolutions and orders of the President of the Republic of Uzbekistan, resolutions and orders of the Cabinet of Ministers of the Republic of Uzbekistan. Decisions and orders of the Board of the Ministry of Higher and Secondary Special Education, in accordance with the Charter of the Academy and this Regulation.")}.</p>
                    </div>
                </div>

                <div id="cel-clinic">
                    <Title text={t("Goal of the clinic")}/>
                    <h5>{t("The main objectives of the clinic are")}:</h5>
                    <div className="cel-clinic-text">
                        <div className="text-inform">
                            <ul>
                                <li>{t("Ensuring the correspondence of theoretical knowledge of students to practice")}</li>
                                <li>{t("Providing impartial legal assistance to individuals and legal entities")}</li>
                            </ul>
                        </div>
                        <div className="text-inform">
                            <ul>
                                <li>{t("Formation and development of practical skills in students")}</li>
                                <li>{t("Raising the legal awareness and legal culture of the population")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="cel-clinic">
                    <h5>{t("The main tasks of the clinic are")}:</h5>
                    <div className="cel-clinic-text">
                        <div className="text-inform">
                            <ul>
                                <li>{t("Ensuring that students undergo internships at the clinic during their studies in cooperation with government and business agencies, the judiciary and law enforcement agencies, advocacy and other organizations;")}</li>
                                <li>{t("To increase the level of professional training of students and develop their skills in working with legal entities and individuals;")}</li>
                                <li>{t("Providing impartial legal assistance to individuals and legal entities;")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="statistic-clinic">
                    <Title text={t("Statistics")}/>
                    <div className="statistic-row">
                        <div className="statistic-items">
                            <div className="statistic">
                                <h3>124</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="statistic">
                                <h3>124</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="statistic-items">
                            <div className="statistic">
                                <h3>124</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="statistic">
                                <h3>124</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="statistic-row">
                        <div className="statistic-items">
                            <div className="statistic">
                                <h3>124</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="statistic">
                                <h3>124</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="statistic-items">
                            <div className="statistic">
                                <h3>124</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="statistic">
                                <h3>124</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="purpose-clinic">
                    <Title text={t("Purpose of the clinic")}/>
                    <div className="porpose-text">
                        <p>{t("In cooperation with the state and economic authorities, the judiciary and law enforcement agencies, the bar and other organizations to ensure the internship of students in the clinic during the study period")}:</p>
                        <p>{t("to take organizational measures for the organization of internships for students in the clinic")};</p>
                        <p>{t("to involve students in law enforcement practice by ensuring that their theoretical knowledge is inextricably linked with practice")};</p>
                    </div>
                    <div className="porpose-text">
                        <p>{t("Providing equitable legal assistance to individuals and legal entities")}:</p>
                        <p>{t("to ensure timely and quality consideration of appeals of individuals and legal entities for legal advice")};</p>
                        <p>{t("based on the nature and complexity of the appeals of individuals and legal entities, to make recommendations on the need to apply to the relevant state and economic authorities, courts, law enforcement agencies and advocacy structures to resolve them")};</p>
                    </div>
                    <div className="porpose-text">
                        <p>{t("To increase the level of professional training of students and develop their skills in working with legal entities and individuals")}:</p>
                        <p>{t("preparation of analytical data on legal issues, development of new programs to help develop practical skills")};</p>
                        <p>{t("conducting seminars and trainings on legal professional ethics and professional skills for students undergoing internships in the clinic")};</p>
                    </div>

                </div>
                <div id="popular-clinic">
                    <Title text={t("Popular questions")}/>
                    <PopularSlider/>
                </div>

            </div>
            <div id="home-useful-links">
                <div className="container">
                    <Title text={t("Regulatory base")}/>
                    <div className="useful-links-body1">
                        {
                            links&&links.map((item,i)=>
                                <a href={item.url[i18next.language]} className="useful-links-item1">
                                    <img src={gerbImg} alt=""/>
                                    <p>{item.name[i18next.language]}</p>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
            <div id="home-useful-links">
                <div className="container">
                    <Title text={t("Useful links")}/>
                    <div className="useful-links-body">
                        <a href="/#" className="useful-links-item">
                            <img src={prokuraturaImg} alt=""/>
                            <p>{t("Prosecutor General's Office of the Republic of Uzbekistan")}</p>
                        </a>
                        <a href="/#" className="useful-links-item">
                            <img src={gerbImg} alt=""/>
                            <p>{t("Official website of the President of the Republic of Uzbekistan")}</p>
                        </a>
                        <a href="/#" className="useful-links-item">
                            <img src={tashabbusImg} alt=""/>
                            <p>{t("Development strategy center")}</p>
                        </a>
                        <a href="/#" className="useful-links-item">
                            <img src={prokuraturaImg} alt=""/>
                            <p>{t("Prosecutor General's Office of the Republic of Uzbekistan")}</p>
                        </a>
                        <a href="/#" className="useful-links-item">
                            <img src={prokuraturaImg} alt=""/>
                            <p>{t("Prosecutor General's Office of the Republic of Uzbekistan")}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div id="adres-procuratura">
                    <Title text={t("Address")}/>

                </div>
                <div className="cel-clinic" style={{height: '600px'}}>
                    <Title text={t("We are on the map")}/>
                    <iframe title="This is a unique title"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0329210425926!2d69.28706118608989!3d41.3074374422724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad54d47a56f%3A0x87547e5307b77db5!2z0JPQtdC90LXRgNCw0LvRjNC90LDRjyDQv9GA0L7QutGD0YDQsNGC0YPRgNCwINCg0LXRgdC_0YPQsdC70LjQutC4INCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1624433459932!5m2!1sru!2s"
                            loading="lazy" style={{
                        height: '500px',
                        width: '100%',
                        borderRadius: '10px',
                        margin: '20px 0',
                        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'
                    }}/>
                </div>
            </div>

        </div>
    );
}

export default withTranslation()(Home);
