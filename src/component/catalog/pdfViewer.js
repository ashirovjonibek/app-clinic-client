import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Dialog from "@material-ui/core/Dialog";

const PdfViewer=({url,open,setOpen,setUrl})=> {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (

            <Dialog fullWidth={true} open={open} onClose={()=>{
                setOpen(false);
                setUrl("")
            }
            }>
                {
                    url&&<div
                    style={{
                        height: "80vh",
                        overflow:"auto",
                    }}
                >
                        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js">
                            <Viewer
                                fileUrl={url}
                                plugins={[defaultLayoutPluginInstance]}
                                renderError={console.log}
                            />
                        </Worker>


                    </div>
                }
            </Dialog>

    );
}

export default PdfViewer;
