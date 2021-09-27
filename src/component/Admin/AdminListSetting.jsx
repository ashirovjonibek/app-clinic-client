import React, {useEffect, useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {withTranslation} from "react-i18next";
import SettingModal from "./SettingModal";
import RequestFunctions from "../../requests/RequestFunctions";
import Swal from "sweetalert2";
import axios from "axios";
import {API_URL} from "../../utils/constant";
import {apiPath} from "../../requests/apiPath";
import {configHeader} from "../../requests/congifHeader";

const AdminListSetting = ({t,searchTerm}) => {
    const [departments, setDepartments] = useState([
        {
            id: 0,
            title: {
                ru: "loading...",
                uz: "loading...",
                en: "loading..."
            },
            description: {
                ru: "loading...",
                uz: "loading...",
                en: "loading..."
            }
        }
    ]);

    useEffect(() => {
        getSections()
        return () => {
            setDepartments([]); // This worked for me
        };
    }, []);

    const getSections = () => {
        RequestFunctions.getSections()
            .then(res => {
                    setDepartments(res)
                }
            ).catch(error => {
            console.log(error)
        })
    }

    const deleteMethod = (id) => {
        Swal.fire({
            title:"Kafedra o'chirilsinmi?",
            cancelButtonText:"Bekor qilish",
            confirmButtonText:"O'chirish",
            confirmButtonColor:"red",
            showCancelButton:true,
            icon:"warning"
        }).then((confirm)=>{
            if (confirm.isConfirmed){
                axios.delete(API_URL + apiPath.deleteSection + id, configHeader)
                    .then(res => {
                            if (res.status === 200) {
                                Swal.fire("Kafedra o'chirildi", "", "success").then((r) => {
                                    getSections()
                                })
                            } else {
                                Swal.fire("Xatolik yuz berdi!!!", "", "error").then((r) => {
                                    getSections()
                                })
                            }
                        }
                    ).catch(error => {
                    Swal.fire("Xatolik yuz berdi!!!", "", "error").then((r) => {
                        getSections()
                    })
                })
            }
        });

    }
    return (
        <div className="admin">
            <div className="admin-list-setting">
                <SettingModal getSections={getSections}/>
                <div style={{margin: '20px 0'}}>
                    <div className="table-scroll" style={{marginTop: '10px'}}>
                        <h5 className="table-title">{t("Department")}</h5>
                        <table>
                            <tbody>
                            <tr>
                                <th className="table-border number">#</th>
                                <th className="table-border name-uz">Bo'lim nomi</th>
                                <th className="table-border name-ru">Название кафедара</th>
                                <th className="table-border name-en">Department name</th>
                                {/*<th className="table-border edit">{t("Edit")}</th>*/}
                                <th className="table-border delete">{t("Delete")}</th>
                            </tr>
                            {departments && departments.filter(item=>{
                                if (searchTerm===""){
                                    return item
                                }else if (item.title["uz"].toLowerCase().includes(searchTerm.toLowerCase())){
                                    return item
                                }
                            }).map((item, i) =>
                                <tr key={item.id} value={item.id}>
                                    <td className="table-border ">{i + 1}</td>
                                    <td className="table-border">{item.title["uz"]}</td>
                                    <td className="table-border">{item.title["ru"]}</td>
                                    <td className="table-border">{item.title["en"]}</td>
                                    {/*<td className="table-border edit">*/}
                                    {/*    <EditIcon/>*/}
                                    {/*</td>*/}
                                    <td className="table-border delete">
                                        <button className="deleteIcon">
                                            <DeleteIcon onClick={() => deleteMethod(item.id)}/>
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

export default withTranslation()(AdminListSetting);
