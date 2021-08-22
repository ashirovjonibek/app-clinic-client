import React, {useEffect, useState} from "react";
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import SimpleModal from "./SimpleModal";
import AppealModal from "./AppealModal";
import DeleteIcon from "@material-ui/icons/Delete";

const AdminListAppeal = ({t}) => {

    const [applicants, setApplicants] = useState([]);
    const i18 = localStorage.getItem('I18N_LANGUAGE')

    useEffect(() => {
        getApplicants()
    }, []);

    const getApplicants = () => {
        RequestFunctions.getApplicants()
            .then(res =>
                setApplicants(res)
            ).catch(error =>
            console.log(error))
    }
    const deleteMethod = (id) => {
        RequestFunctions.deleteUser(id)
            .then(res =>
                console.log(res)
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
                            {applicants && applicants.map((item, i) =>

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
                                        <button type="button" className="deleteIcon" onClick={()=>deleteMethod(item.id)}>
                                            <DeleteIcon/>
                                        </button>
                                    </td>
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
