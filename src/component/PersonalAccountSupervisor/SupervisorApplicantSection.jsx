import React, {useEffect, useState} from "react";
import SupervisorApplicantItem from "./SupervisorApplicantItem";
import {STORAGE_NAME} from "../../utils/constant";
import axios from "axios";

const SupervisorApplicantSection = () => {
    const [applications,setApplicants]=useState([]);
    useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://67.205.182.147:9090/api/auth/applicants',
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
