import React, {useState, useEffect} from "react";
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import SimpleModal from "./SimpleModal";
import DeleteIcon from "@material-ui/icons/Delete";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const AdminListModerator = ({t,searchTerm}) => {
    const [items, setItems] = useState([]);
    const [moderator, setModerator] = useState([]);
    // const sectionIds = []
    const i18 = localStorage.getItem('I18N_LANGUAGE')
    const [reLoad, setReLoad] = useState(true);

    useEffect(() => {
        getListeners()
    }, [reLoad])

    const getListeners = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL+'/auth/moderators',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setItems(response.data)
                setModerator(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const deleteMethod = (id) => {
        RequestFunctions.deleteUser(id)
            .then(res => {
                console.log(res)
                getListeners()
                }
            ).catch(error => {
            console.log(error)
        })
        getListeners()
        setReLoad(!reLoad)
    }

    // const activeSection = (id) => {
    //     setModerator(items.filter(item => item.section.id === id))
    // }

    return (
        <div className="admin">
            <div className="admin-list-listnear">
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
                        {moderator && moderator.filter(item=>{
                            if (searchTerm===""){
                                return item
                            }else if (item.fullName.toLowerCase().includes(searchTerm.toLowerCase())){
                                return item
                            }
                        }).map((item) =>
                            <tr key={item.id} value={item.id}>
                                <td className="table-border applicant-name">{item.fullName}</td>
                                <td className="table-border">{item.position.title[i18]}</td>
                                <td className="table-border">{item.course}</td>
                                <td className="table-border">{item.section.title[i18]}</td>
                                <td className="table-border">{item.phoneNumber}</td>
                                <td className="table-border">{item.email}</td>
                                <td className="table-border edit"><SimpleModal item={item} getListeners={getListeners}/>
                                </td>
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

export default withTranslation()(AdminListModerator);
