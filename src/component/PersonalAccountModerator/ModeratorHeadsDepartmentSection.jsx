import React, {useEffect, useState} from "react";
import ModeratorHeadsDepartmentItem from "./ModeratorHeadsDepartmentItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {toast} from "react-toastify";
import {withTranslation} from "react-i18next";

const ModeratorHeadsDepartmentSection = ({t}) => {
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
            .catch(() => {
                toast.error(t("An error occurred")+"!!!")
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
                toast.error(t("An error occurred")+"!!!")
            });
    };

    return (
        <div className="moderator-heads-department-section">
            {
                items.length>0 ? items.map((item, i) =>
                    <ModeratorHeadsDepartmentItem key={i} refresh={getListeners} item={item}/>
                ):
                    <div style={{marginTop:"35px",textAlign:"center"}}>Ma'lumot topilmadi</div>
            }
        </div>
    );
}

export default withTranslation()(ModeratorHeadsDepartmentSection);
