import React from "react";
import {withTranslation} from "react-i18next";
import StatisticsByOverdue from "./Statistics/StatisticsByOverdue";

const StatisticOverdue = ({t}) => {
    return (
        <div className="statistic-overdue">
            <div className="statistic-section-item-title">
                <h5>{t("Overdue responses")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <StatisticsByOverdue/>
                {/*<div className="statistic-item-line">
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">0</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">0.5</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">1</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">1.5</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">2</div>
                    </div>
                    <div className="item-line">
                        <div className="line"/>
                        <div className="item">2.5</div>
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Ферганская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '190px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Наманганская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '60px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Андижанская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '140px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Сурхандарьинская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '110px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Кашкадарьинская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '180px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Хорезмская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '220px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Бухарская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '120px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Навоинская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '170px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Джизакская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '140px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Сырдаьинская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '80px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Ташкенсткая</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '110px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Самаркандская</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '150px'}}/>
                            <span className="progres-value">168</span>
                        </div>

                    </div>
                </div>
                <div className="statistic-item">
                    <div className="statistic-item-name">Ташкент</div>
                    <div className="statistic-item-progres-section">
                        <div className="item-progres">
                            <div className="progres" style={{width: '200px'}}/>
                            <span className="progres-value">168</span>
                        </div>
                    </div>
                </div>*/}
            </div>

        </div>
    );
}

export default withTranslation()(StatisticOverdue);
