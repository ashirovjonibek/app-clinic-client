import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, STORAGE_NAME } from '../../utils/constant';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';

export default function SimpleModal({ item }) {
    const [open, setOpen] = useState(false);
    const [roles, setRoles] = useState([]);
    const [select, setSelect] = useState(item.roles[0].name);
    const [handleSelect, setHandleSelect] = useState('');
    
    let changeRolesItem 

    const changeRoles = () => {
        if (handleSelect !== select) {
            return changeRolesItem = roles.filter(item => item.name.includes(handleSelect));
        }
        return false;
    }
    changeRoles();
    // console.log(changeRoles());
    // console.log(item.id)

    const changeUpdate = () => {
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/auth/createListener",
            method: 'POST',
            data:{
                id: item.id,
                roles: changeRolesItem,
            }
        })
    }
    console.log(changeUpdate);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRol = (e) => {
        setHandleSelect(
            e.target.value
        );
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
                                {roles && roles.map((rol) =>
                                    <option key={rol.id
                                    } value={rol.name}>{rol.name}</option>
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