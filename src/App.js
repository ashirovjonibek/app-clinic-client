import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom'
import Container from './container'
import $ from "jquery";
import { useSelector} from "react-redux";
import axios from "axios";

function App() {
    const location = useLocation();
    const eye = useSelector(state => state.theme)
    console.log("eye", eye.eye);

    useEffect(() => {
        console.log("rendred");
        if (eye.eye == "3") {
            $("p,a,h1,h2,h3,h4,h5,h6,li,ul,div,span,body,header,section,footer,button,input,label,form,i,select,option,hr,table,th,thead,tbody,tr,td,textarea,.fa,.line_count_two").css({
                background: "#000000",
                color: "yellow"
            });
            $("div.banner-image").css("background-color","rgba(0,0,0,0)")
            $("video").css("z-index","1")
        }
        if (eye.imgless) {
            $("img").css("opacity", "0");
            $(".fadeInLeft").css({
                fontSize: "65px"
            });
            $("div.we-are-here").css("background","url('')");
            $("video").css("opacity", "0");
        } else if (eye.eye == 1) {
            $("p,a,h1,h2,h3,h4,h5,h6,li,ul,div,span,body,header,section,footer,navbar,button,input,select,option,label,textarea,form,i,.fa,.line_count_two").css({
                background: "",
                color: ""
            });
            $("li.nav-item > a.nav-link,.tel-number,#academy-name,#select-land-id").css("color", eye?.scroll>0?"black":"white");
            $("#select-land-id").css('background-color','rgba(0,0,0,0)')
            $("img").css("opacity", "1");
            $("video").css("opacity", "1")
        }
    }, [eye.eye,eye.imgless,location]);


    useEffect(()=>{
        let file=new FormData();
        file.append("map","aaaa");
        file.append("map1","aaaa1");
        file.append("map2","aaaa2");
        axios({
            method:'post',
            url:'localhost:9090/api/message/aa',
            data:file
        })
    },[]);


    return (
        <>
            <Container/>
        </>
    );
}

export default App;
