import React, {useState, useEffect} from "react";
import SimpleModal from "./SimpleModal";
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import "../../assets/scss/adminListener.scss"
import DeleteIcon from "@material-ui/icons/Delete";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {CheckCircle} from "@material-ui/icons";
import Swal from "sweetalert2";
import axios from "axios";
import {apiPath} from "../../requests/apiPath";
import {configHeader} from "../../requests/congifHeader";
import i18next from "i18next";

const AdminListListener = ({t, searchTerm}) => {
    const [items, setItems] = useState([]);
    const [listeners, setListeners] = useState([]);
    const [reLoad, setReLoad] = useState(true);
    const sectionIds = []
    const i18 = i18next.language

    useEffect(() => {
        getListeners()
    }, [reLoad]);

    const getListeners = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/auth/listeners',
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
    };

    const deleteMethod = (id) => {
        Swal.fire({
            title: t("Delete user")+"?",
            cancelButtonText: t("Cancel"),
            confirmButtonText: t("Delete"),
            confirmButtonColor: "red",
            showCancelButton: true,
            icon: "warning"
        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios.delete(API_URL + apiPath.deleteUser + "?id=" + id, {
                    headers: {
                        'Authorization': localStorage.getItem(STORAGE_NAME),
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => {
                            if (res.status === 200) {
                                Swal.fire(t("Deleted")+"", "", "success").then((r) => {
                                    getListeners()
                                    setReLoad(!reLoad)
                                })
                            } else {
                                Swal.fire(t("An error occurred")+"!!!", "", "error").then((r) => {
                                    getListeners()
                                })
                            }
                        }
                    ).catch(error => {
                    Swal.fire(t("An error occurred")+"!!!", "", "error").then((r) => {
                        getListeners()
                    })
                })
            }
        });
    };

    const changeViewed = (id) => {
        const axios = require('axios');
        const config = {
            method: 'put',
            url: API_URL + '/auth/updateListenerByView/' + id + '',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };
        Swal.fire({
            title: t("User acceptance")+"?",
            confirmButtonText: t("Yes"),
            cancelButtonText: t("No"),
            showCancelButton: true,
            icon: "warning"
        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios(config)
                    .then(function (response) {
                        Swal.fire(t("Accepted")+"!!!", "", "success").then((confirm1) => {
                            getListeners()
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                        Swal.fire(t("Applicant deleted")+"!!!", "", "error").then((confirm1) => {
                            getListeners()
                        })
                    });
            }
        });
        setTimeout(() => {
            setReLoad(!reLoad)
        }, 1700)
    }

    const activeSection = (id) => {
        setListeners(items.filter(item => item.section.id === id))
    }


    return (
        <div className="admin">
            <div className="admin-list-listnear">
                <div className="admin-listener">
                    <h5 className="table-title">{t("Department")}</h5>
                    <div className="listener">
                        <div className="listener-divs">
                            <div className="listener-items">
                                <button className="notification"
                                        onClick={() => getListeners()}>{t("All")}
                                </button>
                            </div>
                            {items && items.map((item) => {
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
                {
                    listeners && listeners.find(item => item.viewed === false)
                        ? <div className="table-scroll" style={{paddingBottom: '20px', marginBottom: '20px'}}>
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
                                    <th className="table-border ">Delete</th>
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
                                            <button type="button" className="checkIcon"
                                                    onClick={() => changeViewed(item.id)}>
                                                <CheckCircle/>
                                            </button>
                                        </td>
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
                        </div> : null
                }

                <div className="table-scroll" style={{paddingBottom: '20px', marginBottom: '20px'}}>
                    <h5 className="table-title">{t("List")}</h5>
                    <table>
                        <tbody>
                        <tr>
                            <th className="table-border ">{t("Full name")}</th>
                            <th className="table-border nation">{t("Position")}</th>
                            <th className="table-border gender">{t("Course")}</th>
                            <th className="table-border citi">{t("Department")}</th>
                            <th className="table-border tel">{t("Phone number")}</th>
                            <th className="table-border pochta">{t("Email")}</th>
                            <th className="table-border ">Edit</th>
                            <th className="table-border ">Delete</th>
                        </tr>
                        {listeners && listeners.filter(item => {
                            if (searchTerm === "") {
                                return item
                            } else if (item.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return item
                            }
                        }).map((item, i) =>
                            <tr key={i} value={item.id}>
                                <td className="table-border ">{item.fullName}</td>
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
