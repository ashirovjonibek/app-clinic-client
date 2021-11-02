import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "./Home";
import FooterUsaid from "../Footer/FooterUsaid";
import video from "../../assets/a/Proclinics.mp4";
import back from "../../assets/img/prokratura_flag_slow.mp4";

const FirstHome = () => {
    return (
        <div style={{paddingBottom:0}}>
            <div style={{
                zIndex:500,
                position:"relative"
            }
            }>
                <Nav />
                <Home />
            </div>
            <div style={{position:"fixed",zIndex:0,top:0,bottom:0,width:"100vw"}}>
                <video muted loop autoPlay={true} width="100%" height="100%" style={{objectFit:"cover"}} src={back} />
            </div>
        </div>
    );
}

export default FirstHome;
