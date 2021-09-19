import React, {useEffect, useState} from "react";
import AppealItem from "./AppealItem";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {CustomPagination} from "../catalog/Pagenation";
import {Loading} from "../catalog/Loading";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import AttachAnswer from "./AttachAnswer";

const AppealSection = (props) => {
    let token = localStorage.getItem(STORAGE_NAME);
    const [size, setSize] = useState(3);
    const [active, setActive] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [inpApps, setInpApps] = useState([]);
    const [items, setItems] = useState([]);
    const [nS, setNs] = useState(1);

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'get',
            url: API_URL + "/document/sending?size=" + size + "&page=" + (active - 1),
            headers: {
                'Authorization': token
            }
        }).then((r) => {
            console.log(r);
            setTotal(r.data.totalPages);
            setInpApps(r.data.object);
            setLoading(false)
        })

    }, [active, size]);

    const refresh = () => {
        setLoading(true);
        if (nS<3){
            axios({
                method: 'get',
                url: API_URL + "/document/sending?size=" + size + "&page=" + (active - 1),
                headers: {
                    'Authorization': token
                }
            }).then((r) => {
                console.log(r);
                setTotal(r.data.totalPages);
                setInpApps(r.data.object);
                setItems(r.data.object);
                setLoading(false);
            })
        }else {
            denied()
        }
    };

    const byStatus = (status) => {
        setInpApps([]);
        if (status === "INPROCESS") {
            let a = []
            items.map((item) => {
                if (item.status === status) {
                    a.push(item)
                }
            });
            setInpApps(a);
        }

    };

    const denied=()=>{
        setLoading(true);
        axios({
            method: 'get',
            url: API_URL + "/document/listener/denied",
            headers:{
                Authorization:token
            }
        }).then((r)=>{
            console.log(r);
            setInpApps(r.data);
            setLoading(false);
            setTotal(1);
        }).catch((e)=>{
            setLoading(false)
        });
    };
    // console.log(inpApps)
    return (
        <>
            {
                loading ? <Loading/> : <div className="appeal-section">
                    <div className="content-top">
                        <p style={{padding: "0px 10px", border: nS === 1 ? "1px solid rgba(0,0,0,0.5)" : ""}}
                           className="request-items">
                            <Link onClick={() => {
                                refresh()
                                setNs(1)
                            }}>{props.t("New answers")}</Link>
                        </p>
                        <p style={{padding: "0px 10px", border: nS === 2 ? "1px solid rgba(0,0,0,0.5)" : ""}}
                           className="request-items active">
                            <Link onClick={() => {
                                byStatus("INPROCESS")
                                setNs(2)
                            }}>{props.t("Responses received")}</Link>
                        </p>
                        <p style={{padding: "0px 10px", border: nS === 3 ? "1px solid rgba(0,0,0,0.5)" : ""}}
                           className="request-items active">
                            <Link onClick={() => {
                                denied()
                                setNs(3)
                            }}>{props.t("Rejected answers")}</Link>
                        </p>
                    </div>
                    {
                        inpApps && inpApps.map((item, i) =>
                            nS===3?<AttachAnswer refresh={refresh} item={item}/>:
                            <AppealItem refresh={refresh} key={i} item={item}/>
                        )
                    }


                    <div style={{clear: "both"}}></div>

                    <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>

                        {total > 0 ? <CustomPagination
                            pageLength={total}
                            setActive={setActive}
                            active={active}
                            size={size}
                            setSize={setSize}
                        /> : <div style={{textAlign: "center", paddingTop: "35px"}}>
                            Yangi arizalar mavjud emas!!!
                        </div>}
                    </div>
                </div>
            }
        </>
    );
}

export default withTranslation()(AppealSection);
