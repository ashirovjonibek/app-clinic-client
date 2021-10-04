import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_URL, STORAGE_NAME} from '../../utils/constant';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import DeleteIcon from "@material-ui/icons/Delete";
import i18next from "i18next";

function AppealModal({item, t, getApplicants}) {
    const [open, setOpen] = useState(false);
    const [socialStatus, setSocialStatus] = useState([]);
    const [nations, setNations] = useState([]);
    const i18 = i18next.language
    const [nameDirty, setNameDirty] = useState(false);
    const [errorName, setErrorName] = useState('Ism yozilishi kerak!');
    const [yearDirty, setYearDirty] = useState(false);
    const [errorYear, setErrorYear] = useState('foydalanuvchi 16 yoshdan katta bo\'lishi kerak!');
    const [numberDirty, setNumberDirty] = useState(false);
    const [errorNumber, setErrorNumber] = useState('telefon raqamingizni kiriting!');
    const [emailDirty, setEmailDirty] = useState(false);
    const [errorEmail, setErrorEmail] = useState('elektron pochtangizda @ bo\'lishi kerak');

    const [user, setUser] = React.useState({
        id: item.id,
        fullName: item.fullName,
        nationId: item.nation.id,
        gender: item.gender,
        birthDate: item.birthDate,
        districtId: item.districtId,
        address: item.address,
        email: item.email,
        phoneNumber: item.phoneNumber,
        socialStatusId: item.socialStatus.id,
        password: item.phoneNumber
    })
    useEffect(() => {
    })
    const changeUpdate = (e) => {
        e.preventDefault();
        RequestFunctions.updateApplicant(user.id, user)
            .then(res => {
                    console.log(res)
                }
            ).catch(error => {
            console.log(error)
        })
        handleClose()
    }

    const deleteMethod = () => {
        RequestFunctions.deleteUser(user.id)
            .then(res =>
                    console.log(res)
            ).catch(error => {
            console.log(error)
        })
        console.log(user)
        handleClose()
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        getApplicants()
    };

    useEffect(() => {
        // const token = localStorage.getItem(STORAGE_NAME);
        axios.get(API_URL + "/socialStatus").then(res => {
            setSocialStatus(res.data._embedded.socialStatuses)
        })
        axios.get(API_URL + "/nation").then(res => {
            setNations(res.data._embedded.nations)
        })
    }, []);

    const handleChange = (e) => {
        let value = e.target.value;

        setUser({
            ...user,
            [e.target.name]: value
        });
    };

    const nameHandler = (e) => {
        const name = e.target.name;
        const regName = /^[a-zA-Z\s]+$/;
        if (!regName.test(String(e.target.value).toLowerCase()) && name === 'fullName') {
            setNameDirty(true);
            setErrorName('Ism faqat harflardan iborat bo\'lsin');
            setUser({
                ...user,
                fullName: ""
            });
        } else {
            setErrorName('');
        }
    }

    const yearHandler = (e) => {
        const name = e.target.name;
        const fullYear = new Date().getFullYear();
        const userYear = e.target.value.slice(0, 4);
        if ((fullYear - userYear) < 16 && name === 'birthDate') {
            setYearDirty(true);
            setErrorYear('foydalanuvchi 16 yoshdan katta bo\'lishi kerak');
            setUser({
                ...user,
                birthDate: ""
            });
        } else {
            setErrorYear('');
        }
    }

    const numberHandler = (e) => {
        const name = e.target.name;
        const regNumber = /^\d+/;
        if (!regNumber.test(String(e.target.value).toLowerCase()) && name === 'phoneNumber') {
            setNumberDirty(true);
            setErrorNumber('faqat raqam kiriting!');
            setUser({
                ...user,
                fullName: ""
            });
        } else {
            setErrorNumber('');
        }
    }

    const emailHandler = (e) => {
        const name = e.target.name;
        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(String(e.target.value).toLowerCase()) && name === 'email') {
            setEmailDirty(true);
            setErrorEmail('elektron po\'chtangizda abs@abs.com bo\'lishi kerak!');
            setUser({
                ...user,
                fullName: ""
            });
        } else {
            setErrorEmail('');
        }
    }
    return (
        <div className="appealModal">
            <button type="button" className="editIcon" onClick={handleOpen}>
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
                    <form onSubmit={changeUpdate}>
                        <ul>
                            <li>
                                <label className="label" htmlFor="">{t("Full name")}</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="fullName"
                                    className="input-text"
                                    type="text"
                                    value={user.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}

                            <li>
                                <label className="label" htmlFor="">{t("Email")}</label>
                                <input
                                    onBlur={e => emailHandler(e)}
                                    name="email"
                                    className="input-text"
                                    type="text"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </li>
                            {(emailDirty && errorEmail) && <p className="error">{errorEmail}</p>}

                            <li>
                                <label className="label" htmlFor="">{t("Phone number")}</label>
                                <input
                                    onBlur={e => numberHandler(e)}
                                    className="input-text"
                                    name="phoneNumber"
                                    type="text"
                                    value={user.phoneNumber}
                                    onChange={handleChange}
                                    required/>
                            </li>
                            {(numberDirty && errorNumber) && <p className="error">{errorNumber}</p>}
                            <li>
                                <label className="label" htmlFor="">{t("Address")}</label>
                                <input className="input-text"
                                       type="text"
                                       name="address"
                                       value={user.address}
                                       onChange={handleChange}
                                       required/>
                            </li>
                            <li>
                                <label className="label" htmlFor="gender">{t("Gender")}</label>
                                <select id="gender" onChange={handleChange} name="gender"
                                        className="category" required>
                                    <option value="erkak">Erkak</option>
                                    <option value="ayol">Ayol</option>
                                </select>
                            </li>
                            <li>
                                <label className="label" htmlFor="nationId">{t("Nation")}</label>
                                <select id="nationId" name="nationId" onChange={handleChange}
                                        className="category">
                                    <option value="">{item.nation.name[i18]}</option>
                                    {nations && nations.map((item, i) =>
                                        <option key={i} value={item.id}>{item.name[i18]}</option>
                                    )}
                                </select>
                            </li>
                            <li>
                                <label className="label" htmlFor="socialStatusId">{t("Social Status")}</label>
                                <select id="socialStatusId" name="socialStatusId" onChange={handleChange}
                                        className="category">
                                    <option value="">{item.nation.name[i18]}</option>
                                    {socialStatus && socialStatus.map((item, i) =>
                                        <option key={i} value={item.id}>{item.name[i18]}</option>
                                    )}
                                </select>
                            </li>
                            <li>
                                <label className="label" htmlFor="birthDate">{t("Date")}</label>
                                <input
                                    className="input-date"
                                    onBlur={e => yearHandler(e)}
                                    onChange={handleChange}
                                    name="birthDate"
                                    id="birthDate"
                                    type="date"
                                    value={user.birthDate.slice(0, 10)}
                                />
                            </li>
                            {(yearDirty && errorYear) && <p className="error">{errorYear}</p>}
                        </ul>
                        <button type="submit" className="change-btn">{t("Edit")}</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default withTranslation()(AppealModal)
