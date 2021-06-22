import React from "react";

const Dashboard = () => {
    return (
        <div class="dashboard container-fluit">
            <div class="container">
                <div class="dashboard-container">
                    <div class="dashboard-categories">
                        <ul>
                            <li>
                                <h2>145</h2>
                                <p>Общее количество<br /> обращений</p>
                            </li>
                            <div class="vertical-line"></div>
                            <li>
                                <h2>145</h2>
                                <p>Поступило<br /> обращений</p>
                            </li>
                            <div class="vertical-line"></div>
                            <li>
                                <h2>145</h2>
                                <p>Обращениям<br /> ответил</p>
                            </li>
                            <div class="vertical-line"></div>
                            <li>
                                <h2>145</h2>
                                <p>Обращений в<br /> обработке</p>
                            </li>
                            <div class="vertical-line"></div>
                            <li>
                                <h2>145</h2>
                                <p>Новых<br/> обращений</p>
                            </li>
                            <div class="vertical-line"></div>
                            <li>
                                <h2>145</h2>
                                <p>Обращений в<br /> рассмотрении</p>
                            </li>
                            <div class="vertical-line"></div>
                            <li>
                                <h2>145</h2>
                                <p>Прошли модерацию<br /> начальника</p>
                            </li>
                        </ul>
                    </div>
                    <div class="dashboard-table">
                        <table>
                            <tr>
                                <td class="column-categories-name">&nbsp;</td>
                                <td class="table-border table-categoriyes table-mini">Общее<br/> количество<br /> обращений</td>
                                <td class="table-border table-categoriyes table-mini">Поступило<br /> обращений</td>
                                <td class="table-border table-categoriyes table-mini">Обращениям<br /> ответил</td>
                                <td class="table-border table-categoriyes table-mini">Обращений в <br />обработке</td>
                                <td class="table-border table-categoriyes table-mini">Новых<br/>обращений</td>
                                <td class="table-border table-categoriyes table-mini">Обращений в<br /> рассмотрении</td>
                                <td class="table-border table-categoriyes table-mini">Прошли<br/> модерацию<br /> начальника</td>
                            </tr>
                            <tr>
                                <td class="table-border column-categories-name">Имя<br/>фамилия</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                            </tr>
                            <tr>
                                <td class="table-border column-categories-name">Активные<br/>документы</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                            </tr>
                            <tr>
                                <td class="table-border column-categories-name">Общее<br/>количество</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                                <td class="table-border table-mini table-item">1</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
