import React, {useEffect, useState} from "react";
import ModeratorListnearReytingItem from "./ModeratorListnearReytingItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const ModeratorListnearReytingSection = () => {
    let token=localStorage.getItem(STORAGE_NAME);
    const [stars,setStars]=useState([]);
    useEffect(()=>{
        axios({
            method:'get',
            url:API_URL+'/auth/listener/rating',
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r)
            setStars(r.data)
        });

    },[]);
    return (
        <div className="moderator-listnear-reyting-section">
            {
                stars&&stars.map((item,i)=>
                    <ModeratorListnearReytingItem key={i} item={item} />
                )
            }
        </div>
    );
}

export default ModeratorListnearReytingSection;
