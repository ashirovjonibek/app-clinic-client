import React from 'react';
import './style.css'
import LogoImg from '../../assets/img/logo.svg'
import AddRess from "../../assets/icon/icon-adress.svg"
import EmailSvg from "../../assets/icon/icon-email.svg"
import ContactSvg from "../../assets/icon/icon-contact.svg"
import SearchIcon from "../../assets/icon/search-icon.svg"
// import IconRussian from "../../assets/icon/icon-russia.svg"
// import IconLanguage from "../../assets/icon/icon-language.svg"
import IconGlass from "../../assets/icon/icon-glass.svg"
import {AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import AppBarCollapse from "./AppBarCollapse";


const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    navigation: {
        backgroundColor: 'white',
        color: 'black'
    },
    toggleDrawer: {},
    appTitle: {}
};


function Header(props) {
    const {classes} = props;
    return (
        <div>
            <AppBar position="fixed" className={classes.navigation}>
                <Toolbar>
                    {/*<IconButton*/}
                    {/*    color="inherit"*/}
                    {/*    aria-label="Menu"*/}
                    {/*    className={classes.toggleDrawer}*/}
                    {/*>*/}
                    {/*    <MenuIcon/>*/}
                    {/*</IconButton>*/}
                    <IconButton>
                        <img style={{height: '80px'}} src={LogoImg} alt="logo"/>
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.appTitle}
                    >
                        <span><strong>Юридическая клиника</strong></span><br/>
                        Академии Генеральной прокуратуры<br/>
                        Республики Узбекистан.
                    </Typography>
                    <AppBarCollapse/>
                </Toolbar>
            </AppBar>
            <br/>
            <br/>
            <br/> <br/>
            <br/> <br/>
            <br/> <br/>
            <br/>
            <header>
                <nav className="container-fluid">
                    <div className="nav-contacts">
                        <ul>
                            <li>
                                <a href="" className="adress">
                                    <img width="18px" src={AddRess} alt=""/>
                                    100047, г. Ташкент, Мирабадский район, ул. Шахрисабз, д.42.
                                </a>
                            </li>
                            <li>
                                <a href="mailto:" className="email">
                                    <img width="22px" src={EmailSvg} alt=""/>
                                    info@proacademy.uz
                                </a>
                            </li>
                            <li>
                                <a href="tel:" className="contact-number">
                                    <img width="20px" src={ContactSvg} alt=""/>+998 (71)
                                    202-04-96
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="nav-top container-fluid bg-light">
                    <div className="container">
                        <div className="navbar  navbar-light ">
                            <div className="header__logo">
                                <a href="#">
                                    <div className="logo-left">
                                        <img src={LogoImg} alt="logo"/>
                                    </div>
                                    <div className="logo-right">
                                        <div>
                                            <span><strong>Юридическая клиника</strong></span><br/>
                                            Академии Генеральной прокуратуры<br/>
                                            Республики Узбекистан.
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="header-right">
                                <form role="search" method="get" action="#" className="search-form">
                                    <input type="" placeholder="Поиск..."/>
                                    <button type="button">
                                        <img src={SearchIcon} alt="search-icon"/>
                                    </button>
                                </form>
                                <div className="dropdown-lang">
                                    <button className="dropbtn">
                                        {/* <img src={IconRussian} alt=""/> */}
                                        {/* <img src={IconLanguage} alt=""/> */}
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#">
                                            {/* <img src={IconRussian} alt=""/> */}
                                            </a>
                                        <a href="#">
                                            {/* <img src={IconRussian} alt=""/> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="glas">
                                    <img src={IconGlass} alt=""/>
                                </div>
                                <button className="enter-site">Войти</button>
                            </div>

                        </div>
                    </div>
                </nav>
                <nav className="nav-bottom container-fluit">
                    <div className="container">
                        <ul>
                            <li>
                                <a href="">Что такое<br/> клиника</a>
                            </li>
                            <li>
                                <a href="">Цель<br/> клиники</a>
                            </li>
                            <li>
                                <a href="">Предназначение<br/> клиники</a>
                            </li>
                            <li>
                                <a href="">Популярные<br/> вопросы</a>
                            </li>
                            <li>
                                <a href="">Нормативно-правовая<br/> база</a>
                            </li>
                            <li>
                                <a href="">Полезные<br/> ссылки</a>
                            </li>
                            <li>
                                <a href="">Адреса<br/> прокуратур</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default withStyles(styles)(Header);