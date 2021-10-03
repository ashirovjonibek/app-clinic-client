import React, {useEffect, useState} from "react";
import ModeratorPerformerItem from "./ModeratorPerformerItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import CustomPagination from "../catalog/Pagenation";
import {withTranslation} from "react-i18next";
import Dialog from "@material-ui/core/Dialog";

const ModeratorPerformerSection = ({t,sts}) => {
    const [activeItems, setActiveItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [size, setSize] = useState(3);
    const [active, setActive] = useState(1);
    const [e, setE] = useState(false);
    const [player, setPlayer] = useState({
        open: false,
        name: "",
        resource: ""
    });
    let token = localStorage.getItem(STORAGE_NAME);
    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + '/document/applications?size=' + size + '&page=' + (active - 1)+"&sts="+sts,
            headers: {
                Authorization: token
            }
        }).then((r) => {
            // console.log(r);
            setActiveItems(r.data.object);
            setTotal(r.data.totalPages)
        })
    }, [active, size]);

    const refresh = () => {
        axios({
            method: 'get',
            url: API_URL + '/document/applications?size=' + size + '&page=' + (active - 1)+"&sts="+sts,
            headers: {
                Authorization: token
            }
        }).then((r) => {
            console.log(r);
            setActiveItems(r.data.object);
            setTotal(r.data.totalPages)
        })
    };


    return (
        <div className="moderator-performer-section">

            {
                        activeItems && activeItems.map((item, i) =>
                        <ModeratorPerformerItem sts={sts} setPlayer={setPlayer} refresh={refresh} key={i} item={item} />)

            }
            <div style={{clear: "both"}}>

            </div>
            {
                activeItems.length > 0 ? <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                        <CustomPagination
                            pageLength={total}
                            setActive={setActive}
                            active={active}
                            size={size}
                            setSize={setSize}
                        />
                    </div> :
                    <div style={{
                        marginTop: "25px", textAlign: "center"
                    }
                    }>{t("Applications are not available")}!!!</div>
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

export default withTranslation()(ModeratorPerformerSection);
