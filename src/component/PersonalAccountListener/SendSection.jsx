import React, {useEffect, useState} from "react";
import CenterSends from "./CenterSends";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const SendSection = () => {

    const [chats,setChats]=useState([]);

    useEffect(()=>{
        axios({
            method:'get',
            url:API_URL+'/message',
            headers:{
                Authorization:localStorage.getItem(STORAGE_NAME)
            }
        }).then((res)=>{
            console.log(res)
            setChats(res?.data?.object);
        })
    },[]);
    return (
        <div className="send-section">
            {
                chats&&chats.map((item,i)=>
                    <CenterSends key={i} chat={item}/>
                )
            }
        </div>
    );
}

export default SendSection;
