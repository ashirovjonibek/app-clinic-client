import React, {useEffect, useState} from "react";
import UserItem from "../UserItem";
import Stars from "../Stars";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const SupervisorReytingListnear = () => {
    const token=localStorage.getItem(STORAGE_NAME);
    const [items,setItems]=useState([]);

    useEffect(()=>{
        axios({
            url:API_URL+"/auth/listener/rating",
            headers:{
                Authorization:token,
            },
            method:'get'
        }).then((r)=>{
            console.log(r.data)
            setItems(r.data)
        })
    },[]);

    return (
        <div className="supervisor-reyting-listnear-section">
            {
                items&&items?.map((item,i)=>
                    <div key={i} className="supervisor-reyting-listnear-item">
                        <div className="content">
                            <div className="fedbeck">
                                <UserItem p={item}/>
                                <div className="reyting-stars" >
                                    <div style={{ marginRight: '10px' }}>Рейтинг:</div>
                                    <Stars stars={item?.stars}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default SupervisorReytingListnear;
