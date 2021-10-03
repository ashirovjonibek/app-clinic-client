import React, {useEffect, useState} from "react";
import DocumentProsses from "../DocumentProsses";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {withTranslation} from "react-i18next";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ModeratorAppealItem = (props) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [edit,setEdit]=useState(false);
    const [items,setItems]=useState([]);
    const [id,setId]=useState("");
    const [e,setE]=useState(false);


    let a=new Date(props?.item?.application?.deadLineDate);
    let b=new Date()
    let d=new Date(a.getTime()-b.getTime());
    const [listener,setListener]=useState("");

    const uploadAppeal=()=>{
        if (id){
            axios({
                method:'put',
                url:API_URL+'/document/set/listener',
                params:{
                    documentId:props.item.id,
                    listenerId:id
                },
                headers:{
                    Authorization:localStorage.getItem(STORAGE_NAME),
                    'Content-Type':'application/json'
                }
            }).then((r)=>{
                console.log(r)

            })
        }else {
            setE(true)
        }
    };

    useEffect(()=>{

        const config = {
            method: 'get',
            url: 'http://67.205.182.147:9090/api/auth/listeners',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };

        axios(config)
            .then(function (response) {
                let a=[];
                response?.data?.map((item)=>
                    props?.item?.application?.section?.id===item?.section?.id?a.push(item):""
                );
                setItems(a);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[props]);


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="moderator-appeals-item">
            <div className="content">
                <DocumentProsses status={props?.item?.application?.status} />
                <div className="request-content">
                    <div className="request-content-title">
                        <div className="request-content-title-name with-margin-20">
                            <UserName text={`${props?.item?.application?.applicant?.fullName}`} />
                        </div>
                        <div className="request-content-title-date">
                            <div className="date-label">
                                {props.t("Left")}:
                            </div>
                            <div style={{backgroundColor: d.getDate()>10?"#63AA55":d.getDate()<=10&&d.getDate()>5?"#FBCE0E":"#d80027"}} className="date-item">
                                {d.getDate()} {props.t("days")}
                            </div>
                        </div>
                    </div>
                    <RequestTheme check={props?.item?.application?.top} label={props?.item?.application?.title} description={props?.item?.application?.description}/>

                </div>
            </div>
        </div>
    );
}

export default withTranslation() (ModeratorAppealItem);
