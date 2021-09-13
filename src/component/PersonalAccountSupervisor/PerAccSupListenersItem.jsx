import React from "react";
import UserItem from "../UserItem";
import SimpleModal from "../Admin/SimpleModal";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";

const PerAccSupListenersItem = (props) => {

    let token=localStorage.getItem(STORAGE_NAME);

    const blockUser=()=>{
      Swal.fire({
          title:props?.item.blocked?"User blockdan chiqarilsinmi?":"User blocklansinmi?",
          icon:"warning",
          showConfirmButton:true,
          showCancelButton:true,
          confirmButtonText:"Ha",
          cancelButtonText:"yo'q",
          confirmButtonColor:"red"
      }).then((conform)=>{
          if (conform.isConfirmed){
              axios({
                  url:API_URL+"/auth/block?id="+props.item.id,
                  method:'put',
                  headers:{
                      Authorization:token
                  }
              }).then((r)=>{
                  Swal.fire("Bajarildi!!","","success").then((r)=>{
                      console.log(r);
                      props.refresh()
                  })
              })
          }
      })
    };

    const active={borderColor: 'white', marginLeft: '10px'};
    const active1={borderColor: '', marginLeft: ''};

    return (
        <div className="peraccsup-listnears-item">
            <div className="content">
                <div className="fedbeck">
                    <UserItem p={props?.item}/>
                    <div className="fedbeck-right">
                        <div>
                            <button disabled={props?.item.blocked} onClick={blockUser} style={props?.item.blocked?active:active1} className="button-white">Blocklash</button>
                            <button disabled={!props?.item.blocked} onClick={blockUser} className="button-white" style={!props?.item.blocked?active:active1} >Blockdan chiqarish</button>
                        </div>
                        <div className="redaction-date">
                            <SimpleModal
                                item={props.item}
                                getListeners={props.refresh}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerAccSupListenersItem;
