import React from "react";
import {CircularProgress} from "@material-ui/core";

export const Loading=()=>{
    return(
        <div style={{width:"100%",textAlign:"center",paddingTop:"65px"}}>
            <CircularProgress style={{width:"75px",height:"75px"}}/>
        </div>
    )
}