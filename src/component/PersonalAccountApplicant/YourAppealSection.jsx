import React, {useState, useEffect} from "react";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import CheckboxConfidensial from "../CheckboxConfidensial";
import {FileCopy, Audiotrack, Videocam} from '@material-ui/icons';
import {CircularProgress} from "@material-ui/core";
import {withTranslation} from "react-i18next";
import CustomPagination from "../catalog/Pagenation";
import Dialog from "@material-ui/core/Dialog";
import i18next from "i18next";
import ContentTop from "../ContentTop";
import {blue} from "@material-ui/core/colors";
import FileReader from "../catalog/FileReader";

const YourAppealSection = (props) => {
    const i18 = localStorage.getItem('I18N_LANGUAGE')

    const history = useHistory();
    const [appeal, setAppeal] = useState([]);
    const [pageSize, setPageSize] = useState(0)
    const [active, setActive] = useState(1)
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState({message: "", status: false});
    const [size, setSize] = useState(3);
    const [show,setShow]=useState(false);

    const [appealFilter, setAppealFilter] = useState({
        status: "ALL",
        sectionId: 0,
        search: ""
    });

    const [player, setPlayer] = useState({
        open: false,
        name: "",
        resource: ""
    });

    const token = localStorage.getItem(STORAGE_NAME);

    useEffect(() => {
        setLoading(true)
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/applicant?size=" + size + "&page=" + (active - 1) +
                "&search=" + appealFilter.search +
                "&status=" + appealFilter.status +
                "&sectionId=" + appealFilter.sectionId,
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object);
            props.setAppeal(res.data.object.object);
            console.log(res.data.object.object);
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
    }, [active, size, appealFilter]);

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
            <ContentTop appealFilter={appealFilter} setAppealFilter={setAppealFilter} />
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
                                        <div className="document-text-item" style={{maxHeight:show?"":"435px",overflow:!show?"hidden":""}}>
                                            <p>{item?.description}</p>
                                        </div>
                                        <span style={{color:blue[400],cursor:"pointer"}} onClick={()=>setShow(!show)}><u>{show?"Berkitish":"Ko'rish"}</u></span>
                                    </div>
                                    <div className="categories">
                                        <ul>
                                            <li>
                                                <label htmlFor="">{props.t("Category of treatment")}</label>
                                                <div
                                                    className="category-item">{item?.section?.title[i18next.language]}</div>
                                            </li>
                                            <li style={{
                                                display: item?.attachmentsId ? "" : "none",
                                                margin: '0 5px 0 5px'
                                            }}>
                                                <label htmlFor="">{props.t("File")}</label>
                                                <div
                                                    title={item?.attachmentsId ? props.t("Download the application") : props.t("Doc not found")}
                                                    style={{textAlign: "center", cursor: "pointer"}}
                                                    className="file-item">
                                                    {
                                                        item?.attachmentsId ?
                                                            <a href={API_URL + '/attach/' + item?.attachmentsId[0]}><FileCopy/></a> : ""
                                                    }
                                                </div>
                                            </li>
                                            <li style={{display: item?.video ? "" : "none", margin: '0 5px 0 5px'}}>
                                                <label htmlFor="">{props.t("Video")}</label>
                                                <div
                                                    title={item?.video ? props.t("Download the application") : props.t("Doc not found")}
                                                    onClick={(e) => {
                                                        setPlayer({
                                                            open: true,
                                                            name: "video",
                                                            resource: item?.video
                                                        })
                                                    }} style={{textAlign: "center", cursor: "pointer"}}
                                                    className="file-item">
                                                    <Videocam/>
                                                </div>
                                            </li>
                                            <li style={{display: item?.audio ? "" : "none", margin: '0 5px 0 5px'}}>
                                                <label htmlFor="">{props.t("Audio")}</label>
                                                <div
                                                    title={item?.audio ? props.t("Download the application") : props.t("Doc not found")}
                                                    onClick={(e) => {
                                                        setPlayer({
                                                            open: true,
                                                            name: "audio",
                                                            resource: item?.audio
                                                        })
                                                    }} style={{textAlign: "center", cursor: "pointer"}}
                                                    className="file-item">
                                                    <Audiotrack/>
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
                                    // console.log(appeal)
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
            <Dialog fullWidth={true} open={player.open}
                    onClose={() => setPlayer({open: false, resource: "", name: ""})}>
                <div style={{
                    width: "100%",
                    position: "relative"
                }}>
                    <span onClick={() => {
                        setPlayer({
                            open: false,
                            name: "",
                            resource: ""
                        })
                    }} style={{
                        position: "absolute",
                        zIndex: 1,
                        fontSize: "16px",
                        fondWeight: "bold",
                        color: player.name === "audio" ? "black" : "white",
                        right: 0,
                        padding: "10px",
                        cursor: "pointer"
                    }}><b>X</b></span>
                </div>
                <div style={{width: "100%"}}>
                    {
                        player.name === "video" ? <video width={"100%"} src={API_URL + player?.resource} controls/>
                            :
                            player.name === "audio" ?
                                <audio style={{width: "100%", marginTop: "25px"}} src={API_URL + player?.resource}
                                       controls/> : ""
                    }
                </div>
            </Dialog>
        </div>
    );
}

export default withTranslation()(YourAppealSection);
