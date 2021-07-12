import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

const AdminListSetting = () => {


    return (
        <div className="admin">
            <div className="admin-list-setting">
            <div className="list-add">
                        <AddIcon fontSize='large' style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25', borderRadius: '50%', marginRight: '10px'}}/>
                        Добавить кафедру
                    </div>
                <div style={{ margin: '20px 0' }}>
                    <div className="table-scroll" style={{ marginTop: '10px' }}>
                        <h5 className="table-title">Кафедры</h5>
                        <table>
                            <tr>
                                <th className="table-border number">#</th>
                                <th className="table-border name-uz">Name Uz</th>
                                <th className="table-border name-ru">Name Ру</th>
                                <th className="table-border name-en">Name En</th>
                            </tr>
                            <tr>
                                <td className="table-border">1</td>
                                <td className="table-border">Jinoiy ishlar</td>
                                <td className="table-border">Уголовные дела</td>
                                <td className="table-border">Criminal cases</td>
                                <div className="edit">
                                    <EditIcon />
                                    <DeleteIcon />
                                </div>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminListSetting;
