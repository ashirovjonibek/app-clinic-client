import React, {useEffect, useState} from "react"
import SupervisorIncomingRequestItem from "./SupervisorIncomingRequestItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const SupervisorIncomingRequestSection = () => {

    const token = localStorage.getItem(STORAGE_NAME);

    const [listeners,setListeners]=useState([]);
    const [info,setInfo]=useState([]);

    useEffect(()=>{
        axios({
            method:'get',
            url:API_URL+"/auth/me",
            headers:{
                Authorization:token
            }
        }).then((me)=>{
            console.log(me)
            axios({
                method: 'get',
                url: 'http://67.205.182.147:9090/api/auth/listeners',   //listenerBySection?sectionId=',
                headers: {
                    'Authorization': localStorage.getItem(STORAGE_NAME)
                }
            }).then(function (response) {
                setListeners(response.data)
                console.log(response.data)
            })
                .catch(function (error) {
                    console.log(error);
                });

            axios({
                method: 'get',
                url: 'http://67.205.182.147:9090/api/application/info/listener',
                headers: {
                    'Authorization': localStorage.getItem(STORAGE_NAME),
                    'Content-Type': 'application/json'
                }
            }).then((res)=>{
                console.log(res);
                setInfo(res.data)
            })
        })
    },[])
    return (
        <div className="supervisor-incoming-request-section">
            {
                info&&info.map((item,i)=>
                    <SupervisorIncomingRequestItem key={i} info={item} />
                )
            }
        </div>
    );
};

export default SupervisorIncomingRequestSection;
