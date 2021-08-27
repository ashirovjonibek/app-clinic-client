import React, {useState, useEffect} from "react";
import SimpleModal from "./SimpleModal";
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import "../../assets/scss/adminListener.scss"
import DeleteIcon from "@material-ui/icons/Delete";
import {STORAGE_NAME} from "../../utils/constant";
import {CheckCircle} from "@material-ui/icons";
import {get} from "react-hook-form";

const AdminListListener = ({t}) => {
    const [items, setItems] = useState([]);
    const [listeners, setListeners] = useState([]);
    const [reLoad, setReLoad] = useState(true);
    const sectionIds = []
    const i18 = localStorage.getItem('I18N_LANGUAGE')

    useEffect(() => {
        getListeners()
    }, [reLoad]);

    const getListeners = () => {
        const axios = require('axios');

        const config = {
            method: 'get',
            url: 'http://67.205.182.147:9090/api/auth/listeners',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };

        axios(config)
            .then(function (response) {
                setItems(response.data)
                setListeners(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const deleteMethod = (id) => {
        RequestFunctions.deleteUser(id)
            .then(res =>{}
            ).catch(error => {
            console.log(error)
        })
        setTimeout(() => {
            getListeners()
            setReLoad(!reLoad)
        }, 1500)
    }

    const changeViewed = (id) => {
        const axios = require('axios');
        const config = {
            method: 'put',
            url: 'http://67.205.182.147:9090/api/auth/updateListenerByView/' + id + '',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };
        axios(config)
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
        setTimeout(() => {
            setReLoad(!reLoad)
        }, 1700)
    }

    const activeSection = (id) => {
        setListeners(items.filter(item => item.section.id === id))
    }

    // const notify = () => {
    //     let count = 0;
    //     items.forEach(item => {
    //         if (item.viewed === false) {
    //             count++
    //         }
    //     })
    //     setNotification(count)
    // }

    return (
        <div className="admin">
            <div className="admin-list-listnear">
                <h5 className="table-title">{t("Department")}</h5>
                <div className="admin-listener">
                    <div className="listener">
                        <div className="listener-divs">
                            <div className="listener-items">
                                <button className="notification"
                                        onClick={() => getListeners()}>{t("All")}
                                    {/*{*/}
                                    {/*    notification > 0 ?*/}
                                    {/*        <span className="badge">{notification}</span>*/}
                                    {/*        : null*/}
                                    {/*}*/}
                                </button>
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
                                    return null
                                }
                            )}
                        </div>
                    </div>
                </div>
                <div className="table-scroll" style={{paddingBottom: '20px', marginBottom: '20px'}}>
                    <h5 className="table-title">{t("New")}</h5>
                    <table>
                        <tbody>
                        <tr>
                            <th className="table-border applicant-name">{t("Full name")}</th>
                            <th className="table-border nation">{t("Position")}</th>
                            <th className="table-border gender">{t("Course")}</th>
                            <th className="table-border citi">{t("Department")}</th>
                            <th className="table-border tel">{t("Phone number")}</th>
                            <th className="table-border pochta">{t("Email")}</th>
                            <th className="table-border ">{t("Accept")}</th>
                        </tr>
                        {listeners && listeners.filter(item => item.viewed === false).map((item, i) =>
                            <tr key={i} value={item.id}>
                                <td className="table-border applicant-name">{item.fullName}</td>
                                <td className="table-border">{item.position.title[i18]}</td>
                                <td className="table-border">{item.course}</td>
                                <td className="table-border">{item.section.title[i18]}</td>
                                <td className="table-border">{item.phoneNumber}</td>
                                <td className="table-border">{item.email}</td>

                                <td className="table-border edit">
                                    <button type="button" className="checkIcon" onClick={() => changeViewed(item.id)}>
                                        <CheckCircle/>
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
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
