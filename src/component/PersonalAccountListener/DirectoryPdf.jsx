import React from "react";
import Label from "../Label";
import {Description,Delete,PictureAsPdf} from '@material-ui/icons'
import {withTranslation} from "react-i18next";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {allRoles} from "../../routes/authRoles";
import Swal from "sweetalert2";
import red from "@material-ui/core/colors/red";
import axios from "axios";

const DirectoryPdf = (props) => {

    const fileLoader=(id)=>{
      let element = document.createElement('a');
      element.href=API_URL+'/attach/'+id;
      element.target="_blank";
      element.click();
    };

    const deleteFile=(id)=>{
      if (id){
          Swal.fire({
              showCancelButton:true,
              confirmButtonColor:red[400],
              confirmButtonText:'Ha',
              cancelButtonText:"Yo'q",
              title:"File o'chirilsinmi!!!",
              icon:"warning"
          }).then(((confirm)=>{
              if (confirm.isConfirmed){
                  axios({
                      method:'delete',
                      headers:{
                          Authorization:localStorage.getItem(STORAGE_NAME)
                      },
                      url:API_URL+'/attach?id='+id
                  }).then((res)=>{
                      Swal.fire("File o'chirildi!!!","","success").then((conf)=>{
                          props.refresh()
                      })
                  }).catch((err)=>{
                      Swal.fire("Xatolik yuz berdi!!!","","error").then((conf)=>{
                          props.refresh()
                      })
                  })
              }
          }))
      }
    };


    return (
        <div className="directory-pdf">
            <div className="directory-file" >
                {
                    props.role===allRoles.ADMIN[0]?
                        <div onClick={()=>{
                            deleteFile(props?.item?.id);
                            console.log("delete clicked")
                        }
                        }>
                            <Delete />
                        </div>:""
                }
                <span ><PictureAsPdf type="file-pdf" onClick={()=>{
                   props?.setUrl(API_URL+'/attach/'+props?.item?.id);
                   props?.setOpen(true)

                }} style={{width:"100%",fontSize:"68px",marginTop:"18px"}}/></span>
                <p style={{wordBreak:"break-all",padding:"0 15px"}}>
                    {
                        props?.item?.name
                    }
                </p>
            </div>
        </div>
    );
}

export default DirectoryPdf;
