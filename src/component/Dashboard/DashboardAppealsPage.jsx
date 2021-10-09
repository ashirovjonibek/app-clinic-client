import React, {useEffect, useState} from "react";
import {withTranslation} from "react-i18next";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import axios from "axios";
import {apiPath} from "../../requests/apiPath";
import i18next from "i18next";
import NavTop from "../Nav/NavTop";
import {ArrowBack} from "@material-ui/icons";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import NavLanguage from "../Nav/NavLanguage";
import iconGlass from "../../assets/icon/icon-glass.svg";
import Enter from "../Nav/Enter";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";

const DashboardAppealsPage = ({t}) => {
    const user = useSelector(state => state.meReducer);

    const [applicationsCount, setApplicationsCount] = useState([]);
    const i18 = i18next.language

    useEffect(() => {
        getApplicationCount()
    }, []);

    const getApplicationCount = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/application/get-by-status-count',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setApplicationsCount(response.data.res)
                console.log(response.data.res)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>

            <div className="admin">
                <div className="admin-appeals-count" style={{paddingTop:"5px"}}>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img src="https://img.icons8.com/nolan/64/document.png" alt=""/>
                        </div>
                        <div className=" appeals-count-line"/>

                        <div className="appeals-count-content">
                            <p className="appeals-count-p">{applicationsCount.allApplications ? applicationsCount.allApplications : " . . . "}</p>
                            <p>{t("total appeals")}</p>
                        </div>
                    </div>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img src="https://img.icons8.com/nolan/64/clock.png" alt=""/>
                        </div>
                        <div className=" appeals-count-line"/>
                        <div className="appeals-count-content">
                            <p className="appeals-count-p">{applicationsCount.inProcessApplications ? applicationsCount.inProcessApplications : " . . . "}</p>
                            <p>{t("appeals in execution")}</p>
                        </div>
                    </div>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img src="https://img.icons8.com/nolan/64/checked-2.png" alt=""/>
                        </div>
                        <div className=" appeals-count-line"/>
                        <div className="appeals-count-content">
                            <p className="appeals-count-p">{applicationsCount.completeApplications ? applicationsCount.completeApplications : " . . . "}</p>
                            <p>{t("completed applications")}</p>
                        </div>
                    </div>
                    <div className="appeals-count-div">
                        <div className="appeals-count-content">
                            <p className="appeals-count-p"></p>
                            <p>muddati tugab bajarilgan</p>
                        </div>
                        <div className=" appeals-count-line" style={{margin: "0 2px"}}/>
                        <div className="appeals-count-content">
                            <p className="appeals-count-p"></p>
                            <p>kech qabul qilingan</p>
                        </div>
                    </div>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img src="https://img.icons8.com/nolan/64/cancel.png" alt=""/>
                        </div>
                        <div className=" appeals-count-line"/>
                        <div className="appeals-count-content">
                            <p className="appeals-count-p"></p>
                            <p>muddati tugagan arizalar</p>
                        </div>
                    </div>

                </div>

                <div style={{marginBottom: "100px" }} className="admin-list-appeal">
                    <div style={{margin: '20px 0'}}>
                        <div className="table-scroll" style={{marginTop: '10px'}}>
                            <h5 className="table-title">{t("List")}</h5>
                            <table>
                                <tbody>
                                <tr>
                                    <th className="table-border applicant-name">{t("Jami arizalar")}</th>
                                    <th className="table-border nation">{t("Ijrodagi arizalar")}</th>
                                    <th className="table-border gender">{t("Bajarilgan arizalar")}</th>
                                    <th className="table-border citi">{t("Muddati tugab bajarilgan arizalar")}</th>
                                    <th className="table-border tel">{t("Kech qabul qilingan")}</th>
                                    <th className="table-border pochta">{t("Bugun")}</th>
                                    <th className="table-border lgot">{t("Ertaga")}</th>
                                    <th className="table-border date">{t("Indinga")}</th>
                                    <th className="table-border ">{t("3 kun")}</th>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default withTranslation()(DashboardAppealsPage);
