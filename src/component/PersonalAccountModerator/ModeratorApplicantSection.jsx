import React, {useEffect, useState} from "react";
import ModeratorApplicantItem from "./ModeratorApplicantItem";
import {STORAGE_NAME} from "../../utils/constant";
import axios from "axios";

const ModeratorApplicantSection = (props) => {
    const [applicants,setApplicants]=useState([]);

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
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },[props]);
    return (
        <div className="moderator-applicant-section">
            {
                applicants&&applicants.map((item,i)=>
                    <ModeratorApplicantItem key={i} item={item}/>)
            }
        </div>
    );
}

export default ModeratorApplicantSection;
