import React, {useEffect, useState} from "react";
import SortDate from "../SortDate";

import PerAccSupListenersItem from "./PerAccSupListenersItem";
import {STORAGE_NAME} from "../../utils/constant";
import axios from "axios";

const PerAccSupListenersSection = () => {
    const [listeners,setListeners]=useState();
    let token=localStorage.getItem(STORAGE_NAME);
    useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://67.205.182.147:9090/api/auth/listeners',
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
    return (
        <div className="peraccsup-listeners-section">
            <div className="listnears-section-top">
                <div className="list-generation">
                    Сгенерировать ссылку
                </div>
                <div className="send-list">
                    Отправить список <br />администратору системы
                </div>
                <SortDate />
            </div>
            {
                listeners&&listeners.map((item)=>
                    <PerAccSupListenersItem />
                )
            }
        </div>
    );
}

export default PerAccSupListenersSection;
