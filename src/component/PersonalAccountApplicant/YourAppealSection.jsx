import React, {useState, useEffect} from "react";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import CheckboxConfidensial from "../CheckboxConfidensial";
import GetAppIcon from '@material-ui/icons/GetApp';
import {CircularProgress} from "@material-ui/core";
import {withTranslation} from "react-i18next";
import CustomPagination from "../catalog/Pagenation";

const YourAppealSection = (props) => {
    const i18 = localStorage.getItem('I18N_LANGUAGE')

    const history = useHistory();
    const [appeal, setAppeal] = useState([]);
    const [pageSize, setPageSize] = useState(0)
    const [active, setActive] = useState(1)
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState({message: "", status: false});
    const [size, setSize] = useState(3);

    const token = localStorage.getItem(STORAGE_NAME);

    useEffect(() => {
        setLoading(true)
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/applicant?size=" + size + "&page=" + (active - 1),
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object);
            props.setAppeal(res.data.object.object);
            console.log(res);
            setPageSize(res.data.object.totalPages)
            setLoading(false)
        }).catch((e) => {
            setLoading(false)
            console.log(e.message)
            setErrorMsg({
                status: true,
                message: "" + e.message
            });
        })
    }, [active, size]);

    const fileLoad = (id, name) => {
        if (id) {
            axios.get(API_URL + "/attach/" + id, {
                headers: {
                    'Authorization': token,
                }
            }).then((r) => {
                console.log(r)
                const type = r.headers['content-type'].substring(r.headers['content-type'].indexOf("/_"));
                const blob = new Blob([r.data], {type: type, encoding: 'UTF-8'});
                const link = document.createElement('a');
                window.location.href = URL.createObjectURL(blob);
                link.download = '' + name + ' arizasi.' + type;
                link.click()
            })
        }
    };

    return (
        <div className="your-appeal-item-section">
            {
                errorMsg.status ?
                    <div style={{width: 100 + "%", textAlign: "center", paddingTop: "100px", fontSize: "45px"}}>
                    <span>
                        {errorMsg.message}
                    </span>
                    </div> :
                    loading ? <div style={{width: 100 + "%", textAlign: "center", paddingTop: "100px"}}>
                            <CircularProgress/>
                        </div> :
                        <>
                            {appeal && appeal.map((item, i) =>
                                <div className="content" key={i} value={item?.id}>
                                    <div className="document-text">
                                        <div className="document-text-title">
                                            <h4>{props.t("Subject of the appeal")}:</h4>
                                            <p>{item?.title}</p>
                                        </div>
                                        <div className="document-text-item">
                                            <p>{item?.description}</p>
                                        </div>
                                    </div>
                                    <div className="categories">
                                        <ul>
                                            <li>
                                                <label htmlFor="">{props.t("Category of treatment")}</label>
                                                <div className="category-item">{item?.section?.title[i18]}</div>
                                            </li>
                                            <li>
                                                <label htmlFor="">{props.t("File")}</label>
                                                <div
                                                    title={item?.attachmentsId ? props.t("Download the application") : props.t("Doc not found")}
                                                    onClick={(e) => {
                                                        item?.attachmentsId ? fileLoad(item?.attachmentsId[0], item?.applicant?.fullName) : console.log("doc not found")
                                                    }} style={{textAlign: "center", cursor: "pointer"}}
                                                    className="file-item">
                                                    <GetAppIcon/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <CheckboxConfidensial top={item?.top}/>
                                </div>
                            )}

                            {/* <UserAppealItem /> */}
                            <div className="content-line"/>
                            <div className="new-request">
                                <span style={{cursor: "pointer"}} onClick={() => {
                                    console.log(appeal)
                                    history.push("/applicantAppeal")
                                    window.scrollTo(0, 0)
                                }}>{props.t("Create a new appeal")}</span>
                            </div>
                            <div style={{clear: "both"}}/>
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
        </div>
    );
}

export default withTranslation()(YourAppealSection);
