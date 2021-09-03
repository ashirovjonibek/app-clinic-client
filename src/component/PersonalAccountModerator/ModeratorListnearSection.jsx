import React, {useEffect, useState} from "react";
import ModeratorListnearItem from "./ModeratorListnearItem";
import {STORAGE_NAME} from "../../utils/constant";
import axios from "axios";

const ModeratorListnearSection = (props) => {

    const [listeners,setListeners]=useState([]);

    useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://67.205.182.147:9090/api/auth/listeners',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
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
    },[props])
    return (
        <div className="moderator-listnear-section">
            {
                listeners&&listeners.map((item,i)=>
                    <ModeratorListnearItem key={i} item={item}/>
                    )
            }
        </div>
    );
}

export default ModeratorListnearSection;
