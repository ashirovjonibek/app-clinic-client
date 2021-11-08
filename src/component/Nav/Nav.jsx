import React from "react";
import NavTop from "./NavTop";
import NavCenter from "./NavCenter";
import NavBottom from "./NavBottom";

const Nav = ({setSearchVal}) => {
    return (
        <nav className="nav" >
            <NavTop />
            <NavCenter setSearchVal={setSearchVal} />
            <NavBottom />
        </nav>
    );
}

export default Nav;
