import React, {useEffect, useState} from "react";
import DocumentProsses from "../DocumentProsses";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';


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
                                Осталось:
                            </div>
                            <div className="date-item">
                                {d.getDate()} kun
                            </div>
                        </div>
                    </div>
                    <RequestTheme check={props?.item?.application?.top} label={props?.item?.application?.title} description={props?.item?.application?.description}/>
                    {
                        !edit?<div className="container" onClick={()=>setEdit(true)} style={{display:"block" ,textAlign:"right",textDecoration:"underline",cursor:"pointer"}}><EditIcon titleAccess="Tahrirlash"/></div>:
                            <div className="container">
                                <div style={{display:"inline-block"}}>
                                    <FormControl error={e} className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label1">Listner</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label1"
                                            id="demo-simple-select1"
                                            onChange={(e)=>{
                                                setId(e.target.value)
                                            }}
                                        >
                                            {
                                                items&&items.map((item,i)=>
                                                    <MenuItem key={i} value={item?.id}>{item?.fullName}</MenuItem>
                                                )
                                            }

                                        </Select>
                                        {
                                            e?<FormHelperText error>Iltiomos listner tanlang</FormHelperText>:""
                                        }
                                    </FormControl>
                                </div>
                                <div style={{display:"inline-block",float:"right"}}>
                                    <FormControl style={{paddingTop:"10px"}} className={classes.formControl}>
                                        <Button  variant="contained" onClick={()=>setEdit(false)}>Bakor qilish</Button>
                                    </FormControl>
                                    <FormControl style={{paddingTop:"10px"}} className={classes.formControl}>
                                        <Button onClick={uploadAppeal} variant="contained" color="primary">
                                            Saqlash
                                        </Button>
                                    </FormControl>
                                </div>
                                <div style={{clear:"both"}}></div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ModeratorAppealItem;
