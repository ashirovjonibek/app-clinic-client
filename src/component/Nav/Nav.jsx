import React from "react";
import NavTop from "./NavTop";
import NavCenter from "./NavCenter";
import NavBottom from "./NavBottom";

const Nav = () => {
    return (
        <nav className="nav" >
            <NavTop />
            <NavCenter />
            <NavBottom />
        </nav>
    );
}

export default Nav;
