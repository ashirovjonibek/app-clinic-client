import React, {useState} from "react";
import VideoRecorder from 'react-video-recorder'
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../../utils/constant";
import green from "@material-ui/core/colors/green";
import Card from "@material-ui/core/Card";
import Swal from "sweetalert2";


const CustomVideoRecorder = (props) => {
    const [video, setVideo] = useState();

    const sendVideo = () => {
        if (video) {
            props.setRecord({
                status:false,
                name:""
            });
            Swal.fire({
                title: "Video arizaga biriktirish uchun saqlansinmi?",
                icon: "warning",
                confirmButtonColor: green[400],
                confirmButtonText: "Ha",
                cancelButtonText: "Yo'q",
                showCancelButton: true,
            }).then((confirm) => {
                if (confirm.isConfirmed) {
                    const formData = new FormData();
                    formData.append("file", video);
                    axios({
                        url: API_URL + '/attach/upload',
                        method: "POST",
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization:localStorage.getItem(STORAGE_NAME)
                        },
                        data: formData
                    }).then(res => {

                        Swal.fire("Video saqlandi","","success").then((confirm)=>{
                            console.log(res);
                            props.setValues({
                                ...props.values,
                                videoId:res?.data?.object
                            });
                            // console.log(MediaDevices().getAll())
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
    return (
        <div style={{
            padding: "5px"
        }}>
            <Card>

                <VideoRecorder
                    style={{width: "100%", height: "100%"}}
                    //
                    // videoControlsList="download" disablepictureinpicture showReplyControls={true}
                    onRecordingComplete={e => {
                        setVideo(e);
                        console.log(e)
                    }}
                    timeLimit={60000}
                    // chunkSize={250}
                    constraints={{
                        audio: true,
                        video: true
                    }}
                    // countdownTime={3000}
                    // dataAvailableTimeout={500}
                    // disablePictureInPicture
                    isFlipped
                    mimeType="video/webm;codecs=vp8,opus"
                    // isOnInitially
                    // onError={function noRefCheck(){}}
                    // onOpenVideoInput={function noRefCheck(){}}
                    // onRecordingComplete={function noRefCheck(){}}
                    // onStartRecording={function noRefCheck(){}}
                    // onStopRecording={function noRefCheck(){}}
                    // onStopReplaying={function noRefCheck(){}}
                    // onTurnOffCamera={function noRefCheck(){}}
                    // onTurnOnCamera={function noRefCheck(){}}
                    // renderActions={function noRefCheck(){}}
                    // renderDisconnectedView={function noRefCheck(){}}
                    // renderErrorView={function noRefCheck(){}}
                    // renderLoadingView={function noRefCheck(){}}
                    // renderUnsupportedView={function noRefCheck(){}}
                    // renderVideoInputView={function noRefCheck(){}}
                    showReplayControls
                    // t={function noRefCheck(){}}
                    videoControlsList="download"
                />
                <div style={{
                    width: "100%",
                    marginTop: "15px"
                }}>
                    <button style={{
                        float: "right",
                        padding: "6px 8px",
                        marginBottom: "15px",
                        marginRight: "15px"
                    }} className="green-button" onClick={() => {
                        props.setRecord({
                            status: false,
                            name: ""
                        })
                    }}>Bekor qilish
                    </button>
                    <button style={{
                        float: "right",
                        padding: "6px 8px",
                        marginBottom: "15px",
                        marginRight: "15px",
                        backgroundColor: green[400],
                        color: "white",
                        borderRadius: "3px"
                    }} className="green-button" onClick={() => {
                        sendVideo()
                    }}>Saqlash
                    </button>
                </div>
            </Card>
        </div>
    )
};
export default CustomVideoRecorder;