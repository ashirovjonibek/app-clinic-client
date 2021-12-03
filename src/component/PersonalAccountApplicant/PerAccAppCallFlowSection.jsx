import React, {useEffect, useState} from "react";
import PerAccAppCallFlowItem from "./PerAccAppCallFlowItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import CustomPagination from "../catalog/Pagenation";
import {CircularProgress} from "@material-ui/core";

const PerAccAppCallFlowSection = () => {
    const token = localStorage.getItem(STORAGE_NAME);
    const [appeal, setAppeal] = useState([]);
    const [pageSize, setPageSize] = useState(0)
    const [active, setActive] = useState(1)
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState({message: "", status: false})
    const [size, setSize] = useState(3)

    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/applicant?size=" + size + "&page=" + (active - 1),
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object);
            console.log(res);
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
    }, [active, size]);
    return (
        <div className="per-acc-app-call-flow-item">
            {
                errorMsg.status ?
                    <div style={{width: 100 + "%", textAlign: "center", paddingTop: "100px", fontSize: "45px"}}>
                    <span>
                        {errorMsg.message}
                    </span>
                    </div> :
                    loading ? <div style={{width: 100 + "%", textAlign: "center", paddingTop: "100px"}}>
                            <CircularProgress/>
                        </div> :
                        <>
                            {
                                appeal && appeal.map((item) =>
                                    <PerAccAppCallFlowItem appeal={item}/>
                                )
                            }
                            <div style={{clear: "both"}}/>
                            <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                                <CustomPagination
                                    size={size}
                                    setSize={setSize}
                                    pageLength={pageSize}
                                    setActive={setActive}
                                    active={active}
                                />
                            </div>
                        </>
            }
        </div>
    );
}

export default PerAccAppCallFlowSection;
