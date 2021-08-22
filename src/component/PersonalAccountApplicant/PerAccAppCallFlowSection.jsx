import React, {useEffect, useState} from "react";
import PerAccAppCallFlowItem from "./PerAccAppCallFlowItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const PerAccAppCallFlowSection = () => {
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
        <div className="per-acc-app-call-flow-item">
            {
                appeal&&appeal.map((item)=>
                    <PerAccAppCallFlowItem appeal={item}/>
                )
            }
        </div>
    );
}

export default PerAccAppCallFlowSection;
