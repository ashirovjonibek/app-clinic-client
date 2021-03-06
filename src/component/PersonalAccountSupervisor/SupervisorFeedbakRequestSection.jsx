import React, {useEffect, useState} from "react";
import SupervisorFeedbakRequestItem from "./SupervisorFeedbakRequestItem";
import SupervisorFeedbakRequestItemDizz from "./SupervisorFeedbakRequestItemDizz";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import Swal from "sweetalert2";

const SupervisorFeedbakRequestSection = (props) => {
    const [feedBack, setFeedBack] = useState([]);
    const [pageLength, setPageLength] = useState(0);
    const [size, setSize] = useState(5);
    const [active, setActive] = useState(1);
    useEffect(() => {
        let token = localStorage.getItem(STORAGE_NAME);
        axios({
            method: 'get',
            url: API_URL + '/document/answer/feedback?size=' + size + '&page=' + (active - 1),
            headers: {
                Authorization: token
            }
        }).then((res) => {
            setFeedBack(res.data.object);
            setPageLength(res.data.totalPages);
        }).catch((e) => {
            Swal.fire("Xatolik yuz berdi!!!", "", "error");
        });
    }, []);

    return (
        <div className="supervisor-feedbak-request-section">
            <>
                {
                    feedBack && feedBack.map((item, i) =>
                        item?.liked ? <SupervisorFeedbakRequestItem listener={props?.listener} key={i} item={item}/> :
                            <SupervisorFeedbakRequestItemDizz listener={props?.listener} key={i} item={item}/>
                    )
                }
            </>
        </div>
    );
};

export default SupervisorFeedbakRequestSection;
