import React, {useEffect, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import RequestFunctions from "../../requests/RequestFunctions";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import {withTranslation} from "react-i18next";

function SimpleModal({t, item, getListeners}) {
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
            url: API_URL + '/auth/roles',
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
        handleClose();
        Swal.fire({
            title: t("Save the change") + "?",
            showCancelButton: true,
            cancelButtonText: t("Cancel"),
            confirmButtonText: t("Save"),
            icon: "warning",

        }).then((conform) => {
            if (conform.isConfirmed) {
                RequestFunctions.updateListenerByRole(changeRolesItem, item.id).then((r) => {
                    if (r.status === 202) {
                        Swal.fire(t("Saved") + "!!!", "", "success").then((r) => {
                            getListeners();
                        })
                    } else {
                        Swal.fire(t("An error occurred") + "!!!", "", "error").then((r) => {
                            handleOpen()
                        })
                    }
                }).catch((err) => {
                    Swal.fire(t("An error occurred") + "!!!", "", "error").then((r) => {
                        handleOpen()
                    })
                });
            }
        })
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            getListeners();
        }, 1700)
    };


    const handleRol = (e) => {
        // let rolesItemObj;
        // if (e.target.value !== select) {
        //     rolesItemObj = roles.filter(el => el.name.includes(e.target.value));
        //     return setChangeRolesItem(rolesItemObj[0].id);
        // }
        console.log(e.target.value);
        setChangeRolesItem(e.target.value)
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
                            <select defaultValue={item.roles[0].id} onChange={handleRol} className="inform">
                                {/*<option value={item.roles[0].name}>{item.roles[0].name}</option>*/}
                                {roles && roles.map(rol =>
                                    <option key={rol.id}
                                            value={rol.id}>{rol.name}
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

export default withTranslation()(SimpleModal);