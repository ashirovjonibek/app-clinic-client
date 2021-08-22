import React, {useEffect, useState} from "react";
import PerAccAppPeriodItem from "./PerAccAppPeriodItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";


const PerAccAppPeriodSection = () => {
    const token = localStorage.getItem(STORAGE_NAME);
    const [appeal, setAppeal] = useState([]);
    useEffect(()=>{
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/applicant",
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object);
            console.log(res);
        })
    }, []);
    return (
        <div className="per-acc-app-period-section">
            {
                appeal&&appeal.map((item)=>
                    <PerAccAppPeriodItem item={item}/>
                )
            }
        </div>
    );
}

export default PerAccAppPeriodSection;
