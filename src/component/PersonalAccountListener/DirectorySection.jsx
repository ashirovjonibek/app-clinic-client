import React, {useEffect, useState} from "react";
import DirectoryPdf from "./DirectoryPdf";
import {withTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {allRoles} from "../../routes/authRoles";
import {Add} from "@material-ui/icons";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import {green, red} from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import PdfViewer from "../catalog/pdfViewer";

const DirectorySection = ({t}) => {
    const user = useSelector(state => state.meReducer);
    const [files, setFiles] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [url, setUrl] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios({
            method: 'get',
            headers: {
                Authorization: localStorage.getItem(STORAGE_NAME)
            },
            url: API_URL + '/attach/normative-legal-base'
        }).then((res) => {
            console.log(res)
            setFiles(res?.data?.object);
        })
    }, [refresh]);

    const fileUpload = (e) => {
        console.log(e.target.files[0]);
        if (e?.target?.files[0]) {
            let file = new FormData();
            file.append("file", e.target.files[0]);
            Swal.fire({
                confirmButtonText: "Ha",
                confirmButtonColor: green[400],
                cancelButtonColor: red[400],
                cancelButtonText: "Yo'q",
                showCancelButton: true,
                title: "File yuklansinmi!!!",
                icon: "warning"
            }).then((confirm) => {
                if (confirm.isConfirmed) {
                    const config = {
                        onUploadProgress: function (progressEvent) {
                            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                            console.log(percentCompleted)
                        }
                    }
                    axios({
                        method: 'post',
                        url: API_URL + '/attach/upload',
                        headers: {
                            Authorization: localStorage.getItem(STORAGE_NAME)
                        },
                        data: file, config
                    }).then((result) => {
                        Swal.fire("File yuklandi!!!", "", "success").then((re) => {
                            setRefresh(!refresh)
                            e.target.files = null
                        })
                    })
                }
            })
        }
    };

    const refreshF = () => {
        setRefresh(!refresh);
    };

    return (
        <>
            <h3 style={{paddingTop: "15px"}}><b>
                {
                    t("Legal and regulatory framework")
                }
            </b></h3>
            <div className="directory-section">
                {
                    user.role[0] === allRoles.ADMIN[0] ?
                        <div className="directory-pdf">
                            <div className="directory-file">
                                <span>
                                    <label htmlFor="uploadFile">
                                        <Add style={{
                                            width: "100%",
                                            fontSize: "68px",
                                            cursor: "pointer",
                                            marginTop: "18px"
                                        }}/>
                                            <span>
                                                Add file
                                            </span>
                                    </label>
                                    <input id="uploadFile" onChange={fileUpload} type="file" accept="*"/>
                                </span>

                            </div>
                        </div>
                        : ""
                }
                {
                    files && files.map((item, i) =>
                        <DirectoryPdf setOpen={setOpen} setUrl={setUrl} role={user?.role[0]} refresh={refreshF} key={i}
                                      item={item}/>
                    )
                }
            </div>
            <PdfViewer url={url} open={open} setOpen={setOpen} setUrl={setUrl}/>
        </>
    );
}

export default withTranslation()(DirectorySection);
