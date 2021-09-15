import React from "react";
import UserItem from "../UserItem";
import UserName from "../UserName";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const SupervisorFeedbakRequestItem = () => {
    let token=localStorage.getItem(STORAGE_NAME);
    axios({
        method:'get',
        url:API_URL+'/document/answer/feedback',
        headers:{
            Authorization:token
        }
    }).then((res)=>{
        console.log(res)
    });
    return (
        <div className="supervisor-feedbak-request-item" style={{marginBottom: '15px'}}>
            <div className="content">
                <UserItem />
                <div className="content-line" />
                <div className='avatar'>
                    <UserName text="Aliyev Valijon" />
                    <button className="green-btn">Удовлетворительно</button>
                </div>
            </div>
        </div>
    );
}

export default SupervisorFeedbakRequestItem;
