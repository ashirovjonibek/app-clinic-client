import React, {useEffect, useState} from "react";
import ModeratorListnearItem from "./ModeratorListnearItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import ModeratorHeadsDepartmentItem from "./ModeratorHeadsDepartmentItem";

const ModeratorListnearSection = (props) => {

    const [listeners,setListeners]=useState([]);
    const [info,setInfo]=useState([]);

    useEffect(()=>{
        const config = {
            method: 'get',
            url: API_URL +'/auth/listeners',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };
        axios(config)
            .then(function (response) {
                setListeners(response.data.object)
                // console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

        axios({
            method: 'get',
            url: API_URL +'/application/info/listener',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME),
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            // console.log(res);
            setInfo(res.data.object)
        })
    },[props])
    return (
        <div className="moderator-listnear-section">
            {
                listeners.length>0?listeners.map((item,i)=>
                    <ModeratorListnearItem key={i} item={item} info={info}/>
                    ):
                <div style={{marginTop:"35px",textAlign:"center"}}>Ma'lumot topilmadi</div>
            }
        </div>
    );
}

export default ModeratorListnearSection;
