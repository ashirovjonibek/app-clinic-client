import React, {useEffect, useState} from "react";
import AppealSections from "./AppealSections";
import axios from "axios";
import {ArrowBack} from "@material-ui/icons";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import CustomPagination from "../catalog/Pagenation";
import {Loading} from "../catalog/Loading";
import PdfViewer from "../catalog/pdfViewer";

const ContainerAppeals=({path,status})=>{
    const [items,setItems]=useState([]);
    const [pageLength,setPageLength]=useState(0);
    const [totalEl,setTotalEl]=useState(0);
    const [active,setActive]=useState(1);
    const [size,setSize]=useState(3);
    const [loading,setLoading]=useState(false);
    const [url,setUrl]=useState("");
    const [open,setOpen]=useState(false);
    const [ref,setRef]=useState(false);

    useEffect(()=>{
        setLoading(true)
        console.log(status,path)

            axios({
                method:'get',
                url:API_URL+path+"?status="+status+"&size="+size+"&page="+(active-1),
                headers:{
                    Authorization:localStorage.getItem(STORAGE_NAME)
                }
            }).then((res)=>{
                setItems(res?.data?.object);
                setTotalEl(res?.data?.totalElements);
                setPageLength(res?.data?.totalPages);
                setLoading(false)
            }).catch((e)=>{
                setLoading(false)
            })
    },[path,active,size,status,ref]);

    return(
        <>
            {
                loading?<Loading/>:items.length>0?<div style={{marginBottom:"15px"}}>
                    {
                        items.map((item,i)=>
                        <AppealSections
                            setUrl={setUrl}
                            setOpen={setOpen}
                            item={path==="/application/get-delayed-app"?item?.documentResponse:item}
                            dd={path==="/application/get-delayed-app"?item?.delayDay:null}
                            dc={path==="/application/get-delayed-app"?item?.comment:null}
                            ds={path==="/application/get-delayed-app"?item?.section:null}
                            key={i}
                            setRefr={setRef}
                            refr={ref}
                        />
                        )
                    }
                </div>:<div style={{textAlign:"center",marginTop:"25px"}}>Arizalar mavjud emas!!!</div>
            }
        <div className="container">
            {
                totalEl>size?<CustomPagination
                    active={active}
                    setActive={setActive}
                    size={size}
                    setSize={setSize}
                    pageLength={pageLength}
                />:""
            }
            <PdfViewer url={url} setUrl={setUrl} setOpen={setOpen} open={open}/>
        </div>
        </>
    )
}

export default ContainerAppeals;