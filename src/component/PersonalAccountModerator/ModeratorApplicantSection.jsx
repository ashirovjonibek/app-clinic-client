import React, {useEffect, useState} from "react";
import ModeratorApplicantItem from "./ModeratorApplicantItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";

const ModeratorApplicantSection = (props) => {
    const [applicants, setApplicants] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const config = {
            method: 'get',
            url: API_URL + '/auth/applicants',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setApplicants(response.data.object)
                // console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        axios({
            method: 'get',
            url: API_URL + '/application/info/applicant',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            // console.log(res)
            setInfo(res.data.object)
        })
    }, [props]);
    return (
        <div className="moderator-applicant-section">
            {
                applicants.length > 0 ? applicants.map((item, i) =>
                        <ModeratorApplicantItem key={i} item={item} info={info}/>) :
                    <div style={{marginTop: "35px", textAlign: "center"}}>Ma'lumot topilmadi</div>
            }
        </div>
    );
}

export default ModeratorApplicantSection;
