import React, {useEffect, useState} from "react";
import SupervisorResponsesRequestItem from "./SupervisorResponsesRequestItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {CustomPagination} from "../catalog/Pagenation";


const SupervisorResponsesSection = () => {
    let token =localStorage.getItem(STORAGE_NAME);
    const [total,setTotal]=useState(0);
    const [active,setActive]=useState(1);
    const [size,setSize]=useState(3);
    const [answers,setAnswers]=useState([]);
    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/document/boss/answers?size="+size+"&page="+(active-1),
            method: 'GET'
        }).then(res => {
            console.log(res);
           if (res.status===200){
               setAnswers(res?.data?.object);
               setTotal(res?.data?.totalPages)
           }else {

           }
        })
    }, [active,size]);

    const refresh=()=>{
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/document/boss/answers?size="+size+"&page="+(active-1),
            method: 'GET'
        }).then(res => {
            console.log(res);
            if (res.status===200){
                setAnswers(res?.data?.object);
                setTotal(res?.data?.totalPages)
            }else {

            }
        })
    };
    return (
        <div className="supervisor-response-section">
            {
                answers&&answers.map((item,i)=>
                    <SupervisorResponsesRequestItem refresh={refresh} key={i} item={item} />)
            }

            <div style={{clear: "both"}}/>
            {answers.length>0?<div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                <CustomPagination
                    pageLength={total}
                    setActive={setActive}
                    active={active}
                    size={size}
                    setSize={setSize}
                />
            </div>:<div style={{textAlign:"center",marginTop:"25px"}}>Arizalar mavjud emas!!!</div>}
        </div>
    );
}

export default SupervisorResponsesSection;
