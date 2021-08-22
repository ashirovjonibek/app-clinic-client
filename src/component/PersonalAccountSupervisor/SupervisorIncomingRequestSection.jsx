import React, {useEffect} from "react"
import SupervisorIncomingRequestItem from "./SupervisorIncomingRequestItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const SupervisorIncomingRequestSection = () => {

    const token = localStorage.getItem(STORAGE_NAME);

    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application",
            method: 'GET'
        }).then(res => {
            // setAppeal(res.data.object.object);
            console.log(res);
        })
        // axios.get(API_URL + "/application/myApplications").then(res => {
        //     setAppeal(res.data.object);
        //     console.log(res.data);
        // });
    }, []);
    return (
        <div className="supervisor-incoming-request-section">
            <SupervisorIncomingRequestItem />
        </div>
    );
}

export default SupervisorIncomingRequestSection;
