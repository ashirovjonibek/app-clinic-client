import React, {useState} from 'react'
import {randomColor} from 'randomcolor'
import {FileIcon} from "@react-pdf-viewer/default-layout";
import {FileCopy, Done, Cancel, Edit,Videocam,Audiotrack} from "@material-ui/icons";
import userImg from '../../assets/img/user1.jpg'
import {blue, green, red, yellow} from "@material-ui/core/colors";
import i18next from "i18next";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {withTranslation} from "react-i18next";
import Swal from "sweetalert2";
import axios from "axios";

const AppealSections = ({item,setOpen,setUrl,t}) => {
    const [edit, setEdit] = useState(false);
    const [sd, setSD] = useState(false);
    const [sa, setSA] = useState(false);
    const [data,setData]=useState({
        documentId: "",
        delayDay: 0,
        comment: ""
    });

    const getDayDeadline=()=>{
        let a = new Date(item?.application?.deadLineDate);
        let b = new Date();
        let d = a.getTime() - b.getTime();
        let s=d / (1000 * 60 * 60 * 24)
        return s>0?parseInt(s)<s?parseInt(s+1):s:0;
    };

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl('+h+', '+s+'%, '+l+'%)';
    }

    const setDeadline=()=>{
      if (data.documentId&&data.comment&&data.delayDay){
          Swal.fire({
              showCancelButton:true,
              title:t("Save the change?"),
              icon:"warning",
              confirmButtonColor:green[450],
              confirmButtonText:t("Yes"),
              cancelButtonText:t("No"),
              cancelButtonColor:red[450]
          }).then((conform)=>{
              if (conform.isConfirmed){
                  axios({
                      method:'put',
                      url:API_URL+'/application/set-deadline',
                      headers:{
                          Authorization:localStorage.getItem(STORAGE_NAME)
                      },
                      data:data
                  })
              }
          })
      }else {
          Swal.fire("Iltimos maydonlarni to'ldiring","","warning");
      }
    };

    return (
        <div style={{boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)", marginBottom: "10px", padding: "15px", lineHeight: "24px"}}
        // <div style={{ marginBottom: "10px", padding: "15px", lineHeight: "24px"}}
             className="supervisor-appeal-item container">
            <div className="">
                <div style={{float: "left", display: "inline-block"}} className="request-content-title-name">
                    <div style={{
                        display: "inline-block",
                        textAlign: "center",
                        lineHeight: "40px",
                        textTransform: "uppercase",
                        backgroundColor: stringToHslColor(item?.application?item?.application?.applicant?.fullName:"",50,50),
                        fontSize: "30px",
                        color: "white"
                    }} className="applicant-image">{item?.application?.applicant?.fullName[0]}
                    </div>
                    <div style={{display: "inline", height: "100%", paddingTop: "12px"}} className="name">{item?.application?.applicant?.fullName}</div>
                </div>
                <div style={{float: "right", display: "inline-block",position:"relative"}}>
                   {item?.application?.status==="COMPLETED"||item?.application?.status==="CREATED"?"":<span>
                       {!edit ? getDayDeadline()<5?<button onClick={()=>setEdit(true)} style={{color: blue[600]}}>
                               <Edit/>
                           </button> :"":
                           <>
                               <button onClick={()=>setEdit(false)} style={{color: red[600], marginLeft: "4px"}}>
                                   <Cancel/>
                               </button>
                               <button onClick={setDeadline} style={{color: green[600], marginLeft: "4px"}}>
                                   <Done/>
                               </button>
                           </>
                       }
                   </span>}
                    {item?.application?.status==="COMPLETED"||item?.application?.status==="CREATED"?"":<span>
                        Bajarish muddati:
                    </span>}
                    <span style={{backgroundColor: item?.application?.status!=="COMPLETED"?getDayDeadline()>10?green[400]:getDayDeadline()<5?red[400]:yellow[400]:green[400], color: "white", padding: "6px", borderRadius: "15px"}}
                          >
                        {
                            edit?<><span style={{backgroundColor:edit?"white":"",width:"45px",color:edit?"black":""}} contentEditable={"true"} onKeyPress={(e)=>{
                                console.log(e.target.innerText)
                            }}>0</span>+</>:""
                        }
                        <span  >
                            {item?.application?.status!=="COMPLETED"?item?.application?.status!=="CREATED"?getDayDeadline():"Belgilanmagan":"Bajarilgan"}
                        </span> {item?.application?.status==="COMPLETED"||item?.application?.status==="CREATED"?"":"kun"}
                    </span>
                    <div style={{
                        position:"absolute",
                        boxShadow:"0 0 5px 0 rgba(0,0,0,0.2)",
                        marginTop:"7px",
                        zIndex:1
                    }}>
                        {
                            edit?<textarea
                                style={{
                                    padding:"10px"
                                }}
                                name="comment" placeholder="Izoh qoldiring!!!" id="comment" cols="30" rows="10">

                            </textarea>:""
                        }
                    </div>
                </div>
                <div style={{clear: "both", display: "block"}}></div>
                <div className="document-text">
                    <div className="document-text-title">
                        <p style={{padding: "4px 0 0 3px", wordBreak: "break-all"}}>
                            <h4 style={{
                                fontSize: "18px",
                                marginRight: "4px",
                                display: "inline-block",
                                fontWeight: 500
                            }}>Тема обращения:</h4>
                            {item?.application?.title}
                        </p>
                    </div>
                    <hr style={{
                        display: "block",
                        border: "1px solid rgba(0,0,0,0.2)",
                        marginTop: "3px",
                        marginBottom: "5px"
                    }}/>
                    <div style={{marginBottom: "5px", textAlign: "justify",maxHeight:sd?"":"250px",overflow:!sd?"hidden":""}} className="document-text-item">
                        {
                            item?.application?.description
                        }
                    </div>
                    <span onClick={()=>setSD(!sd)} style={{textDecoration:"underline", color:blue[400],cursor:"pointer"}}>
                                   {
                                       sd?t("hide"):t("show")
                                   }
                               </span>
                </div>
                <div className="request-categoriyes">
                    <div className="categories">
                        <ul>
                            <li style={{padding: "5px"}}>
                                <label htmlFor="">Категория</label>
                                <div className="file">{
                                    item?.application?.section?.title[i18next.language]
                                }</div>
                            </li>
                            {
                                item?.application?.attachmentsId?<li style={{padding: "5px"}}>
                                    <label htmlFor="">Файл</label>
                                    <button onClick={()=>{
                                        setUrl(API_URL+'/attach/'+item?.application?.attachmentsId[0])
                                        setOpen(true)
                                    }} className="file"><FileCopy/></button>
                                </li>:""
                            }
                            {item?.application?.video?<li style={{padding: "5px"}}>
                                <label htmlFor="">Файл</label>
                                <button className="file"><Videocam/></button>
                            </li>:""}
                            {item?.application?.audio?<li style={{padding: "5px"}}>
                                <label htmlFor="">Файл</label>
                                <button className="file"><Audiotrack/></button>
                            </li>:""}
                        </ul>
                    </div>
                </div>
                <hr style={{display: "block", border: "1px solid rgba(0,0,0,0.5)", margin: "6px 3px"}}/>
                <div className="request-categoriyes">
                    <div className="user-item">
                        {item?.checkedBy?<div className="request-content-title-name">
                            <div style={{
                                display: "inline-block",
                                textAlign: "center",
                                lineHeight: "40px",
                                textTransform: "uppercase",
                                backgroundColor: stringToHslColor(item?.checkedBy?item?.checkedBy?.fullName:"",50,50),
                                fontSize: "30px",
                                color: "white"
                            }} className="applicant-image">{item?.checkedBy?.fullName[0]}
                            </div>
                            <div style={{display: "inline", height: "100%", paddingTop: "12px"}}
                                 className="name">{item?.checkedBy?.fullName}
                            </div>
                        </div>:""}
                        <div className="document-text-title">
                           {item?.answer? <p style={{padding: "4px 0 0 3px", wordBreak: "break-all",maxHeight:sa?"":"250px",overflow:!sa?"hidden":""}}>
                                <h4 style={{
                                    fontSize: "18px",
                                    marginRight: "4px",
                                    display: "inline-block",
                                    fontWeight: 500
                                }}>Javob matni:</h4>
                               {
                                   item?.answer?.description
                               }

                            </p>:""}<span onClick={()=>setSA(!sa)} style={{textDecoration:"underline", color:blue[400],cursor:"pointer"}}>
                                   {
                                       sa?t("hide"):t("show")
                                   }
                               </span>
                        </div>
                    </div>
                </div>
                <hr style={{display: "block", border: "1px solid rgba(0,0,0,0.1)", marginTop: "3px"}}/>
                <div className="request-bottom">
                    {item.answer?item.answer?.attachmentId?<div className="file-upload">
                        <div>
                            <label className="label">File</label>
                        </div>
                        <div onClick={()=>{
                            setUrl(API_URL+'/attach/'+item?.answer?.attachmentId[0]);
                            setOpen(true)
                        }} style={{width: "70px", cursor: "pointer", marginTop: "4px"}} className="file">
                            <FileCopy/>
                        </div>
                    </div>:"":""}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(AppealSections)