import React, {useState, useEffect} from "react";
import SimpleModal from "./SimpleModal";
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import "../../assets/scss/adminListener.scss"
import DeleteIcon from "@material-ui/icons/Delete";

const AdminListListener = ({t}) => {
    const [items, setItems] = useState([]);
    const [listeners, setListeners] = useState([]);
    const sectionIds = []
    const i18 = localStorage.getItem('I18N_LANGUAGE')

    useEffect(() => {
        getListeners()
    }, []);

    const getListeners = () => {
        RequestFunctions.getListeners()
            .then(res => {
                    setListeners(res)
                    setItems(res)
                }
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
        getListeners()
    }

    const activeSection = (id) => {
        setListeners(items.filter(item => item.section.id === id))
    }

    return (
        <div className="admin">
            <div className="admin-list-listnear">
                <h5 className="table-title">{t("Department")}</h5>
                <div className="admin-listener">
                    <div className="listener">
                        <div className="listener-divs">
                            <div className="listener-items">
                                <button
                                    onClick={() => getListeners()}>{t("All")}</button>
                            </div>
                            {items && items.map((item, i) => {
                                    if (!sectionIds.includes(item.section.id)) {
                                        sectionIds.push(item.section.id)
                                        return (
                                            <div key={item.id} className="listener-items">
                                                <button
                                                    onClick={() => activeSection(item.section.id)}>{item.section.title[i18]}</button>
                                            </div>)
                                    }
                                }
                            )}
                        </div>
                    </div>
                </div>
                <div className="table-scroll" style={{paddingBottom: '20px', marginBottom: '20px'}}>
                    {/* <h5 className="table-title">{t("New")}</h5>
                    <div className="table-registration">
                        <div>
                            <table>
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                        <div className="table-registration-button">
                            <button className="btn-default">{t("Register all")}</button>
                        </div>
                    </div>*/}
                </div>
                <div className="table-scroll" style={{paddingBottom: '20px', marginBottom: '20px'}}>
                    <h5 className="table-title">{t("List")}</h5>
                    <table>
                        <tbody>
                        <tr>
                            <th className="table-border applicant-name">{t("Full name")}</th>
                            <th className="table-border nation">{t("Position")}</th>
                            <th className="table-border gender">{t("Course")}</th>
                            <th className="table-border citi">{t("Department")}</th>
                            <th className="table-border tel">{t("Phone number")}</th>
                            <th className="table-border pochta">{t("Email")}</th>
                            <th className="table-border ">Edit</th>
                            <th className="table-border ">Delete</th>
                        </tr>
                        {listeners && listeners.map((item, i) =>
                            <tr key={i} value={item.id}>
                                <td className="table-border applicant-name">{item.fullName}</td>
                                <td className="table-border">{item.position.title[i18]}</td>
                                <td className="table-border">{item.course}</td>
                                <td className="table-border">{item.section.title[i18]}</td>
                                <td className="table-border">{item.phoneNumber}</td>
                                <td className="table-border">{item.email}</td>
                                <td className="table-border edit"><SimpleModal
                                    item={item}
                                    getListeners={() => getListeners()}/></td>
                                <td className="table-border edit">
                                    <button type="button" className="deleteIcon" onClick={() => deleteMethod(item.id)}>
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
    );
}

export default withTranslation()(AdminListListener);
