import React, {useEffect, useState} from "react";
import ContentTop from "../ContentTop";
import ModeratorAppealItem from "./ModeratorAppealItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {CustomPagination} from "../catalog/Pagenation";

const ModeratorAppealSection = () => {
    const [items,setItems]=useState([])
    const [activeItems,setActiveItems]=useState([])
    const [active,setActive]=useState(0)
    const [total,setTotal]=useState(1)
    let token=localStorage.getItem(STORAGE_NAME)
    useEffect(()=>{
        axios({
            method:'get',
            url:API_URL+'/application/applications',
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r)
            setItems(r.data)
            setActive(1)
            if (r?.data?.length%3>0){
                setTotal(parseInt((r.data.length/3))+1)
            }else setTotal(r.data.length/3)
        })
    },[]);

    const refresh=()=>{
        axios({
            method:'get',
            url:API_URL+'/application/applications',
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r)
            setItems(r.data)
            setActive(1)
            if (r?.data?.length%3>0){
                setTotal(parseInt((r.data.length/3))+1)
            }else setTotal(r.data.length/3)
        })
    }

    useEffect(()=>{
        let a=[];
        for (let i = active*3-3; i < active*3; i++) {
            if (items[i]){
                a.push(items[i])
            }
        }
        setActiveItems(a)
    },[active])
    return (
        <div className="moderator-appeals-section">
            <ContentTop count={items.length} />
            <>
                {
                    activeItems&&activeItems.map((item,i)=>
                    <ModeratorAppealItem refresh={refresh} key={i} item={item} />
                    )
                }
                <div style={{clear: "both"}}></div>
                <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                    <CustomPagination
                        pageLength={total}
                        setActive={setActive}
                        active={active}
                    />
                </div>
            </>
        </div>
    );
}

export default ModeratorAppealSection;
