import React, {useEffect, useState} from "react";
import CenterSends from "./CenterSends";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const SendSection = (props) => {

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
                chats.length>0?chats&&chats.map((item,i)=>
                    <CenterSends refreshCount={props?.refreshCount} setRefreshCount={props?.setRefreshCount} key={i} chat={item}/>
                ):
                    <div style={{textAlign:"center",marginTop:"25px"}}>
                        Chatlar mavjud emas!!!
                    </div>
            }
        </div>
    );
}

export default SendSection;
