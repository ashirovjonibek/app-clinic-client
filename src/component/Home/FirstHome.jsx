import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "./Home";
import FooterUsaid from "../Footer/FooterUsaid";

const FirstHome = () => {
    return (
        <div >
            <Nav />
            <Home />
            <Footer />
            <FooterUsaid />
        </div>
    );
}

export default FirstHome;
