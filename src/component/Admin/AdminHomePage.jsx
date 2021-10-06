import React, {useEffect, useState} from "react";
import {withTranslation} from "react-i18next";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import axios from "axios";
import {apiPath} from "../../requests/apiPath";
import i18next from "i18next";

const AdminHomePage = ({t, searchTerm}) => {
    const [applicants, setApplicants] = useState([]);
    const i18 = i18next.language

    useEffect(() => {
        getApplicants()
    }, []);

    const getApplicants = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/auth/applicants',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setApplicants(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const deleteMethod = (id) => {
        Swal.fire({
            confirmButtonText: t("O'chirish") + "!!!",
            cancelButtonText: t("Cancel"),
            confirmButtonColor: "red",
            showCancelButton: true,
            title: t("Should the applicant be deleted") + "?",
            icon: "warning"
        }).then((conform) => {
            if (conform.isConfirmed) {
                axios.delete(API_URL + apiPath.deleteUser + "?id=" + id, {
                    headers: {
                        'Authorization': localStorage.getItem(STORAGE_NAME),
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => {
                            console.log(res);
                            if (res?.status === 200) {
                                Swal.fire(t("Applicant deleted") + "!!!", "", "success").then(r => {
                                    getApplicants()
                                })
                            } else {
                                Swal.fire(t("An error occurred") + "!!!", "", "error").then(r => {
                                    getApplicants()
                                })
                            }
                        }
                    ).catch(error => {
                    console.log(error);
                    Swal.fire(t("An error occurred") + "!!!", "", "error").then(r => {
                        getApplicants()
                    })
                });
            }
        })
    }
    return (
        <div className="admin">

            <div className="admin-appeals-count">
                <div className="appeals-count-div">
                    <div className="appeals-count-img">
                        <img src="https://img.icons8.com/nolan/64/document.png" alt=""/>
                    </div>
                    <div className=" appeals-count-line"/>

                    <div className="appeals-count-content">
                        <p className="appeals-count-p">578</p>
                        <p>jami arizalar</p>
                    </div>
                </div>
                <div className="appeals-count-div">
                    <div className="appeals-count-img">
                        <img src="https://img.icons8.com/nolan/64/clock.png" alt=""/>
                    </div>
                    <div className=" appeals-count-line"/>
                    <div className="appeals-count-content">
                        <p className="appeals-count-p">137</p>
                        <p>ijrodagi arizalar</p>
                    </div>
                </div>
                <div className="appeals-count-div">
                    <div className="appeals-count-img">
                        <img src="https://img.icons8.com/nolan/64/checked-2.png" alt=""/>
                    </div>
                    <div className=" appeals-count-line"/>
                    <div className="appeals-count-content">
                        <p className="appeals-count-p">441</p>
                        <p>bajarilgan arizalar</p>
                    </div>
                </div>
                <div className="appeals-count-div">
                    <div className="appeals-count-content">
                        <p className="appeals-count-p">66</p>
                        <p>muddati tugab bajarilgan</p>
                    </div>
                    <div className=" appeals-count-line" style={{margin: "0 2px"}}/>
                    <div className="appeals-count-content">
                        <p className="appeals-count-p">35</p>
                        <p>kech qabul qilingan</p>
                    </div>
                </div>
                <div className="appeals-count-div">
                    <div className="appeals-count-img">
                        <img src="https://img.icons8.com/nolan/64/cancel.png" alt=""/>
                    </div>
                    <div className=" appeals-count-line"/>
                    <div className="appeals-count-content">
                        <p className="appeals-count-p">11</p>
                        <p>muddati tugagan arizalar</p>
                    </div>
                </div>

            </div>

            <div className="admin-list-appeal">
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
                            {applicants && applicants.map((item) =>
                                <tr key={item.id} value={item.id}>
                                    <td className="table-border applicant-name">{item.fullName}</td>
                                    <td className="table-border">{item.nation.name[i18]}</td>
                                    <td className="table-border">{item.gender}</td>
                                    <td className="table-border"
                                        style={{textAlign: 'start'}}> {item.address}</td>
                                    <td className="table-border">{item.phoneNumber}</td>
                                    <td className="table-border">{item.email}</td>
                                    <td className="table-border">{item.socialStatus.name[i18]}</td>
                                    <td className="table-border">{item.birthDate.slice(0, 10)}</td>
                                    <td className="table-border"> 3 kun</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default withTranslation()(AdminHomePage);
