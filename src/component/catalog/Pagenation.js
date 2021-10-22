import React, {useEffect, useState} from 'react';
import './pagenation.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {withTranslation} from "react-i18next";

const CustomPagination=(props)=> {
    const [pages,setPages]=useState([])
    useEffect(()=>{
        if (props?.pageLength){
            let a=[];
            if (props?.pageLength<4){
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
            }else {

                    if (props?.active===1){
                        a.push(
                            {
                                page:props?.active,
                                classPage:"active"
                            },
                            {
                                page:props?.active+1,
                                classPage:""
                            },
                            {
                                page:props?.active+2,
                                classPage:""
                            }
                        )
                    }
                    else if (props?.active<props?.pageLength){
                        a.push(

                            {
                                page:props?.active-1,
                                classPage:""
                            },
                            {
                                page:props?.active,
                                classPage:"active"
                            },
                            {
                                page:props?.active+1,
                                classPage:""
                            }
                        )
                    }
                    else if (props?.active===props?.pageLength){
                        a.push(
                            {
                                page:props?.active-2,
                                classPage:""
                            },
                            {
                                page:props?.active-1,
                                classPage:""
                            },
                            {
                                page:props?.active,
                                classPage:"active"
                            },
                        )
                    }
                }
            setPages(a);
            // window.scrollTo(0, 0);
            if (props?.active>1&&props?.active>props?.pageLength){
                props.setActive(props?.active-1)
            }
        }
    },[props])
    return (
        <div style={props.style}>
            {
                props?.size?<div className="size-page">
                    <span className="span-item page_size_text" style={{fontSize:"20px"}}> {props.t("Page size")}: </span>
                    <select defaultValue={props?.size} onChange={(e)=>{
                        props?.setSize(e.target.value);
                        props?.setActive(1)
                    }
                    } className="input-size-option">
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                </div>:""
            }
            <div className="pagination1" >
                <span disabled={props.active===1} onClick={()=>{
                    props.setActive(1)
                }} style={{cursor:"pointer"}}><ArrowBackIosIcon/></span>
               {
                   props?.pageLength<4?<>
                       {
                           pages&&pages?.map((item)=>
                               <span key={item.page}  onClick={()=>{
                                   props.setActive(item.page)
                               }} style={{cursor:"pointer",fontSize:"20px"}} className={item.classPage}>{item.page}</span>
                           )
                       }
                   </>:
                       <>
                           {
                               (props?.active-1)>1?<span className="span-item tree-dots" style={{fontSize:"20px",padding:"8px 0",margin:0}}>...</span>:""
                           }
                           {
                               pages&&pages?.map((item)=>
                                   <span  key={item.page}  onClick={()=>{
                                       props.setActive(item.page)
                                   }} style={{cursor:"pointer",fontSize:"20px"}} className={"span-item "+item.classPage}>{item.page}</span>
                               )
                           }
                           {
                               (props?.active+1)<props?.pageLength?<span className="span-item tree-dots" style={{fontSize:"20px",padding:"8px 0",margin:0}}>...</span>:""
                           }
                       </>
               }
               <span disabled={props.active===props.pageLength} onClick={()=>{
                    props.setActive(props.pageLength)
                }} style={{cursor:"pointer"}}><ArrowForwardIosIcon/></span>
            </div>
        </div>
    );
}
export default withTranslation()(CustomPagination);
