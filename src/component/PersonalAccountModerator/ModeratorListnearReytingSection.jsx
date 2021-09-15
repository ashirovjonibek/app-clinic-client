import React, {useEffect} from "react";
import ModeratorListnearReytingItem from "./ModeratorListnearReytingItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const ModeratorListnearReytingSection = () => {
    let token=localStorage.getItem(STORAGE_NAME);
    useEffect(()=>{
        axios({
            method:'get',
            url:API_URL+'/auth/listener/rating',
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r)
        });

    },[]);
    return (
        <div className="moderator-listnear-reyting-section">
            <ModeratorListnearReytingItem />
        </div>
    );
}

export default ModeratorListnearReytingSection;
