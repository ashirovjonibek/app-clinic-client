import React from "react";
import {withTranslation} from "react-i18next";

const StatisticPeriods = ({t}) => {
    return (
        <div className="statistic-periods">
            <div className="statistic-section-item-title">
                <h5>{t("for periods (day, week, month, year)")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <table className="periods-table">
                    <tr>
                        <th className="table-name-cities">Ферганская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Наманганская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Андижанская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Сурхандарьинская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Кашкадарьинская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Хорезмская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Бухарская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Навоинская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Джизакская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Сырдаьинская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Ташкенсткая</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Самаркандская</th>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities">Ташкент</th>
                        <td className="table-statistic-item">fdasdd</td>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                        <td className="table-statistic-item"/>
                    </tr>
                    <tr>
                        <th className="table-name-cities"/>
                        <td className="table-date">День</td>
                        <td className="table-date">Неделя</td>
                        <td className="table-date">Месяц</td>
                        <td className="table-date">Год</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default withTranslation()(StatisticPeriods);

