import React from "react";
import {withTranslation} from "react-i18next";
import StatisticsByAge from "./Statistics/StatisticsByAge";

const StatisticYearCategories = ({t}) => {
    return (
        <div className="statistic-year-categories">
            <div className="statistic-section-item-title">
                <h5>{t("By age categories of applicants")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <StatisticsByAge/>
                {/*<div className="statistic-item-line">
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">0</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">20</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">40</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">60</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">80</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">100</div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Ферганская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '70px'}}/>
                            <div className="progres-year-16-60" style={{width: '390px'}}/>
                            <div className="progres-year-31-45" style={{width: '200px'}}/>
                            <div className="progres-year-18-30" style={{width: '300px'}}/>
                            <div className="progres-year-0-17" style={{width: '150px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Наманганская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '170px'}}/>
                            <div className="progres-year-16-60" style={{width: '240px'}}/>
                            <div className="progres-year-31-45" style={{width: '50px'}}/>
                            <div className="progres-year-18-30" style={{width: '300px'}}/>
                            <div className="progres-year-0-17" style={{width: '350px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Андижанская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '270px'}}/>
                            <div className="progres-year-16-60" style={{width: '290px'}}/>
                            <div className="progres-year-31-45" style={{width: '100px'}}/>
                            <div className="progres-year-18-30" style={{width: '200px'}}/>
                            <div className="progres-year-0-17" style={{width: '150px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Сурхандарьинская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '70px'}}/>
                            <div className="progres-year-16-60" style={{width: '490px'}}/>
                            <div className="progres-year-31-45" style={{width: '530px'}}/>
                            <div className="progres-year-18-30" style={{width: '300px'}}/>
                            <div className="progres-year-0-17" style={{width: '150px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Кашкадарьинская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '270px'}}/>
                            <div className="progres-year-16-60" style={{width: '190px'}}/>
                            <div className="progres-year-31-45" style={{width: '50px'}}/>
                            <div className="progres-year-18-30" style={{width: '330px'}}/>
                            <div className="progres-year-0-17" style={{width: '150px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Хорезмская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '90px'}}/>
                            <div className="progres-year-16-60" style={{width: '190px'}}/>
                            <div className="progres-year-31-45" style={{width: '150px'}}/>
                            <div className="progres-year-18-30" style={{width: '300px'}}/>
                            <div className="progres-year-0-17" style={{width: '50px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Бухарская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '220px'}}/>
                            <div className="progres-year-16-60" style={{width: '190px'}}/>
                            <div className="progres-year-31-45" style={{width: '100px'}}/>
                            <div className="progres-year-18-30" style={{width: '350px'}}/>
                            <div className="progres-year-0-17" style={{width: '150px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Навоинская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '170px'}}/>
                            <div className="progres-year-16-60" style={{width: '290px'}}/>
                            <div className="progres-year-31-45" style={{width: '200px'}}/>
                            <div className="progres-year-18-30" style={{width: '100px'}}/>
                            <div className="progres-year-0-17" style={{width: '190px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Джизакская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '80px'}}/>
                            <div className="progres-year-16-60" style={{width: '150px'}}/>
                            <div className="progres-year-31-45" style={{width: '100px'}}/>
                            <div className="progres-year-18-30" style={{width: '270px'}}/>
                            <div className="progres-year-0-17" style={{width: '360px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Сырдаьинская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '80px'}}/>
                            <div className="progres-year-16-60" style={{width: '190px'}}/>
                            <div className="progres-year-31-45" style={{width: '270px'}}/>
                            <div className="progres-year-18-30" style={{width: '230px'}}/>
                            <div className="progres-year-0-17" style={{width: '150px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Ташкенсткая</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '120px'}}/>
                            <div className="progres-year-16-60" style={{width: '240px'}}/>
                            <div className="progres-year-31-45" style={{width: '170px'}}/>
                            <div className="progres-year-18-30" style={{width: '50px'}}/>
                            <div className="progres-year-0-17" style={{width: '450px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Самаркандская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '170px'}}/>
                            <div className="progres-year-16-60" style={{width: '290px'}}/>
                            <div className="progres-year-31-45" style={{width: '400px'}}/>
                            <div className="progres-year-18-30" style={{width: '100px'}}/>
                            <div className="progres-year-0-17" style={{width: '190px'}}/>
                        </div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Ташкент</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres-year-61" style={{width: '30px'}}/>
                            <div className="progres-year-16-60" style={{width: '290px'}}/>
                            <div className="progres-year-31-45" style={{width: '170px'}}/>
                            <div className="progres-year-18-30" style={{width: '80px'}}/>
                            <div className="progres-year-0-17" style={{width: '110px'}}/>
                        </div>
                    </div>
                </div>
                <div className="categories-inform">
                    <div className="categories">
                        <div className="categories-item">
                            <input type="checkbox" className="checkbox" />
                            <div className="categories-color" style={{backgroundColor: '#78BAF3'}}/>
                            <p>Возрастной период заявителей <strong>0-17</strong></p>
                        </div>
                        <div className="categories-item">
                            <input type="checkbox" className="checkbox" />
                            <div className="categories-color" style={{backgroundColor: '#F57670'}}/>
                            <p>Возрастной период заявителей <strong>18-30</strong></p>
                        </div>
                        <div className="categories-item">
                            <input type="checkbox" className="checkbox" />
                            <div className="categories-color" style={{backgroundColor: '#DAF285'}}/>
                            <p>Возрастной период заявителей <strong>31-45</strong></p>
                        </div>
                    </div>
                    <div className="categories">
                        <div className="categories-item">
                            <input type="checkbox" className="checkbox" />
                            <div className="categories-color" style={{backgroundColor: '#B393E0'}}/>
                            <p>Возрастной период заявителей <strong>46-60</strong></p>
                        </div>
                        <div className="categories-item">
                            <input type="checkbox" className="checkbox" />
                            <div className="categories-color" style={{backgroundColor: '#5DDAF0'}}/>
                            <p>Возрастной период заявителей <strong>61+</strong></p>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    );
}

export default withTranslation() (StatisticYearCategories);
