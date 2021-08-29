import React, { useState, useEffect } from "react";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import axios from "axios";
import CheckboxConfidensial from "../CheckboxConfidensial";
import GetAppIcon from '@material-ui/icons/GetApp';
import {CustomPagination} from "../catalog/Pagenation";
import {CircularProgress} from "@material-ui/core";
const YourAppealSection = (props) => {

    const [appeal, setAppeal] = useState([]);
    const [pageSize,setPageSize]=useState(0)
    const [active,setActive]=useState(1)
    const [loading,setLoading]=useState(true)
    const [errorMsg,setErrorMsg]=useState({message:"",status:false})

    const token = localStorage.getItem(STORAGE_NAME);

    useEffect(() => {
        setLoading(true)
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/applicant?size=3&page="+(active-1),
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object);
            props.setAppeal(res.data.object.object);
            console.log(res);
            setPageSize(res.data.object.totalPages)
            setLoading(false)
        }).catch((e)=>{
            setLoading(false)
            console.log(e.message)
            setErrorMsg({
                status: true,
                message: ""+e.message
            });
        })
    }, [active]);

    const fileLoad=(id,name)=>{
        if (id){
            axios.get(API_URL + "/attach/" + id,{
                headers:{
                    'Authorization':token,
                    'Content-Type':'application/pdf'
            }
            }).then((r)=>{
                console.log(r)
                const type = r.headers['content-type']
                const blob = new Blob([r.data], { type: type, encoding: 'UTF-8' })
                const link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = ''+name+' arizasi.pdf'
                link.click()
            })
        }
    }

    return (
        <div className="your-appeal-item-section">
            {
                errorMsg.status?<div style={{width:100+"%",textAlign:"center",paddingTop:"100px",fontSize:"45px"}}>
                    <span>
                        {errorMsg.message}
                    </span>
                </div>:
                    loading?<div style={{width:100+"%",textAlign:"center",paddingTop:"100px"}}>
                            <CircularProgress/>
                        </div>:
                        <>
                            {appeal && appeal.map((item) =>
                                <div className="content" key={item?.id} value={item?.id}>
                                    <div className="document-text">
                                        <div className="document-text-title">
                                            <h4>Тема обращения:</h4>
                                            <p>{item?.title}</p>
                                        </div>
                                        <div className="document-text-item">
                                            <p>{item?.description}</p>
                                        </div>
                                    </div>
                                    <div className="categories">
                                        <ul>
                                            <li>
                                                <label htmlFor="">Категория обращения</label>
                                                <div className="category-item">{item?.section?.title?.ru}</div>
                                            </li>
                                            <li>
                                                <label htmlFor="">Файл</label>
                                                <div title={item?.attachmentsId ? "Arizani yuklash" : "doc not found"}
                                                     onClick={(e) => {
                                                         item?.attachmentsId ? fileLoad(item?.attachmentsId[0], item?.applicant?.fullName) : console.log("doc not found")
                                                     }} style={{textAlign: "center", cursor: "pointer"}} className="file-item">
                                                    <GetAppIcon/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <CheckboxConfidensial top={item?.top}/>
                                </div>
                            )}

                            {/* <UserAppealItem /> */}
                            <div className="content-line"></div>
                            <div className="new-request">
                                <a onClick={() => {
                                    console.log(appeal)
                                }}>Создать новое обращение</a>
                            </div>
                            <div style={{clear: "both"}}></div>
                            <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                                <CustomPagination
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

export default YourAppealSection;
