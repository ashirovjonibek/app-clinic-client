import React, {useEffect, useState} from "react";
import ModeratorHeadsDepartmentItem from "./ModeratorHeadsDepartmentItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {toast} from "react-toastify";
import {withTranslation} from "react-i18next";

const ModeratorHeadsDepartmentSection = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/auth/bosses',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setItems(response.data);
                // console.log(response.data)
            })
            .catch(()=> {
                toast.error("Xatolik yuz berdi!!!")
            });

    }, []);

    const getListeners = () => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/auth/bosses',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };
        axios(config)
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                // console.log(error);
                toast.error("Xatolik yuz berdi")
            });
    };

    return (
        <div className="moderator-heads-department-section">
            {/*<div className="listnears-section-top">*/}
            {/*    <div className="send-list">*/}
            {/*        {t("Send the list to the system administrator")}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {
                items && items.map((item, i) =>
                    <ModeratorHeadsDepartmentItem key={i} refresh={getListeners} item={item}/>
                )
            }
        </div>
    );
}

export default withTranslation()(ModeratorHeadsDepartmentSection);
