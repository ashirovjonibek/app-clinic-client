import React, {useEffect, useState} from "react";
import ModeratorApplicantItem from "./ModeratorApplicantItem";
import {STORAGE_NAME} from "../../utils/constant";
import axios from "axios";

const ModeratorApplicantSection = (props) => {
    const [applicants,setApplicants]=useState([]);
    const [info,setInfo]=useState([]);

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
        axios({
            method: 'get',
            url: 'http://67.205.182.147:9090/api/application/info/applicant',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res)
            setInfo(res.data)
        })
    },[props]);
    return (
        <div className="moderator-applicant-section">
            {
                applicants&&applicants.map((item,i)=>
                    <ModeratorApplicantItem key={i} item={item} info={info}/>)
            }
        </div>
    );
}

export default ModeratorApplicantSection;
