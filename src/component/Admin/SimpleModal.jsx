import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, STORAGE_NAME } from '../../utils/constant';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import {withTranslation} from "react-i18next";

function SimpleModal({ item,t }) {
    const [open, setOpen] = useState(false);
    const [roles, setRoles] = useState([]);
    const [select, setSelect] = useState(item.roles[0].name);
    // const [handleSelect, setHandleSelect] = useState('');
    const [changeRolesItem, setChangeRolesItem] = useState();


    // const changeRoles = () => {
    //     if (handleSelect !== select) {
    //         return setChangeRolesItem(roles.filter(item => item.name.includes(handleSelect)));
    //     }
    //     return false;
    // }
    console.log(item.id);
    console.log(changeRolesItem);

    const changeUpdate = () => {
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/auth/update/listenerByRole",
            method: 'PUT',
            data: {
                userId: item.id,
                roleId: changeRolesItem,
            }
        })
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRol = (e) => {
        let rolesItemObj;
        if (e.target.value !== select) {
            rolesItemObj = roles.filter(el => el.name.includes(e.target.value));
            return setChangeRolesItem(rolesItemObj[0].id);
        }
        return false;
    }

    useEffect(() => {
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/auth/roles",
            method: 'GET'
        }).then(res => {
            setRoles(res.data);
        })
    }, []);


    return (
        <div>
            <button type="button" onClick={handleOpen}>
                <EditIcon />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="simple-modal">
                    <ul>
                        <li>
                            <div className="label">{t("Full name")}</div>
                            <div className="inform">{item.fullName}</div>
                        </li>
                        <li>
                            <div className="label">{t("Position")}</div>
                            <div className="inform">{item.position.title.ru}</div>
                        </li>
                        <li>
                            <div className="label">{t("Course")}</div>
                            <div className="inform">{item.course}</div>
                        </li>
                        <li>
                            <div className="label">{t("Department")}</div>
                            <div className="inform">{item.section.title.ru}</div>
                        </li>
                        <li>
                            <div className="label">{t("Phone number")}</div>
                            <div className="inform">{item.phoneNumber}</div>
                        </li>
                        <li>
                            <div className="label">{t("Email")}</div>
                            <div className="inform">{item.email}</div>
                        </li>
                        <li>
                            <div className="label">{t("Role")}</div>
                            <select onChange={handleRol} className="inform">
                                <option value={item.roles[0].name}>{item.roles[0].name}</option>
                                {roles && roles.map((rol) =>
                                    <option key={rol.id
                                    } value={rol.name}>{rol.name}</option>
                                )}
                            </select>
                        </li>
                    </ul>
                    <button className="change-btn" onClick={changeUpdate}>{t("Edit")}</button>
                </div>
            </Modal>
        </div>
    );
}
export default withTranslation()(SimpleModal)
