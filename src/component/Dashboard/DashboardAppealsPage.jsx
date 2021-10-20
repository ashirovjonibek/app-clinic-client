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
import {object} from "prop-types";
import {Alarm,} from "@material-ui/icons";
import {Link} from "react-router-dom";

const DashboardAppealsPage = ({t}) => {
    const user = useSelector(state => state.meReducer);

    const [applicationsCount, setApplicationsCount] = useState([]);
    const [sections, setSections] = useState([]);
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
                let sec = response.data.res.sections, a = []

                for (const [key, value] of Object.entries(sec)) {
                    console.log(key, value)
                    a.push({
                        id: key, data: value
                    })
                }

                setSections(a)
                console.log(a)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>

            <div className="admin">
                <div className="admin-appeals-count" style={{paddingTop: "5px"}}>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img style={{filter: "invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)"}} src="https://img.icons8.com/nolan/64/document.png" alt=""/>
                        </div>
                        <div className=" appeals-count-line"/>

                        <div className="appeals-count-content">
                            <p className="appeals-count-p">{applicationsCount?.allApplications}</p>
                            <p>{t("total appeals")}</p>
                        </div>
                    </div>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img style={{filter: "invert(5%) sepia(1%) saturate(32%) hue-rotate(130deg) brightness(95%) contrast(80%)"}} src="https://img.icons8.com/nolan/64/clock.png" alt=""/>
                        </div>
                        <div className=" appeals-count-line"/>
                        <div className="appeals-count-content">
                            <p className="appeals-count-p">{applicationsCount?.inProcessApplications}</p>
                            <p>{t("appeals in execution")}</p>
                        </div>
                    </div>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img style={{filter: "invert(25%) sepia(100%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)"}} src="https://img.icons8.com/nolan/64/checked-2.png" alt=""/>
                        </div>
                        <div className=" appeals-count-line"/>
                        <div className="appeals-count-content">
                            <p className="appeals-count-p">{applicationsCount?.completeApplications}</p>
                            <p>{t("completed applications")}</p>
                        </div>
                    </div>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img  src="https://img.icons8.com/nolan/64/services.png"/>
                        </div>
                        <div className=" appeals-count-line" style={{margin: "0 2px"}}/>
                        <div className="appeals-count-content">
                            <p className="appeals-count-p">
                                {applicationsCount?.delayDeadlineApplications}
                            </p>
                            <p>{t("extended appeals")}</p>
                        </div>

                    </div>
                    <div className="appeals-count-div">
                        <div className="appeals-count-img">
                            <img style={{filter: "invert(5%) sepia(1%) saturate(32%) hue-rotate(130deg) brightness(95%) contrast(80%)"}} src="https://img.icons8.com/nolan/64/cancel.png" alt=""/>
                        </div>
                        <div className=" appeals-count-line"/>
                        <div className="appeals-count-content">
                            <p className="appeals-count-p">{applicationsCount?.deadlineEndEndingApplications}</p>
                            <p>{t("expired or expired appeals")}</p>
                        </div>
                    </div>

                </div>

                <div style={{marginBottom: "100px"}} className="admin-list-appeal">
                    <div style={{margin: '20px 0'}}>
                        <div className="table-scroll" style={{marginTop: '10px'}}>
                            <h5 className="table-title">{t("List")}</h5>
                            <table>
                                <thead>
                                <tr>
                                    <th className="table-border applicant-name">{t("Bo'limlar")}</th>
                                    <th className="table-border applicant-name">{t("total appeals")}</th>
                                    <th className="table-border nation">{t("appeals in execution")}</th>
                                    <th className="table-border gender">{t("completed applications")}</th>
                                    <th className="table-border citi">{t("extended appeals")}</th>
                                    <th className="table-border tel">{t("expired or expired appeals")}</th>
                                    <th className="table-border pochta">{t("Today")}</th>
                                </tr>

                                </thead>
                                <tbody>
                                {
                                    sections && sections.map(item =>
                                        <tr key={item.id} value={item.id} className="dashboardTableItems" style={{
                                            textDecoration:"underline"
                                        }}>
                                            <td  className="table-border applicant-name">
                                                {item.data.this.title[i18]}
                                            </td>
                                            <td className="table-border"><Link>{item.data.count}</Link>
                                            </td>
                                            <td className="table-border">
                                                <Link>{item.data.inProcessApplications}</Link></td>
                                            <td className="table-border"
                                                style={{textAlign: 'start'}}>
                                                <Link>{item.data.completeApplications}</Link></td>
                                            <td className="table-border">
                                                <Link>{item.data.delayDeadlineApplications}</Link></td>
                                            <td className="table-border">
                                                <Link>{item.data.deadlineEndEndingApplications}</Link></td>
                                            <td className="table-border">
                                                <Link>{item.data.thisDayNewApplications}</Link></td>
                                        </tr>
                                    )
                                }
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
