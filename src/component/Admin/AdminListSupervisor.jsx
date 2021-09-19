import React, {useState, useEffect} from "react";
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import SimpleModal from "./SimpleModal";
import DeleteIcon from "@material-ui/icons/Delete";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import axios from "axios";
import {apiPath} from "../../requests/apiPath";
import {configHeader} from "../../requests/congifHeader";

const AdminListSupervisor = ({t,searchTerm}) => {
    const i18 = localStorage.getItem('I18N_LANGUAGE')
    const [supervisor, setSupervisor] = useState([]);
    const [items, setItems] = useState([]);
    const sectionIds = []
    const [reLoad, setReLoad] = useState(true);

    useEffect(() => {
        getListeners()
    }, [reLoad])

    const getListeners = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL+'/auth/bosses',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setItems(response.data)
                setSupervisor(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const deleteMethod = (id) => {
        Swal.fire({
            title:"User o'chirilsinmi???",
            icon:"warning",
            confirmButtonColor:"red",
            cancelButtonText:"Bekor qilish",
            confirmButtonText:"O'chirish",
            showCancelButton:true
        }).then((conform)=>{
            if (conform.isConfirmed){
                axios.delete(API_URL + apiPath.deleteUser + "?id=" + id, configHeader)
                    .then(res => {
                            if (res.status===200){
                                Swal.fire("O'chirildi!!!","","success").then((r)=>{
                                    getListeners();
                                })
                            }else {
                                Swal.fire("Xatolik yuz berdi","","error").then((r)=>{
                                    getListeners();
                                })
                            }
                        }
                    ).catch(error => {
                    Swal.fire("Xatolik yuz berdi","","error").then((r)=>{
                        getListeners();
                    })
                })
            }
        });
    };

    const activeSection = (id) => {
        setSupervisor(items.filter(item => item.section.id === id))
    };

    return (
        <div className="admin">
            <div className="admin-list-listnear">
                <div className="admin-listener">
                    <h5 className="table-title">{t("Department")}</h5>
                    <div className="listener">
                        <div className="listener-divs">
                            <div className="listener-items">
                                <button
                                    onClick={() => getListeners()}>{t("All")}</button>
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
                        {supervisor && supervisor.filter(item=>{
                            if (searchTerm===""){
                            return item
                        }else if (item.fullName.toLowerCase().includes(searchTerm.toLowerCase())){
                            return item
                        }
                        }).map((item, i) =>
                            <tr key={i} value={item.id}>
                                <td className="table-border applicant-name">{item.fullName}</td>
                                <td className="table-border">{item.position.title[i18]}</td>
                                <td className="table-border">{item.course}</td>
                                <td className="table-border">{item.section.title[i18]}</td>
                                <td className="table-border">{item.phoneNumber}</td>
                                <td className="table-border">{item.email}</td>
                                <td className="table-border edit"><SimpleModal item={item}
                                                                               getListeners={getListeners}/>
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

export default withTranslation()(AdminListSupervisor);
