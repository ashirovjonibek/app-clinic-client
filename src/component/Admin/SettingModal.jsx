import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import {withTranslation} from "react-i18next";
import RequestFunctions from "../../requests/RequestFunctions";
import AddIcon from "@material-ui/icons/Add";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";

function SettingModal({t, getSections}) {
    const [open, setOpen] = useState(false);
    // const i18 = localStorage.getItem('I18N_LANGUAGE')
    const [nameDirty] = useState(false);
    const [errorName] = useState('kafedra yozilishi kerak!');

    const [section, setSection] = React.useState({
        // id: '',
        title: {
            ru: '',
            uz: '',
            en: '',
        },
        description: {
            ru: '',
            uz: '',
            en: '',
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const axios = require('axios');
        const config = {
            method: 'post',
            url: API_URL + '/section',
            headers: {
                'Authorization':localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            },
            data: section
        };
        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    Swal.fire("Kafedra yaratildi", "", "success").then((r) => {
                        getSections()
                    })
                } else {
                    Swal.fire("Xatolik yuz berdi!!!", "", "error").then((r) => {
                        getSections()
                    })
                }            })
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
            },
            description: {
                ru: '',
                uz: '',
                en: '',
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
                marginBottom: '20px',
                fontWeight: '500'
            }}>
                <AddIcon onClick={handleOpen} fontSize='large' style={{
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25',
                    borderRadius: '50%',
                    marginRight: '10px',
                    cursor:'pointer'
                }}/>
                {t("Add department")}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="simple-modal simple-modal-setting">
                    <h3 >Add department</h3>
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
                                <label className="label" htmlFor="">tavsif</label>
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
                        <button type="submit" className="change-btn">{t("Save")}</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default withTranslation()(SettingModal)
