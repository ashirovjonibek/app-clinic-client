import React, {useState, useEffect} from "react";
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import SimpleModal from "./SimpleModal";

const AdminListSupervisor = ({t}) => {
    const i18 = localStorage.getItem('I18N_LANGUAGE')
    const [supervisor, setSupervisor] = useState([]);

    useEffect(() => {
       getListeners()
         },[supervisor])

    const getListeners = () => {
        RequestFunctions.getBosses()
            .then(res => {
                setSupervisor(res)
                console.log(res)
            }).catch(error =>
            console.log(error))
    }
    return (
        <div className="admin">
            <div className="admin-list-listnear">
                <div className="table-scroll" style={{paddingBottom: '20px', marginBottom: '20px'}}>
                    <h5 className="table-title">{t("New")}</h5>
                    <div className="table-registration">
                        <div>
                            <table>
                                <tr>
                                    <th className="table-border applicant-name">{t("Full name")}</th>
                                    <th className="table-border nation">{t("Position")}</th>
                                    <th className="table-border gender">{t("Course")}</th>
                                    <th className="table-border citi">{t("Department")}</th>
                                    <th className="table-border tel">{t("Phone number")}</th>
                                    <th className="table-border pochta">{t("Email")}</th>
                                </tr>
                                <tr>
                                    <td className="table-border applicant-name">Darlene Robertson</td>
                                    <td className="table-border"></td>
                                    <td className="table-border"></td>
                                    <td className="table-border"></td>
                                    <td className="table-border"></td>
                                    <td className="table-border"></td>
                                </tr>
                                <tr>
                                    <td className="table-border applicant-name">Darlene Robertson</td>
                                    <td className="table-border"></td>
                                    <td className="table-border"></td>
                                    <td className="table-border"></td>
                                    <td className="table-border"></td>
                                    <td className="table-border"></td>
                                </tr>
                            </table>

                        </div>
                        <div className="table-registration-button">
                            <button className="btn-default">{t("Register all")}</button>
                        </div>
                    </div>
                </div>
                <div className="table-scroll" style={{paddingBottom: '20px', marginBottom: '20px'}}>
                    <h5 className="table-title">{t("List")}</h5>
                    <table>
                        <tr>
                            <th className="table-border applicant-name">{t("Full name")}</th>
                            <th className="table-border nation">{t("Position")}</th>
                            <th className="table-border gender">{t("Course")}</th>
                            <th className="table-border citi">{t("Department")}</th>
                            <th className="table-border tel">{t("Phone number")}</th>
                            <th className="table-border pochta">{t("Email")}</th>
                            <th className="table-border"></th>

                        </tr>
                        {supervisor && supervisor.map((item, i) =>
                            <tr key={i} value={item.id}>
                                <td className="table-border applicant-name">{item.fullName}</td>
                                <td className="table-border">{item.position.title[i18]}</td>
                                <td className="table-border">{item.course}</td>
                                <td className="table-border">{item.section.title[i18]}</td>
                                <td className="table-border">{item.phoneNumber}</td>
                                <td className="table-border">{item.email}</td>
                                <td className="table-border edit"><SimpleModal item={item}
                                                                               getListeners={getListeners}/></td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(AdminListSupervisor);
