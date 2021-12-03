import React from "react";

const Dashboard = () => {
    return (
        <div className="dashboard container-fluit12">
            <div className="container12">
                <div className="dashboard-container">
                    <div className="dashboard-categories">
                        <ul>
                            <li>
                                <h2>145</h2>
                                <p>Общее количество<br/> обращений</p>
                            </li>
                            <div className="vertical-line"/>
                            <li>
                                <h2>145</h2>
                                <p>Поступило<br/> обращений</p>
                            </li>
                            <div className="vertical-line"/>
                            <li>
                                <h2>145</h2>
                                <p>Обращениям<br/> ответил</p>
                            </li>
                            <div className="vertical-line"/>
                            <li>
                                <h2>145</h2>
                                <p>Обращений в<br/> обработке</p>
                            </li>
                            <div className="vertical-line"/>
                            <li>
                                <h2>145</h2>
                                <p>Новых<br/> обращений</p>
                            </li>
                            <div className="vertical-line"/>
                            <li>
                                <h2>145</h2>
                                <p>Обращений в<br/> рассмотрении</p>
                            </li>
                            <div className="vertical-line"/>
                            <li>
                                <h2>145</h2>
                                <p>Прошли модерацию<br/> начальника</p>
                            </li>
                        </ul>
                    </div>
                    <div className="dashboard-table">
                        <table>
                            <tr>
                                <td className="column-categories-name">&nbsp;</td>
                                <td className="table-border table-categoriyes table-mini">Общее<br/> количество<br/> обращений
                                </td>
                                <td className="table-border table-categoriyes table-mini">Поступило<br/> обращений</td>
                                <td className="table-border table-categoriyes table-mini">Обращениям<br/> ответил</td>
                                <td className="table-border table-categoriyes table-mini">Обращений в <br/>обработке
                                </td>
                                <td className="table-border table-categoriyes table-mini">Новых<br/>обращений</td>
                                <td className="table-border table-categoriyes table-mini">Обращений в<br/> рассмотрении
                                </td>
                                <td className="table-border table-categoriyes table-mini">Прошли<br/> модерацию<br/> начальника
                                </td>
                            </tr>
                            <tr>
                                <td className="table-border column-categories-name">Имя<br/>фамилия</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                            </tr>
                            <tr>
                                <td className="table-border column-categories-name">Активные<br/>документы</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                            </tr>
                            <tr>
                                <td className="table-border column-categories-name">Общее<br/>количество</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                                <td className="table-border table-mini table-item">1</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
