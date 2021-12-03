import React, {useState} from "react";
import InputFile from "../InputFile";
import ButtonDefault from "../ButtonDefault";
import Label from "../Label";
import UserItem from "../UserItem";
import {withTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {green, red} from "@material-ui/core/colors";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import DoneIcon from "@material-ui/icons/Done";
import GetAppIcon from "@material-ui/icons/GetApp";
import {CircularProgress} from "@material-ui/core";
import Swal from "sweetalert2";
import {Col, Collapse, Input, Row} from "antd";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import UnorderedListOutlined from "@ant-design/icons/lib/icons/UnorderedListOutlined";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import loading from "../../redux/loding";
import CloudUploadOutlined from "@ant-design/icons/lib/icons/CloudUploadOutlined";

const ResponseRequestItem1 = ({t, id, item, refresh, type}) => {
    const [isAn, setIsAn] = useState(false);
    const token = localStorage.getItem(STORAGE_NAME);
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [done, setDone] = useState(false);
    const [errorUpload, setErrorUpload] = useState("");
    const [fileId, setFileId] = useState();


    const submit = () => {
        let path = type ? "/answer/updateByDocument?documentId=" : "/answer/create?applicationId=";
        let method = type ? "put" : "post";
        console.log(id);
        if (fileId || message) {
            Swal.fire({
                title: t("Confirmation") + "!!!",
                text: t("Confirm changes to this form") + "?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: t("Yes"),
                cancelButtonText: t("No")
            }).then((result) => {
                if (result.isConfirmed) {
                    axios({
                        method: method,
                        url: API_URL + path + id,
                        headers: {
                            Authorization: token
                        },
                        data: {
                            attachmentId: fileId ? fileId : [],
                            description: message,
                        }
                    }).then((r) => {
                        console.log(r);
                        Swal.fire(
                            t("Saved"),
                            '',
                            'success'
                        ).then((res) => {
                            refresh();
                            setIsAn(false)
                            setMessage("");
                            setMessage("");
                            setFileName("");
                            setDone(false);
                            setFileId("")
                        });
                    }).catch((err) => {
                        Swal.fire(
                            t("An error occurred") + "!",
                            '',
                            'error'
                        ).then((res) => {
                        });
                    })
                }
            })
        } else {
            Swal.fire("Iltimos file yoki text kiriting!!!", "", "error");
        }
    };

    const handleUpload = (e) => {
        setLoading(true)
        if (e.target.files[0]) {
            const formData = new FormData();
            formData.append("file", e.target.files[0]);
            axios({
                url: API_URL + '/attach/upload',
                method: "POST",
                headers: {
                    Authorization: localStorage.getItem(STORAGE_NAME),
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            }).then(res => {
                    console.log(res);
                    setFileName(e.target.files[0].name);
                    setFile([res.data.object]);
                    setFileId([res.data.object]);
                    setLoading(false);
                    setDone(true)
                }
            )
        } else {
            setErrorUpload(t("The file was not uploaded!!!"));
            setLoading(false)
        }

    }
    return (
        <div className="response-request">
            <Collapse accordion
                      expandIcon={({isActive}) => isActive ?
                          <CloseOutlined style={{fontSize: "20px"}} className="text-light"/> :
                          <UnorderedListOutlined style={{fontSize: "20px"}} className="text-light"/>}
                      expandIconPosition={"right"}
            >
                <Collapse.Panel style={{fontSize: "16px"}} className="bg-info"
                                header={<div style={{display: "inline-block"}}>
                                    <Row gutter={24}>
                                        <Col span={24} className="text-light" style={{fontWeight: 600}}>Javob
                                            biriktirish</Col>
                                    </Row>
                                </div>}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Input.TextArea onChange={(e) => setMessage(e?.target?.value)} style={{height: "105px"}}
                                            placeholder="Javob matnini kiriting!!!"/>
                        </Col>
                    </Row>
                    <div style={{marginTop: "17px"}}>
                        <div style={{marginBottom: '20px', display: "inline-block"}}>
                            <div className="lb">
                                <label className="label">{t("Attach file")}</label>
                            </div>
                            <div className="file" style={{cursor: !done ? "pointer" : "", marginTop: "5px"}}>
                                {!isLoading ? done ? <DoneIcon style={{cursor: "pointer"}}/> :
                                    <label style={{cursor: "pointer"}}
                                           htmlFor="answerFile"><CloudUploadOutlined/></label> : ""}
                                {isLoading ? <CircularProgress style={{width: "15px", height: "15px", marginTop: "3px"}}
                                                               color="primary"/> : ""}
                                {<input accept="application/pdf" id="answerFile" style={{cursor: "pointer"}}
                                        title={done ? fileName : "Fayl yuklanmagan"} onChange={handleUpload}
                                        type="file"/>}
                            </div>
                            <div className="file1">{fileName}</div>
                            <p className="text-danger">{errorUpload}</p>
                        </div>
                        <div className="button" style={{marginTop: '20px', display: "inline-block", float: "right"}}>
                            <button onClick={submit} className="btn-default">{t("Attach the answer")}</button>
                        </div>
                    </div>
                </Collapse.Panel>
            </Collapse>
        </div>
    );
}

export default withTranslation()(ResponseRequestItem1);
