import React, {useEffect} from 'react'
import {Dialog} from "@material-ui/core";
import {API_URL} from "../../utils/constant";

const FileReader=({open,setOpen, id})=>{

    // useEffect(()=>{
    //     let a=document.createElement('a');
    //     a.href=API_URL+'/attach/'+id;
    //     a.target='_blank';
    //     a.click();
    // },[]);

    return(
        <Dialog fullWidth={true} open={false} onClose={()=>setOpen(false)}>
            {/*<iframe src={id?API_URL+'/attach/'+id:""} frameBorder="1" width="100%" height='50vh'>*/}

            {/*</iframe>*/}
        </Dialog>
    )
}

export default FileReader