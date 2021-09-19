import React, {useEffect, useState} from "react";
import PerAccAppPeriodItem from "./PerAccAppPeriodItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import {CustomPagination} from "../catalog/Pagenation";
import {CircularProgress} from "@material-ui/core";


const PerAccAppPeriodSection = () => {
    const token = localStorage.getItem(STORAGE_NAME);
    const [appeal, setAppeal] = useState([]);
    const [pageSize,setPageSize]=useState(0)
    const [active,setActive]=useState(1)
    const [loading,setLoading]=useState(true)
    const [errorMsg,setErrorMsg]=useState({message:"",status:false});
    const [size,setSize]=useState(3)
    useEffect(()=>{
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/applicant?size="+size+"&page="+(active-1),
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object);
            console.log(res);
            setLoading(false)
            setPageSize(res.data.object.totalPages)
        }).catch((e)=>{
            setLoading(false)
            console.log(e.message)
            setErrorMsg({
                status: true,
                message: ""+e.message
            });
        })
    }, [active]);
    return (
        <div className="per-acc-app-period-section">
        {
            errorMsg.status ? <div style={{width: 100 + "%", textAlign: "center", paddingTop: "100px", fontSize: "45px"}}>
                    <span>
                        {errorMsg.message}
                    </span>
                </div> :
                loading ? <div style={{width: 100 + "%", textAlign: "center", paddingTop: "100px"}}>
                        <CircularProgress/>
                    </div> :
                    <>
                        {
                            appeal&&appeal.map((item,i)=>
                                <PerAccAppPeriodItem key={i} item={item}/>
                            )
                        }
                        <div style={{clear:"both"}}></div>
                        <div style={{display:"block",textAlign:"center",marginTop:"10px"}}>
                            <CustomPagination
                                size={size}
                                setSize={{setSize}}
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

export default PerAccAppPeriodSection;
