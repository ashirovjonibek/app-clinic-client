import React, {useEffect, useState} from "react";
import SupervisorResponsesRequestItem from "./SupervisorResponsesRequestItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import CustomPagination from "../catalog/Pagenation";
import {withTranslation} from "react-i18next";
import Dialog from "@material-ui/core/Dialog";


const SupervisorResponsesSection = ({t}) => {
    let token = localStorage.getItem(STORAGE_NAME);
    const [total, setTotal] = useState(0);
    const [active, setActive] = useState(1);
    const [size, setSize] = useState(3);
    const [answers, setAnswers] = useState([]);
    const [player, setPlayer] = useState({
        open: false,
        name: "",
        resource: ""
    });
    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/document/boss/answers?size=" + size + "&page=" + (active - 1),
            method: 'GET'
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                setAnswers(res?.data?.object);
                setTotal(res?.data?.totalPages)
            } else {

            }
        })
    }, [active, size]);

    const refresh = () => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/document/boss/answers?size=" + size + "&page=" + (active - 1),
            method: 'GET'
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                setAnswers(res?.data?.object);
                setTotal(res?.data?.totalPages)
            } else {

            }
        })
    };
    return (
        <div className="supervisor-response-section">
            {
                answers && answers.map((item, i) =>
                    <SupervisorResponsesRequestItem setPlayer={setPlayer} refresh={refresh} key={i} item={item}/>)
            }

            <div style={{clear: "both"}}/>
            {answers.length > 0 ? <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                    <CustomPagination
                        pageLength={total}
                        setActive={setActive}
                        active={active}
                        size={size}
                        setSize={setSize}
                    />
                </div> :
                <div style={{textAlign: "center", marginTop: "25px"}}>{t("Applications are not available")}!!!</div>}
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

export default withTranslation()(SupervisorResponsesSection);
