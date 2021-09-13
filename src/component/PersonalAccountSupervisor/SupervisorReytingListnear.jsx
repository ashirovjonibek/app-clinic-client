import React, {useEffect} from "react";
import UserItem from "../UserItem";
import Stars from "../Stars";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const SupervisorReytingListnear = () => {
    const token=localStorage.getItem(STORAGE_NAME);

    useEffect(()=>{
        axios({
            url:API_URL+"/auth/listener/rating",
            headers:{
                Authorization:token,
            },
            method:'get'
        }).then((r)=>{
            console.log(r)
        })
    },[]);

    return (
        <div className="supervisor-reyting-listnear-section">
            <div className="supervisor-reyting-listnear-item">
                <div className="content">
                    <div className="fedbeck">
                        <UserItem />
                        <div className="reyting-stars" >
                            <div style={{ marginRight: '10px' }}>Рейтинг:</div>
                            <Stars />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SupervisorReytingListnear;
