    import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
    import {withTranslation} from "react-i18next";

const AdminListSetting = ({t}) => {


    return (
        <div className="admin">
            <div className="admin-list-setting">
            <div className="list-add">
                        <AddIcon fontSize='large' style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25', borderRadius: '50%', marginRight: '10px'}}/>
                {t("Add department")}
                    </div>
                <div style={{ margin: '20px 0' }}>
                    <div className="table-scroll" style={{ marginTop: '10px' }}>
                        <h5 className="table-title">{t("Department")}</h5>
                        <table>
                            <tr>
                                <th className="table-border number">#</th>
                                <th className="table-border name-uz">Name Uz</th>
                                <th className="table-border name-ru">Name Ру</th>
                                <th className="table-border name-en">Name En</th>
                                <th className="table-border edit">{t("Edit")}</th>
                                <th className="table-border delete">{t("Delete")}</th>
                            </tr>
                            <tr>
                                <td className="table-border">1</td>
                                <td className="table-border">Jinoiy ishlar</td>
                                <td className="table-border">Уголовные дела</td>
                                <td className="table-border">Criminal cases</td>
                                <td className="table-border edit">
                                    <EditIcon />
                                </td>
                                <td className="table-border delete">
                                    <DeleteIcon />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default withTranslation()(AdminListSetting);
