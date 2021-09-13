import React, {useEffect, useState} from "react";
import ModeratorListnearItem from "./ModeratorListnearItem";
import {STORAGE_NAME} from "../../utils/constant";
import axios from "axios";

const ModeratorListnearSection = (props) => {

    const [listeners,setListeners]=useState([]);
    const [info,setInfo]=useState([]);

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

        axios({
            method: 'get',
            url: 'http://67.205.182.147:9090/api/application/info/listener',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res);
            setInfo(res.data)
        })
    },[props])
    return (
        <div className="moderator-listnear-section">
            {
                listeners&&listeners.map((item,i)=>
                    <ModeratorListnearItem key={i} item={item} info={info}/>
                    )
            }
        </div>
    );
}

export default ModeratorListnearSection;
