import React, {useEffect, useState} from "react";
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import DeleteIcon from "@material-ui/icons/Delete";
import {STORAGE_NAME} from "../../utils/constant";

const AdminListAppeal = ({t, searchTerm}) => {
    const [applicants, setApplicants] = useState([]);
    const i18 = localStorage.getItem('I18N_LANGUAGE')

    useEffect(() => {
        getApplicants()
    }, []);

    const getApplicants = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: 'http://67.205.182.147:9090/api/auth/applicants',
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
        RequestFunctions.deleteUser(id)
            .then(res => {
                    console.log(res)
                    getApplicants()
                }
            ).catch(error => {
            console.log(error)
        })
        getApplicants()
    }
    return (
        <div className="admin">
            <div className="admin-list-appeal">
                <div style={{margin: '20px 0'}}>
                    <div className="table-scroll" style={{marginTop: '10px'}}>
                        <h5 className="table-title">{t("List")}</h5>
                        <table>
                            <tbody>
                            <tr>
                                <th className="table-border applicant-name">{t("Full name")}</th>
                                <th className="table-border nation">{t("Nationality")}</th>
                                <th className="table-border gender">{t("Gender")}</th>
                                <th className="table-border citi">{t("Address")}</th>
                                <th className="table-border tel">{t("Phone number")}</th>
                                <th className="table-border pochta">{t("Email")}</th>
                                <th className="table-border lgot">{t("Benefit category")}</th>
                                <th className="table-border date">{t("Date of birth")}</th>
                                <th className="table-border ">{t("Action")}</th>
                            </tr>
                            {applicants && applicants.filter(item => {
                                if (searchTerm === "") {
                                    return item
                                } else if (item.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return item
                                }
                            }).map((item) =>
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
                                    {/*<td className="table-border edit"><AppealModal item={item} getApplicants={getApplicants}/></td>*/}
                                    <td className="table-border edit">
                                        <button type="button" className="deleteIcon"
                                                onClick={() => deleteMethod(item.id)}>
                                            <DeleteIcon/>
                                        </button>
                                    </td>
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

export default withTranslation()(AdminListAppeal);
