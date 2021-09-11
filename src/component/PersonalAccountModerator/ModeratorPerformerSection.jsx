import React, {useEffect, useState} from "react";
import ModeratorPerformerItem from "./ModeratorPerformerItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {CustomPagination} from "../catalog/Pagenation";

const ModeratorPerformerSection = () => {
    const [activeItems,setActiveItems]=useState([]);
    const [total,setTotal]=useState(0);
    const [size,setSize]=useState(3);
    const [active,setActive]=useState(1);
    const [e,setE]=useState(false);
    let token=localStorage.getItem(STORAGE_NAME);
    useEffect(()=>{
        axios({
            method:'get',
            url:API_URL+'/document/applications?size='+size+'&page='+(active-1),
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r);
            setActiveItems(r.data.object);
            setTotal(r.data.totalPages)
        })
    },[active,size]);

    const refresh=()=>{
        axios({
            method:'get',
            url:API_URL+'/document/applications?size='+size+'&page='+(active-1),
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r);
            setActiveItems(r.data.object);
            setTotal(r.data.totalPages)
        })
    };



    return (
        <div className="moderator-performer-section">
            {
                activeItems&&activeItems.map((item,i)=>
                    <ModeratorPerformerItem refresh={refresh} key={i} item={item} />)
            }

            <div style={{clear: "both"}}></div>
            <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                <CustomPagination
                    pageLength={total}
                    setActive={setActive}
                    active={active}
                    size={size}
                    setSize={setSize}
                />
            </div>
        </div>
    );
}

export default ModeratorPerformerSection;
