import React, {useEffect, useState} from "react";
import SupervisorCallFlowItem from "./SupervisorCallFlowItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import CustomPagination from "../catalog/Pagenation";

const SupervisorCallFlowSection = () => {
    const token = localStorage.getItem(STORAGE_NAME);
    const [appeal, setAppeal] = useState([]);
    const [pageSize, setPageSize] = useState(0);
    const [size, setSize] = useState(3);
    const [active, setActive] = useState(1)
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState({message: "", status: false})

    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/applicant?size=" + size + "&page=" + (active - 1),
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object);
            setLoading(false)
            setPageSize(res.data.object.totalPages)
        }).catch((e) => {
            setLoading(false)
            console.log(e.message)
            setErrorMsg({
                status: true,
                message: "" + e.message
            });
        })
    }, [active]);
    return (
        <div className="sipervisor-call-falow-section">
            {/*<SupervisorCallFlowItem />*/}
            <div>
                {pageSize > 0 && <CustomPagination
                    pageLength={pageSize}
                    setActive={setActive}
                    active={active}
                    size={size}
                    setSize={setSize}
                />}
            </div>
        </div>
    );
}

export default SupervisorCallFlowSection;
