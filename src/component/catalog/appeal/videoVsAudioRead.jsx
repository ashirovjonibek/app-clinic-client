import { Modal } from 'antd';
import React from 'react';

const AudioVidioReader=({url,type,open,setOpen})=>{
    return(
        <Modal title={type==="v"?"Video":"Audio"} style={{maxHeight:'550px'}} width={750} visible={open} footer={false} onCancel={()=>setOpen(false)}>
            {type==='v'?
                <video width="100%" src={url} controls autoPlay={false}/>:
                <audio style={{width:"100%"}} src={url} controls autoPlay={false}/>
        }
        </Modal>
    )
}

export default AudioVidioReader