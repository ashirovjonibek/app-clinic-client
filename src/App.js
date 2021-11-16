import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom'
import Container from './container'
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";

function App() {

    const [refresh,setrefresh]=useState(false);
    const location=useLocation();
    const eye = useSelector(state => state.theme)
    console.log("eye", eye.eye);

    useEffect(()=>{
        console.log("rendred")
        if(eye.eye == "3"){

            $("p,a,h1,h2,h3,h4,h5,h6,li,ul,div,span,body,header,section,footer,navbar,button,input,label,form,i,.fa,.line_count_two").css({background:"#000000",color:"yellow"})
            // $("p,a,h1,h2,h3,h4,h5,h6,li,ul,div,span,navbar,button,input,label,form").css({ fontSize:"101%"})
        } else if(eye.eye == "4"){
            $("p,a,h1,h2,h3,h4,h5,h6,li,ul,div,span,body,header,section,footer,navbar,button,input,label,form,i,.fa,.line_count_two").css({background:"#000000",color:"yellow"})
            // $("p,a,h1,h2,h3,h4,h5,h6,li,ul,div,span,navbar,button,input,label,form").css({ fontSize:"101%"})
            $("img").css("opacity","0")
            $("video").css("opacity","0")
        }else if(eye.eye == 1 || eye.eye == 2){
            $("p,a,h1,h2,h3,h4,h5,h6,li,ul,div,span,body,header,section,footer,navbar,button,input,label,form,i,.fa,.line_count_two").css({background:"",color:""})
            // $("p,a,h1,h2,h3,h4,h5,h6,li,ul,div,span,navbar,button,input,label,form").css({ fontSize:"101%"})
            $("img").css("opacity","1")
            $("video").css("opacity","1")
        }
        // $("img").css("opacity","0")
        // $("video").css("opacity","0")
    },[eye.eye]);
    

    return (
        <>
            <Container/>
        </>
    );
}

export default App;
