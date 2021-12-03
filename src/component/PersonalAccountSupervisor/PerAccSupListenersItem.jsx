import React from "react";
import UserItem from "../UserItem";
import SimpleModal from "../Admin/SimpleModal";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import {withTranslation} from "react-i18next";

const PerAccSupListenersItem = (props) => {
    const {t} = props;

    let token = localStorage.getItem(STORAGE_NAME);

    const blockUser = () => {
        Swal.fire({
            title: props?.item.blocked ? t("Remove user from block") + "?" : "User blocklansinmi?",
            icon: "warning",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: t("Yes"),
            cancelButtonText: t("No"),
            confirmButtonColor: "red"
        }).then((conform) => {
            if (conform.isConfirmed) {
                axios({
                    url: API_URL + "/auth/block?id=" + props.item.id,
                    method: 'put',
                    headers: {
                        Authorization: token
                    }
                }).then((r) => {
                    Swal.fire(t("Done") + "!", "", "success").then((r) => {
                        console.log(r);
                        props.refresh()
                    })
                })
            }
        })
    };

    const active = {borderColor: 'white', marginLeft: '10px'};
    const active1 = {borderColor: '', marginLeft: ''};

    return (
        <div className="peraccsup-listnears-item">
            <div className="content">
                <div className="fedbeck">
                    <UserItem p={props?.item}/>
                    <div className="fedbeck-right">
                        <div>
                            <button disabled={props?.item.blocked} onClick={blockUser}
                                    style={props?.item.blocked ? active : active1}
                                    className="button-white">{props.t("Block")}</button>
                            <button disabled={!props?.item.blocked} onClick={blockUser} className="button-white"
                                    style={!props?.item.blocked ? active : active1}>{props.t("Unblock")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(PerAccSupListenersItem);
