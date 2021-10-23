import React, {useEffect, useState} from "react";
import SupervisorFeedbakRequestItem from "../PersonalAccountSupervisor/SupervisorFeedbakRequestItem";
import SupervisorFeedbakRequestItemDizz from "../PersonalAccountSupervisor/SupervisorFeedbakRequestItemDizz";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import Swal from "sweetalert2";

const ModeratorFedbeckRequestSection = () => {
    const [feedBack, setFeedBack] = useState([]);
    const [pageLength,setPageLength]=useState(0);
    const [size,setSize]=useState(5);
    const [active,setActive]=useState(1);
    useEffect(() => {
        let token = localStorage.getItem(STORAGE_NAME);
        axios({
            method: 'get',
            url: API_URL + '/document/answer/feedback?size='+size+'&page='+(active-1),
            headers: {
                Authorization: token
            }
        }).then((res) => {
            setFeedBack(res.data.object);
            setPageLength(res.data.totalPages);
        }).catch((e)=>{
           Swal.fire("Xatolik yuz berdi!!!","","error");
        });
    }, []);

    return (
        <div className="moderator-fedbeck-request-section">
            <>
                {
                    feedBack&&feedBack.map((item,i)=>
                        item?.liked?<SupervisorFeedbakRequestItem key={i} item={item}/>:
                        <SupervisorFeedbakRequestItemDizz key={i} item={item}/>
                    )
                }
            </>
        </div>
    );
}

export default ModeratorFedbeckRequestSection;
