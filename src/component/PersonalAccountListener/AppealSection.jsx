import React, {useEffect, useState} from "react";
import AppealItem from "./AppealItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {CustomPagination} from "../catalog/Pagenation";
import {Loading} from "../catalog/Loading";

const AppealSection = () => {
    let token=localStorage.getItem(STORAGE_NAME);
    const [size,setSize]=useState(3);
    const [active,setActive]=useState(1);
    const [total,setTotal]=useState(0);
    const [loading,setLoading]=useState(false);
    const [inpApps,setInpApps]=useState([]);

    useEffect(()=>{
        setLoading(true)
        axios({
            method:'get',
            url:API_URL+"/application/unchecked?size="+size+"&page="+(active-1),
            headers: {
                'Authorization': token
            }
        }).then((r)=>{
            console.log(r);
            setTotal(r.data.totalPages);
            setInpApps(r.data.object)
            setLoading(false)
        })

    },[active,size]);
    return (
        <>
            {
                loading?<Loading/>:<div className="appeal-section">
                    {
                        inpApps&&inpApps.map((item,i)=>
                            <AppealItem key={i} item={item} />
                        )
                    }


                    <div style={{clear: "both"}}></div>

                    <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>

                        {total>0?<CustomPagination
                            pageLength={total}
                            setActive={setActive}
                            active={active}
                            size={size}
                            setSize={setSize}
                        />:<div style={{textAlign:"center",paddingTop:"35px"}}>
                            Yangi arizalar mavjud emas!!!
                        </div>}
                    </div>
                </div>
            }
        </>
    );
}

export default AppealSection;
