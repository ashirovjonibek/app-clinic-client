import React, {useEffect, useState} from "react";
import SortDate from "../SortDate";

import PerAccSupListenersItem from "./PerAccSupListenersItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import {withTranslation} from "react-i18next";

const PerAccSupListenersSection = ({t}) => {
    const [listeners,setListeners]=useState();
    let token=localStorage.getItem(STORAGE_NAME);
    useEffect(()=>{
        const config = {
            method: 'get',
            url: API_URL+'/auth/listeners',
            headers: {
                'Authorization': token
            }
        };
        axios(config)
            .then(function (response) {
                setListeners(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);

    const refresh=()=>{
        const config = {
            method: 'get',
            url: API_URL +'/auth/listeners',
            headers: {
                'Authorization': token
            }
        };
        axios(config)
            .then(function (response) {
                setListeners(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="peraccsup-listeners-section">
            <div className="listnears-section-top">
                <div className="list-generation">
                    {t("Generate link")}
                </div>

                <SortDate />
            </div>
            {
                listeners&&listeners.map((item,i)=>
                    <PerAccSupListenersItem key={i} refresh={refresh} item={item} />
                )
            }
        </div>
    );
}

export default withTranslation() (PerAccSupListenersSection);
