import React, {useEffect, useState} from "react";
import {withTranslation} from "react-i18next";
import DeleteIcon from "@material-ui/icons/Delete";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import axios from "axios";
import {apiPath} from "../../requests/apiPath";
import i18next from "i18next";

const AdminListAppeal = ({t, searchTerm}) => {
    const [applicants, setApplicants] = useState([]);
    const i18 = i18next.language

    useEffect(() => {
        getApplicants()
    }, []);

    const getApplicants = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL+'/auth/applicants',
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
            confirmButtonText: t("O'chirish")+"!!!",
            cancelButtonText:t("Cancel"),
            confirmButtonColor:"red",
            showCancelButton:true,
            title:t("Should the applicant be deleted")+"?",
            icon:"warning"
        }).then((conform)=>{
            if (conform.isConfirmed){
                axios.delete(API_URL + apiPath.deleteUser + "?id=" + id, {
                    headers: {
                        'Authorization': localStorage.getItem(STORAGE_NAME),
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => {
                        console.log(res);
                            if (res?.status===200){
                                Swal.fire(t("Applicant deleted")+"!!!","","success").then(r=>{
                                    getApplicants()
                                })
                            }else {
                                Swal.fire(t("An error occurred")+"!!!","","error").then(r=>{
                                    getApplicants()
                                })
                            }
                        }
                    ).catch(error => {
                    console.log(error);
                    Swal.fire(t("An error occurred")+"!!!","","error").then(r=>{
                        getApplicants()
                    })
                });
            }
        })
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
                                <tr key={item.id} value={item.id} >
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
