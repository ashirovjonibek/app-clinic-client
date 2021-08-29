import React, {useEffect, useState} from 'react';
import './pagenation.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from "react-router-dom";

export const CustomPagination=(props)=> {
    const [pages,setPages]=useState([])
    useEffect(()=>{
        if (props?.pageLength){
            let a=[]
            for (let i = 0; i < props.pageLength; i++) {
                if (props?.active===(i+1)){
                    a.push({
                        page:i+1,
                        classPage:"active"
                    })
                }else {
                    a.push({
                        page:i+1,
                        classPage:""
                    })
                }
            }
            setPages(a)
            window.scrollTo(0, 0);
        }
    },[props])
    return (
        <div className="pagination" >
            <span disabled={props.active===1} onClick={()=>{
                props.setActive(1)
            }} style={{cursor:"pointer"}}><ArrowBackIosIcon/></span>
            {
                pages&&pages?.map((item)=>
                    <span key={item.page}  onClick={()=>{
                        props.setActive(item.page)
                    }} style={{cursor:"pointer"}} className={item.classPage}>{item.page}</span>
                )
            }
            <span disabled={props.active===props.pageLength} onClick={()=>{
                props.setActive(props.pageLength)
            }} style={{cursor:"pointer"}}><ArrowForwardIosIcon/></span>
        </div>
    );
}
