import React, {useEffect, useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {withTranslation} from "react-i18next";
import SettingModal from "./SettingModal";
import RequestFunctions from "../../requests/RequestFunctions";

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
        },
    ]);

    useEffect(() => {
        getSections()
    }, [departments]);

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
        RequestFunctions.deleteSection(id)
            .then(res => {
                    console.log(res)
                    getSections()
                }
            ).catch(error => {
            console.log(error)
        })
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
                                <th className="table-border name-uz">Name Uz</th>
                                <th className="table-border name-ru">Name Ру</th>
                                <th className="table-border name-en">Name En</th>
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
