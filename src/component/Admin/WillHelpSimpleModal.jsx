import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_URL, STORAGE_NAME} from '../../utils/constant';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";

function SimpleModal({item, t}) {
    const [nameDirty, setNameDirty] = useState(false);
    const [errorName, setErrorName] = useState('Ism yozilishi kerak!');
    const [yearDirty, setYearDirty] = useState(false);
    const [errorYear, setErrorYear] = useState('foydalanuvchi 16 yoshdan katta bo\'lishi kerak!');
    const [numberDirty, setNumberDirty] = useState(false);
    const [errorNumber, setErrorNumber] = useState('telefon raqamingizni kiriting!');
    const [emailDirty, setEmailDirty] = useState(false);
    const [errorEmail, setErrorEmail] = useState('elektron pochtangizda @ bo\'lishi kerak');
    const [open, setOpen] = useState(false);
    const [roles, setRoles] = useState([]);
    const [select, setSelect] = useState(item.roles[0].name);
    const [changeRolesItem, setChangeRolesItem] = useState();
    const [sections, setSections] = useState([]);
    const [positions, setPositions] = useState([]);
    const i18 = localStorage.getItem('I18N_LANGUAGE')


    const [listener, setListener] = React.useState({
        id: item.id,
        fullName: item.fullName,
        positionId: item.position.id,
        course: item.course,
        sectionId: item.section.id,
        phoneNumber: item.phoneNumber,
        email: item.email,
        districtId: item.districtId,
        password: item.section.id,
        birthDate: item.section.id
        // id: "6f49cf61-3314-4cb3-a7cf-1e2e8ae6c681",
        // fullName: "BOSS",
        // positionId: 1,
        // course: 1,
        // sectionId: 1,
        // phoneNumber: "998888888888",
        // email: "string",
        // districtId: 1,
        // password: "998888888888",
        // birthDate: "1994-04-26T00:00:00.000+00:00"
    })

    const changeUpdate = () => {
        // RequestFunctions.updateUser(item.id,user)
        //     .then(res => {
        //             console.log(res)
        //         }
        //     ).catch(error => {
        //     console.log(error)
        // })

        RequestFunctions.updateListenerByRole(changeRolesItem, item.id)
        //     .then(res => console.log(res)
        //     ).catch(error => {
        //     console.log(error)
        // })
        handleClose()
    }
    const handleChange = (e) => {
        let value = e.target.value;

        setListener({
            ...listener,
            [e.target.name]: value
        });
    };
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
        axios.get(API_URL + '/position').then(res => {
            setPositions(res.data);
        })
        axios.get(API_URL + "/section").then(res => {
            setSections(res.data._embedded.sections);
        })
    }, []);

    const nameHandler = (e) => {
        const name = e.target.name;
        const regName = /^[a-zA-Z\s]+$/;
        if (!regName.test(String(e.target.value).toLowerCase()) && name === 'fullName') {
            setNameDirty(true);
            setErrorName('Ism faqat harflardan iborat bo\'lsin');
            setListener({
                ...listener,
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
            setListener({
                ...listener,
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
            setListener({
                ...listener,
                phoneNumber: ""
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
            setListener({
                ...listener,
                email: ""
            });
        } else {
            setErrorEmail('');
        }
    }
    return (
        <div
            className="appealModal">
            < button
                type="button"
                className="editIcon"
                onClick={handleOpen}>
                < EditIcon/>
            < /button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="simple-modal">
                    <form onSubmit={changeUpdate}>
                        <ul>
                            {/*<li>*/}
                            {/*    <label className="label" htmlFor="">{t("Full name")}</label>*/}
                            {/*    <input*/}
                            {/*        onBlur={e => nameHandler(e)}*/}
                            {/*        name="fullName"*/}
                            {/*        className="input-text"*/}
                            {/*        type="text"*/}
                            {/*        value={listener.fullName}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        required*/}
                            {/*    />*/}
                            {/*</li>*/}
                            {/*{(nameDirty && errorName) && <p className="error">{errorName}</p>}*/}
                            {/*<li>*/}
                            {/*    <label className="label" htmlFor="">{t("Email")}</label>*/}
                            {/*    <input*/}
                            {/*        onBlur={e => emailHandler(e)}*/}
                            {/*        name="email"*/}
                            {/*        className="input-text"*/}
                            {/*        type="text"*/}
                            {/*        value={listener.email}*/}
                            {/*        onChange={handleChange}*/}
                            {/*    />*/}
                            {/*</li>*/}
                            {/*{(emailDirty && errorEmail) && <p className="error">{errorEmail}</p>}*/}
                            {/*<li>*/}
                            {/*    <label className="label" htmlFor="">{t("Phone number")}</label>*/}
                            {/*    <input*/}
                            {/*        onBlur={e => numberHandler(e)}*/}
                            {/*        className="input-text"*/}
                            {/*        name="phoneNumber"*/}
                            {/*        type="text"*/}
                            {/*        value={listener.phoneNumber}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        required/>*/}
                            {/*</li>*/}
                            {/*{(numberDirty && errorNumber) && <p className="error">{errorNumber}</p>}*/}
                            {/*<li>*/}
                            {/*    <label className="label" htmlFor="positionId">{t("Position")}</label>*/}
                            {/*    <select id="positionId" name="positionId" onChange={handleChange}*/}
                            {/*            className="category" required>*/}
                            {/*        {positions && positions.map((item, i) =>*/}
                            {/*            <option key={i} value={item.id}>{item.title[i18]}</option>*/}
                            {/*        )}*/}
                            {/*    </select>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <label className="label" htmlFor="sectionId">{t("Department")}</label>*/}
                            {/*    <select id="sectionId" name="sectionId" onChange={handleChange}*/}
                            {/*            className="category">*/}
                            {/*        <option value="">{item.section.title[i18]}</option>*/}
                            {/*        {sections && sections.map((item, i) =>*/}
                            {/*            <option key={item.id} value={item.id}>{item.title[i18]}</option>*/}
                            {/*        )}*/}
                            {/*    </select>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <label className="label" htmlFor="course">{t("Course")}</label>*/}
                            {/*    <select id="course" name="course" onChange={handleChange}*/}
                            {/*            className="category">*/}
                            {/*        <option value="">{item.course}</option>*/}
                            {/*        <option value="1">1</option>*/}
                            {/*        <option value="2">2</option>*/}
                            {/*        <option value="3">3</option>*/}
                            {/*    </select>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*    <label className="label" htmlFor="birthDate">{t("Date")}</label>*/}
                            {/*    <input*/}
                            {/*        className="input-date"*/}
                            {/*        onBlur={e => yearHandler(e)}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        name="birthDate"*/}
                            {/*        id="birthDate"*/}
                            {/*        type="date"*/}
                            {/*        value={listener.birthDate.slice(0, 10)}*/}
                            {/*    />*/}
                            {/*</li>*/}
                            {/*{(yearDirty && errorYear) && <p className="error">{errorYear}</p>}*/}
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
                        <button type="submit" className="change-btn">{t("Edit")}</button>
                    </form>
                </div>
            </Modal>
        </div>

    );
}

export default withTranslation()(SimpleModal)
