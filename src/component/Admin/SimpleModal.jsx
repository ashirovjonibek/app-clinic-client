import React, {useEffect, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import RequestFunctions from "../../requests/RequestFunctions";
import DeleteIcon from "@material-ui/icons/Delete";

export default function SimpleModal({item, getListeners}) {
    const [open, setOpen] = useState(false);
    const [roles, setRoles] = useState([]);
    const [select, setSelect] = useState(item.roles[0].name);
    const [changeRolesItem, setChangeRolesItem] = useState(0);

    useEffect(() => {
        getRoles()
    }, []);

    const getRoles = () => {
        RequestFunctions.getRoles()
            .then(res => {
                    setRoles(res)
                }
            ).catch(error =>
            console.log(error))
    }

    const changeUpdate = () => {
        RequestFunctions.updateListenerByRole(changeRolesItem, item.id)
        handleClose()
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        getListeners()
        setOpen(false);
    };

    const deleteMethod = () => {
        RequestFunctions.deleteUser(item.id)
            .then(res =>
                console.log(res)
            ).catch(error => {
            console.log(error)
        })
        getListeners()
    }

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
            <button type="button" className="deleteIcon" onClick={deleteMethod}>
                <DeleteIcon/>
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