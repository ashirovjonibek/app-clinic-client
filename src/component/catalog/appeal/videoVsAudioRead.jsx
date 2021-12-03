import {Modal} from 'antd';
import React, {useState} from 'react';

const AudioVidioReader = ({url, type, open, setOpen, setOption}) => {
    const [play, setPlay] = useState(false);
    return (
        <Modal title={type === "v" ? "Video" : "Audio"} style={{maxHeight: '550px'}} width={750} visible={open}
               footer={false} onCancel={() => {
            setOpen(false);
            setOption()
        }}>
            {type === 'v' && open ?
                <video width="100%" src={url} controls autoPlay={false}/> :
                <audio style={{width: "100%"}} src={url} controls autoPlay={false}/>
            }
        </Modal>
    )
}

export default AudioVidioReader