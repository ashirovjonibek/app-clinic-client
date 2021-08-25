import React, { useState, useEffect } from "react";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import axios from "axios";
import UserAppealItem from "../UserAppealItem";
import CheckboxConfidensial from "../CheckboxConfidensial";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';
import {Dialog} from "@material-ui/core";

const YourAppealSection = (props) => {

    const [appeal, setAppeal] = useState([]);



    const token = localStorage.getItem(STORAGE_NAME);

    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/applicant",
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object);
            props.setAppeal(res.data.object.object);
            console.log(res);
        })
    }, []);

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
            {appeal && appeal.map((item) =>
                <div className="content" key={item.id} value={item.id}>
                    <div className="document-text">
                        <div className="document-text-title">
                            <h4>Тема обращения:</h4>
                            <p>{item.title}</p>
                        </div>
                        <div className="document-text-item">
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="categories">
                        <ul>
                            <li>
                                <label htmlFor="">Категория обращения</label>
                                <div className="category-item">{item.section?.title?.ru}</div>
                            </li>
                            <li>
                                <label htmlFor="">Файл</label>
                                <div title={item.attachmentsId?"Arizani yuklash":"doc not found"} onClick={(e)=>{
                                    item.attachmentsId?fileLoad(item.attachmentsId[0],item.applicant?.fullName):console.log("doc not found")
                                }} style={{textAlign:"center",cursor:"pointer"}} className="file-item">
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
                <a  onClick={()=>{
                    console.log(appeal)
                }}>Создать новое обращение</a>
            </div>
            {/* <ul className="page-numbers">
                <li>
                    <button disabled={currentPage == pages[0] ? true : false} onClick={handlePrevbtn}>
                        <ChevronLeftIcon/>
                    </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    <button onClick={handleNextbtn}>
                        <ChevronRightIcon />
                    </button>
                </li>
            </ul> */}
        </div>
    );
}

export default YourAppealSection;
