import React, {useEffect, useState} from "react";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import UserItem from "../UserItem";
import ButtonDefault from "../ButtonDefault";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Swal from "sweetalert2";
import {withTranslation} from "react-i18next";
import {Audiotrack, FileCopy, Videocam} from "@material-ui/icons";
import i18next from "i18next";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ModeratorPerformerItem = (props) => {
    const { t } = props;

    const [edit, setEdit] = useState(false);
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [items, setItems] = useState([]);
    const [id, setId] = useState("");
    const [e, setE] = useState(false);
    let date = new Date((new Date(props?.item?.application?.deadLineDate).getTime()) - (new Date().getTime())).getDate();
    let s;

    if ((new Date(props?.item?.application?.deadLineDate).getTime()) - (new Date().getTime()) > 0) {
        s = "" + date + " " + props.t("days");
    } else {
        s = "0 " + props.t("days");
        date = 0
    }

    useEffect(() => {
        let url=props.sts==="SUPER_MODERATOR"?'/section':'/auth/listenerBySection?sectionId='+props?.item?.sectionId;
        const config = {
            method: 'get',
            url: API_URL + url,
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };

        axios(config)
            .then(function (response) {
                let a = [];
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [props]);

    const uploadAppeal = () => {
        if (id) {
            let url=props.sts==="SUPER_MODERATOR"?'/document/set/section':'/document/set/listener';
            Swal.fire({
                title: t("Confirmation") + "!!!",
                text: t("Ushbu ma'lumot o'zgarishini tasdiqlaysizmi")+"?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: t("Confirmation")
            }).then((result) => {
                if (result.isConfirmed) {
                    axios({
                        method: 'put',
                        url: API_URL + url,
                        params: props.sts==="SUPER_MODERATOR"?{
                            documentId: props.item.id,
                            sectionId: id
                        }:{
                            documentId: props.item.id,
                            listenerId: id
                        },
                        headers: {
                            Authorization: localStorage.getItem(STORAGE_NAME),
                            'Content-Type': 'application/json'
                        }
                    }).then((r) => {
                        Swal.fire(
                            t("Saved"),
                            '',
                            'success'
                        ).then((result) => {
                                console.log(r);
                                props?.refresh()
                            }
                        )
                    })
                }

            })
        } else {
            setE(true)
        }


    };
    return (
        <div className="moderator-performer-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name with-margin-20">
                        <UserName height="45px" width="45px" text={props?.item?.application?.applicant?.fullName}/>
                        {/*<div className="id">id: 12345</div>*/}
                    </div>
                    <div className="request-content-title-date">
                        <div className="date-label">
                            Осталось:
                        </div>
                        <div
                            style={{backgroundColor: date > 10 ? "#63AA55" : date <= 10 && date > 5 ? "#FBCE0E" : "#d80027"}}
                            className="date-item">
                            {s}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <RequestTheme label={props?.item?.application?.title}
                                  description={props?.item?.application?.description}
                                  check={props?.item?.application?.top}/>
                    {/*<div className="category-audio"/>*/}
                    <div className="categories">
                        <ul>
                            <li>
                                <label htmlFor="">{props.t("Category of treatment")}</label>
                                <div
                                    className="file">{props?.item?.application?.section?.title[i18next.language]}</div>
                            </li>
                            <li style={{
                                display: props?.item?.application?.attachmentsId ? "" : "none",
                                margin: '0 5px 0 5px'
                            }}>
                                <label htmlFor="">{props.t("File")}</label>
                                <div
                                    title={props?.item?.application?.attachmentsId ? props.t("Download the application") : props.t("Doc not found")}
                                    style={{textAlign: "center", cursor: "pointer"}}
                                    className="file">
                                    {props?.item?.application?.attachmentsId?<a href={API_URL + '/attach/' + props?.item?.application?.attachmentsId[0]}><FileCopy/></a>:""}
                                </div>
                            </li>
                            <li style={{display: props?.item?.application?.video ? "" : "none", margin: '0 5px 0 5px'}}>
                                <label htmlFor="">{props.t("Video")}</label>
                                <div
                                    title={props?.item?.application?.video ? props.t("Download the application") : props.t("Doc not found")}
                                    onClick={(e) => {
                                        props?.setPlayer({
                                            open: true,
                                            name: "video",
                                            resource: props?.item?.application?.video
                                        })
                                    }} style={{textAlign: "center", cursor: "pointer"}}
                                    className="file">
                                    <Videocam/>
                                </div>
                            </li>
                            <li style={{display: props?.item?.application?.audio ? "" : "none", margin: '0 5px 0 5px'}}>
                                <label htmlFor="">{props.t("Audio")}</label>
                                <div
                                    title={props?.item?.application?.audio ? props.t("Download the application") : props.t("Doc not found")}
                                    onClick={(e) => {
                                        props?.setPlayer({
                                            open: true,
                                            name: "audio",
                                            resource: props?.item?.application?.audio
                                        })
                                    }} style={{textAlign: "center", cursor: "pointer"}}
                                    className="file">
                                    <Audiotrack/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-line"/>

                {
                    !edit ? <div className="container" style={{display: "block", textAlign: "right"}}>
                            <div className="avatar"
                                 style={{display: props.item.checkedBy ? "" : "block", textAlign: "right"}}>
                                {props.item.checkedBy ? <UserItem p={props.item.checkedBy}/> : ""}
                                <ButtonDefault text={props.sts==="SUPER_MODERATOR"?"Bo'lim biriktirish":props.t("Replace the performer")} onClick={() => setEdit(true)}/>
                            </div>
                            {
                                props?.item?.forwardMessage?<div style={{display:"block",width:"100%",textAlign:"left",marginTop:"10px"}}>
                                    <span>Yo'naltirish xabari: </span>{props?.item?.forwardMessage}
                                </div>:""
                            }
                        </div> :
                        <div className="container">
                            <div style={{display: "inline-block"}}>
                                <FormControl error={e} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label1">{props.sts==="SUPER_MODERATOR"?"Bo'lim biriktirish":"Ijroji biriktirish"}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label1"
                                        id="demo-simple-select1"
                                        onChange={(e) => {
                                            setId(e.target.value)
                                        }}
                                    >
                                        {
                                            items && items.map((item, i) =>
                                                <MenuItem key={i} value={item?.id}>{props.sts!=="SUPER_MODERATOR"?item?.fullName:item?.title[i18next.language]}</MenuItem>
                                            )
                                        }

                                    </Select>
                                    {
                                        e ? <FormHelperText error>Iltiomos bo'lim tanlang</FormHelperText> : ""
                                    }
                                </FormControl>
                            </div>
                            <div style={{display: "inline-block", float: "right"}}>
                                <FormControl style={{paddingTop: "10px"}} className={classes.formControl}>
                                    <Button variant="contained"
                                            onClick={() => setEdit(false)}>{props.t("Cancel")}</Button>
                                </FormControl>
                                <FormControl style={{paddingTop: "10px"}} className={classes.formControl}>
                                    <Button onClick={uploadAppeal} variant="contained" color="primary">
                                        {props.t("Save")}
                                    </Button>
                                </FormControl>
                            </div>
                            <div style={{clear: "both"}}/>
                        </div>
                }
            </div>
        </div>
    );
}

export default withTranslation()(ModeratorPerformerItem);
