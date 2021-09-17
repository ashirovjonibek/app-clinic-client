import React, {useEffect, useState} from "react";
import InputFile from "../InputFile";
import Label from "../Label";
import SectionCategory from "../SectionCategory";
import CheckboxConfidensial from "../CheckboxConfidensial";
import UserItem from "../UserItem";
import DocumentText from "../DocumentText";
import ButtonWhite from "../ButtonWhite";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {CustomPagination} from "../catalog/Pagenation";
import {Loading} from "../catalog/Loading";
import {withTranslation} from "react-i18next";

const PerAccAppResponseRequest = ({t}) => {
    let token = localStorage.getItem(STORAGE_NAME);
    const [items, setItems] = useState([]);
    const [appeal, setAppeal] = useState([]);
    const [pageSize, setPageSize] = useState(0);
    const [active, setActive] = useState(1);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState({message: "", status: false});
    const [size, setSize] = useState(3);


    useEffect(() => {
        setLoading(true);
        axios({
            method: "get",
            url: API_URL + "/document/applicant?size=" + size + "&page=" + (active - 1),
            headers: {
                Authorization: token
            }
        }).then((r) => {
            console.log(r);
            setLoading(false);
            setPageSize(r.data.object.totalPages);
            setItems(r.data.object.object)
        }).catch((e) => {
            setLoading(false)
        })
    }, [size, active]);
    return (
        <>
            {
                loading ? <Loading/> : <>
                    {
                        items && items.map((item, i) =>
                                <div key={i} className="content per-acc-app-response-request">
                                    <div className="request-theme" style={{marginBottom: '40px'}}>
                                        <div>
                                            <h3>{t("The answer to your appeal came from")} <strong>{item?.checkedBy?.fullName}</strong></h3>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '20px'}}>
                                        <DocumentText appeal={item?.application}/>
                                    </div>
                                    <SectionCategory section={item?.application?.section}
                                                     fileId={item?.application?.attachmentsId?item?.application?.attachmentsId[0]:null}/>
                                    <CheckboxConfidensial/>
                                    <div className="response-request">
                                        <div className="content-line"/>
                                        <div style={{marginBottom: '20px'}}>
                                            <UserItem p={item?.checkedBy}/>
                                        </div>
                                        <div className="file-upload">
                                            <SectionCategory showSection={true} section={item?.application?.section}
                                                             fileId={item?.answer?.attachmentId?item?.answer?.attachmentId[0]:null}/>
                                        </div>
                                    </div>
                                    <div className="answer-score">
                                        <h4>{t("Evaluating the response")}:</h4>
                                        <div className="answer-score-button">
                                            <span style={{padding: "3px 5px", cursor: "pointer"}}>
                                                <ThumbUpIcon/>
                                            </span>
                                            <span style={{padding: "3px 5px", cursor: "pointer"}}>
                                                <ThumbDownIcon/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        )
                    }

                    <div style={{clear: "both"}}></div>
                    <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                        <CustomPagination
                            pageLength={pageSize}
                            setActive={setActive}
                            active={active}
                            size={size}
                            setSize={setSize}
                        />
                    </div>
                </>
            }
        </>
    );
}

export default withTranslation()(PerAccAppResponseRequest);
