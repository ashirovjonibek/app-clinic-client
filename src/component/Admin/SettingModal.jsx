import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import {withTranslation} from "react-i18next";
import AddIcon from "@material-ui/icons/Add";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import Dialog from "@material-ui/core/Dialog";

function SettingModal({t, getSections}) {
    const [open, setOpen] = useState(false);
    // const i18 = i18next.language
    const [nameDirty] = useState(false);
    const [errorName] = useState('kafedra yozilishi kerak!');

    const [section, setSection] = React.useState({
        // id: '',
        title: {
            ru: '',
            uz: '',
            en: '',
            uzCyr: ''
        },
        description: {
            ru: '',
            uz: '',
            en: '',
            uzCyr:''
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const axios = require('axios');
        const config = {
            method: 'post',
            url: API_URL + '/section',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            },
            data: section
        };
        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    Swal.fire(t("Department created") + "", "", "success").then((r) => {
                        getSections()
                    })
                } else {
                    Swal.fire(t("An error occurred") + "!!!", "", "error").then((r) => {
                        getSections()
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        handleClose()
    }

    const handleClear = () => {
        setSection({
            ...section,
            title: {
                ru: '',
                uz: '',
                en: '',
                uzCyr:''
            },
            description: {
                ru: '',
                uz: '',
                en: '',
                uzCyr:''
            }
        })
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        handleClear()
        getSections()
    };

    const handleChangeTitle = (e) => {
        setSection({
            ...section,
            title: {
                ...section.title,
                [e.target.name]: e.target.value
            }
        });
    };
    const handleChangeDesc = (e) => {
        setSection({
            ...section,
            description: {
                ...section.description,
                [e.target.name]: e.target.value
            }
        });
    };

    const nameHandler = () => {
        // const name = e.target.name;
        // const regName = /^[a-zA-Z\s]+$/;
        // if (!regName.test(String(e.target.value).toLowerCase()) && name === 'fullName') {
        //     setNameDirty(true);
        //     setErrorName('kiritilgam so`z faqat harflardan iborat bo\'lsin');
        //     setSection({
        //         ...section,
        //         title:{
        //          ...section.title
        //         }
        //     });
        // } else {
        //     setErrorName('');
        // }
    }

    return (
        <div className="appealModal ">
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: '10px 0',
                fontWeight: '500'
            }}>
                <AddIcon onClick={handleOpen} fontSize='large' style={{
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25',
                    borderRadius: '50%',
                    marginRight: '10px',
                    cursor: 'pointer'
                }}/>
                {t("Add department")}
            </div>
            <Dialog
                open={open}
                maxWidth={'lg'}
                onClose={handleClose}
            >
                <div style={{height:70+"vh"}} className="simple-modal simple-modal-setting pb-2">
                    <h3>{t("Add department")}</h3>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li>
                                {/*<label className="label" htmlFor="">{t("title ru")}</label>*/}
                                <label className="label" htmlFor="">Кафедара</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="ru"
                                    className="input-text"
                                    type="text"
                                    value={section.title["ru"]}
                                    onChange={handleChangeTitle}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}
                            <li>
                                {/*<label className="label" htmlFor="">{t("description ru")}</label>*/}
                                <label className="label" htmlFor="">описание</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="ru"
                                    className="input-text"
                                    type="text"
                                    value={section.description["ru"]}
                                    onChange={handleChangeDesc}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}


                            <li>
                                {/*<label className="label" htmlFor="">{t("title uz")}</label>*/}
                                <label className="label" htmlFor="">Bo'lim</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="uz"
                                    className="input-text"
                                    type="text"
                                    value={section.title["uz"]}
                                    onChange={handleChangeTitle}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}

                            <li>
                                {/*<label className="label" htmlFor="">{t("description uz")}</label>*/}
                                <label className="label" htmlFor="">Tavsif</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="uz"
                                    className="input-text"
                                    type="text"
                                    value={section.description["uz"]}
                                    onChange={handleChangeDesc}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}
<li>
                                {/*<label className="label" htmlFor="">{t("title uz")}</label>*/}
                                <label className="label" htmlFor="">Бўлим</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="uz"
                                    className="input-text"
                                    type="text"
                                    value={section.title["uzCyr"]}
                                    onChange={handleChangeTitle}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}

                            <li>
                                {/*<label className="label" htmlFor="">{t("description uz")}</label>*/}
                                <label className="label" htmlFor="">Тавсиф</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="uz"
                                    className="input-text"
                                    type="text"
                                    value={section.description["uzCyr"]}
                                    onChange={handleChangeDesc}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}

                            <li>
                                <label className="label" htmlFor="">Department</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="en"
                                    className="input-text"
                                    type="text"
                                    value={section.title["en"]}
                                    onChange={handleChangeTitle}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}
                            <li>
                                {/*<label className="label" htmlFor="">{t("description en")}</label>*/}
                                <label className="label" htmlFor="">description</label>
                                <input
                                    onBlur={e => nameHandler(e)}
                                    name="en"
                                    className="input-text"
                                    type="text"
                                    value={section.description["en"]}
                                    onChange={handleChangeDesc}
                                    required
                                />
                            </li>
                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}

                        </ul>
                        <button type="submit" className="change-btn mb-2">{t("Save")}</button>
                    </form>
                </div>
            </Dialog>
        </div>
    );
}

export default withTranslation()(SettingModal)
