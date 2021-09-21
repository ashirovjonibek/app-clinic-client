import React, {useEffect, useState} from "react";
import ContentTop from "../ContentTop";
import ModeratorAppealItem from "./ModeratorAppealItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import CustomPagination from "../catalog/Pagenation";
import {Loading} from "../catalog/Loading";

const ModeratorAppealSection = () => {
    const [items,setItems]=useState([]);
    const [activeItems,setActiveItems]=useState([])
    const [active,setActive]=useState(1)
    const [size,setSize]=useState(3)
    const [total,setTotal]=useState(1);
    const [loading,setLoading]=useState(false);
    let token=localStorage.getItem(STORAGE_NAME)
    useEffect(()=>{
        setLoading(true)
        axios({
            method:'get',
            url:API_URL+'/document/accepted/all?size='+size+'&page='+(active-1),
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r);
            setActiveItems(r.data.object);
            setTotal(r.data.totalPages)
            setLoading(false)
        })
    },[active,size]);

    const refresh=()=>{
        axios({
            method:'get',
            url:API_URL+'/application/applications',
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r);
            setActiveItems(r.data.object);
            setTotal(r.data.totalPages)
        })
    }
    return (
        <>
            {
                loading?<div>
                    <Loading/>
                </div>:
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
                                size={size}
                                setSize={setSize}
                            />
                        </div>
                    </>
                </div>
            }
        </>
    );
}

export default ModeratorAppealSection;
