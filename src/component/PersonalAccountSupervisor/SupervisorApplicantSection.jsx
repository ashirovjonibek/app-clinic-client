import React, {useEffect, useState} from "react";
import SupervisorApplicantItem from "./SupervisorApplicantItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";

const SupervisorApplicantSection = () => {
    const [applications,setApplicants]=useState([]);
    useEffect(()=>{
        const config = {
            method: 'get',
            url: API_URL +'/auth/applicants',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setApplicants(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);
    return (
        <div className="supervisor-applicant-section">
            {
                applications&&applications.map((item,i)=>
                    <SupervisorApplicantItem key={i} item={item} />
                )
            }
        </div>
    );
}

export default SupervisorApplicantSection;
