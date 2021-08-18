import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import {withTranslation} from "react-i18next";

const AdminListAppeal = ({t}) => {

    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "/auth/applicants").then(res => {
            console.log(res.data);
            console.log(applicants);
            setApplicants(res.data);
        });
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            url: API_URL + '/auth/applicants',
            method: 'GET',
            headers: {
                'Authorization': token
            }
        }).then(res => {
            // console.log(res)
        })
        // axios.get(API_URL + "/auth/applicants").then(res => {
        //     console.log(res)
        //     setApplicants(res.data);
        // });
    }, []);

    return (
        <div className="admin">
            <div className="admin-list-appeal">
                <div style={{ margin: '20px 0' }}>
                    <div className="table-scroll" style={{ marginTop: '10px' }}>
                        <h5 className="table-title">{t("List")}</h5>
                        <table>
                            <tr>
                                <th className="table-border applicant-name">{t("Full name")}</th>
                                <th className="table-border nation">{t("Nationality")}</th>
                                <th className="table-border gender">{t("Gender")}</th>
                                <th className="table-border citi">{t("Address")}</th>
                                <th className="table-border tel">{t("Phone number")}</th>
                                <th className="table-border pochta">{t("Email")}</th>
                                <th className="table-border lgot">{t("Benefit category")}</th>
                                <th className="table-border date">{t("Date of birth")}</th>
                            </tr>
                            {applicants && applicants.map((item, i) =>
                                <tr key={i} value={item.id}>
                                    <td className="table-border applicant-name">{item.fullName}</td>
                                    <td className="table-border">{item.nation.name.ru}</td>
                                    <td className="table-border">{item.gender}</td>
                                    <td className="table-border" style={{ textAlign: 'start' }}>{item.region.name.ru},  {item.district.name.ru},  {item.address}</td>
                                    <td className="table-border">{item.phoneNumber}</td>
                                    <td className="table-border">{item.email}</td>
                                    <td className="table-border">{item.socialStatus.name.ru}</td>
                                    <td className="table-border">{item.birthDate.slice(0,2)}</td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default withTranslation()(AdminListAppeal);
