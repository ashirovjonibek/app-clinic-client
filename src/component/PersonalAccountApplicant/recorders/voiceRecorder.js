import React, {useState} from "react";
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
import Swal from "sweetalert2";
import green from "@material-ui/core/colors/green";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../../utils/constant";

const VoiceRecorder = (props) => {
    const [audioDetails, setAudioDetails] = useState({
        url: null,
        blob: null,
        chunks: null,
        duration: {
            h: 0,
            m: 0,
            s: 0
        }
    });

    const sendAudio= (file) => {
        if (file) {
            props.setRecord({
                status:false,
                name:""
            });
            Swal.fire({
                title: "Audio arizaga biriktirish uchun saqlansinmi?",
                icon: "warning",
                confirmButtonColor: green[400],
                confirmButtonText: "Ha",
                cancelButtonText: "Yo'q",
                showCancelButton: true,
            }).then((confirm) => {
                if (confirm.isConfirmed) {
                    const formData = new FormData();
                    formData.append("file", file);
                    axios({
                        url: API_URL + '/attach/upload',
                        method: "POST",
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization:localStorage.getItem(STORAGE_NAME)
                        },
                        data: formData
                    }).then(res => {

                            Swal.fire("Audio saqlandi","","success").then((confirm)=>{
                                console.log(res);
                                props.setValues({
                                    ...props.values,
                                    audioId:res?.data?.object
                                })
                            })
                        }
                    )
                }else {
                    props.setRecord({
                        status:true,
                        name:"video"
                    });
                }
            }).catch((err)=>{
                Swal.fire("Xatolik yuz berdi","","error").then((confirm)=>{
                    props.setRecord({
                        status:true,
                        name:"video"
                    });
                })
            })
        }
    }


    const handleAudioStop=(data)=>{
        console.log(data);
        setAudioDetails(data);
    };

    const handleReset=()=> {
        const reset = {
            url: null,
            blob: null,
            chunks: null,
            duration: {
                h: 0,
                m: 0,
                s: 0
            }
        };
        setAudioDetails(reset);
    }

    return (
        <div>
            <Recorder
                record={true}
                title={"Ovozni yozib olish"}
                audioURL={audioDetails.url}
                showUIAudio
                duration={5000}
                handleAudioStop={data => handleAudioStop(data)}
                handleAudioUpload={data => sendAudio(data)}
                handleReset={() => handleReset()}
                mimeTypeToUseWhenRecording={`audio/webm`}
            />
        </div>
    )
};

export default VoiceRecorder