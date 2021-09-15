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
    const [edit,setEdit]=useState(false);
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [items,setItems]=useState([]);
    const [id,setId]=useState("");
    const [e,setE]=useState(false);
    let date=new Date((new Date(props?.item?.application?.deadLineDate).getTime())-(new Date().getTime())).getDate();
    let s;

    if ((new Date(props?.item?.application?.deadLineDate).getTime())-(new Date().getTime())>0){
        s=""+date+" kun";
    }else {s="0 kun";date=0};


    useEffect(()=>{

        const config = {
            method: 'get',
            url: API_URL +'/auth/listeners',
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

    const uploadAppeal=()=>{
        if (id){
            Swal.fire({
                title: 'Tasdiqlash!!',
                text: "Ushbu ma'lumot o'zgarishini tasdiqlaysizmi?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Tasdiqlash!'
            }).then((result) => {
                if (result.isConfirmed) {
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
                        Swal.fire(
                            'Saqlandi!',
                            '',
                            'success'
                        ).then((result)=>{
                                console.log(r);
                                props?.refresh()
                            }
                        )
                    })
                }

            })
        }else {
            setE(true)
        }


    };
    return (
        <div className="moderator-performer-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name with-margin-20">
                        <UserName height="45px" width="45px" text={props?.item?.application?.applicant?.fullName} />
                        {/*<div className="id">id: 12345</div>*/}
                    </div>
                    <div className="request-content-title-date">
                        <div className="date-label">
                            Осталось:
                        </div>
                        <div style={{backgroundColor: date>10?"#63AA55":date<=10&&date>5?"#FBCE0E":"#d80027"}} className="date-item">
                            {s}
                        </div>
                    </div>
                </div>
                <RequestTheme label={props?.item?.application?.title} description={props?.item?.application?.description} check={props?.item?.application?.top}/>
                {/*<div className="category-audio"/>*/}
                <div className="content-line"/>

                {
                    !edit?<div className="container"  style={{display:"block" ,textAlign:"right"}}>
                            <div className="avatar" style={{display:props.item.checkedBy?"":"block",textAlign:"right"}}>
                                {props.item.checkedBy?<UserItem p={props.item.checkedBy}/>:""}
                                <ButtonDefault text="Заменить исполнителя" onClick={()=>setEdit(true)} />
                            </div>
                    </div>:
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
    );
}

export default ModeratorPerformerItem;
