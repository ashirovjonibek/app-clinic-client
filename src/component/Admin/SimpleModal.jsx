import React, {useEffect, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import RequestFunctions from "../../requests/RequestFunctions";
import {STORAGE_NAME} from "../../utils/constant";

export default function SimpleModal({item, getListeners}) {
    const [open, setOpen] = useState(false);
    const [roles, setRoles] = useState([]);
    const select = item.roles[0].name;
    const [changeRolesItem, setChangeRolesItem] = useState(0);

    useEffect(() => {
        getRoles()
    }, []);

    const getRoles = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: 'http://67.205.182.147:9090/api/auth/roles',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };
        axios(config)
            .then(function (response) {
                setRoles(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        // RequestFunctions.getRoles()
        //     .then(res => {
        //             if (res.message && res.message === "Access is denied") {
        //                 console.log("access")
        //                 // window.location.reload();
        //                 localStorage.getItem(STORAGE_NAME)
        //             } else {
        //                 console.log("OK")
        //                 setRoles(res)
        //                 console.log(res)
        //             }
        //         }
        //     ).catch(error =>
        //     console.log(error))
    }

    const changeUpdate = () => {
        RequestFunctions.updateListenerByRole(changeRolesItem, item.id)
        handleClose();
        getListeners();
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        getListeners();
        setOpen(false);
    };


    const handleRol = (e) => {
        let rolesItemObj;
        if (e.target.value !== select) {
            rolesItemObj = roles.filter(el => el.name.includes(e.target.value));
            return setChangeRolesItem(rolesItemObj[0].id);
        }
    }

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                <EditIcon/>
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
                            <div className="label">Ф.И.О</div>
                            <div className="inform">{item.fullName}</div>
                        </li>
                        <li>
                            <div className="label">Должность</div>
                            <div className="inform">{item.position.title.ru}</div>
                        </li>
                        <li>
                            <div className="label">Курс</div>
                            <div className="inform">{item.course}</div>
                        </li>
                        <li>
                            <div className="label">Кафедра</div>
                            <div className="inform">{item.section.title.ru}</div>
                        </li>
                        <li>
                            <div className="label">Телефон</div>
                            <div className="inform">{item.phoneNumber}</div>
                        </li>
                        <li>
                            <div className="label">Почта</div>
                            <div className="inform">{item.email}</div>
                        </li>
                        <li>
                            <div className="label">Рол</div>
                            <select onChange={handleRol} className="inform">
                                <option value={item.roles[0].name}>{item.roles[0].name}</option>
                                {roles && roles.map(rol =>
                                    <option key={rol.id}
                                            value={rol.name}>{rol.name}
                                    </option>
                                )}
                            </select>
                        </li>
                    </ul>
                    <button className="change-btn" onClick={changeUpdate}>Изменить</button>
                </div>
            </Modal>
        </div>
    );
}