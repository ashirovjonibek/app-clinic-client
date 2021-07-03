import React, {Component, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {withStyles, fade} from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom";
import {Badge, Collapse, InputBase, Menu, MenuItem} from "@material-ui/core";
import {AccountCircle, Dashboard, ExpandLess, ExpandMore} from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DnsIcon from '@material-ui/icons/Dns';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import PublicIcon from '@material-ui/icons/Public';
import TvIcon from '@material-ui/icons/Tv';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';

const drawerWidth = 250;

const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },

    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
})

class Admin extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    constructor(props) {
        super(props);
    }

    state = {
        isOpen: false,
        openDropDown: false,
        anchorEl: null,
        mobileMoreAnchorEl: null,
        openDropDownCatalog: false
    }

    render() {
        // const classes = useStyles();
        const props = this.props;
        const {classes, theme} = this.props
        const {isOpen, openDropDown, anchorEl, mobileMoreAnchorEl, openDropDownCatalog} = this.state;

        const menuId = 'primary-search-account-menu';
        const mobileMenuId = 'primary-search-account-menu-mobile';

        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const handleMobileMenuOpen = (event) => {
            this.setState({mobileMoreAnchorEl: event.currentTarget})
        };

        const handleProfileMenuOpen = (event) => {
            this.setState({anchorEl: event.currentTarget})
        };
        const handleMobileMenuClose = () => {
            this.setState({mobileMoreAnchorEl: null})
        };

        const handleMenuClose = () => {
            this.setState({anchorEl: null})
            handleMobileMenuClose();
        };

        const handleDrawerOpen = () => {

            this.setState({isOpen: true})
        };

        const handleDrawerClose = () => {
            this.setState({isOpen: false})
        };
        const handleClick = () => {

            this.setState({openDropDown: !openDropDown})
        };
        const handleClickCatalog = () => {

            this.setState({openDropDownCatalog: !openDropDownCatalog})
        };


        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );
        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={menuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}><Link to="/cabinet">Profile</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link to="/auth/login">Log In</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link to="/auth/registr">Sign Up</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link to="/home">Log out</Link></MenuItem>
            </Menu>
        );

        const changeRoute = (e, v) => {
            console.log(e.target.value)
        }

        return (
            <div>
                <div className={
                    classes.root}
                >
                    <CssBaseline/>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: isOpen,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, isOpen && classes.hide)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography className={classes.title} variant="h4" noWrap>
                                <Link style={{color: "black"}} to="/home">Event</Link>
                            </Typography>
                            <div className={classes.grow}/>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </div>

                            <div className={classes.sectionDesktop}>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={2} color="secondary">
                                        <MailIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={17} color="secondary">
                                        <NotificationsIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon/>
                                </IconButton>
                            </div>

                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={isOpen}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                            </IconButton>
                        </div>
                        <Divider/>
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    Home
                                </ListItemText>
                            </ListItem>
                            <ListItem button onClick={handleClick}>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText>Conference</ListItemText>
                                {openDropDown ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={openDropDown} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>

                                    <ListItem button  className={classes.nested}>
                                        <ListItemIcon>
                                            <DnsIcon/>
                                        </ListItemIcon>
                                        <ListItemText>About Conference</ListItemText>
                                    </ListItem>
                                    <ListItem button  className={classes.nested}>
                                        <ListItemIcon>
                                            <CardGiftcardIcon/>
                                        </ListItemIcon>
                                        <ListItemText><Link style={{color: "black"}}
                                                            to="/event">Award</Link></ListItemText>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <ListItem button >
                                <ListItemIcon>
                                    <ListIcon color="primary"/>
                                </ListItemIcon>
                                <ListItemText>
                                    History
                                </ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                    <TvIcon/>
                                </ListItemIcon>
                                <ListItemText><Link style={{color: "black"}} to="/news">News</Link></ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                    <ContactPhoneIcon/>
                                </ListItemIcon>
                                <ListItemText>Contact</ListItemText>
                            </ListItem>
                        </List>
                        <Divider/>
                        <List>
                            <ListItem button onClick={handleClickCatalog}>
                                <ListItemIcon>
                                    <ListIcon color="primary"/>
                                </ListItemIcon>
                                <ListItemText>
                                    Catalog
                                </ListItemText>
                                {openDropDownCatalog ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={openDropDownCatalog} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button
                                              className={classes.nested}>
                                        <ListItemIcon>
                                            <DnsIcon/>
                                        </ListItemIcon>
                                        <ListItemText><Link style={{color: "black"}}
                                                            to="/catalog/country">Country</Link></ListItemText>
                                    </ListItem>
                                    <ListItem button
                                              className={classes.nested}>
                                        <ListItemIcon>
                                            <CardGiftcardIcon/>
                                        </ListItemIcon>
                                        <ListItemText><Link style={{color: "black"}} to="/catalog/region">Region</Link></ListItemText>
                                    </ListItem>
                                    <ListItem button
                                              className={classes.nested}>
                                        <ListItemIcon>
                                            <PublicIcon/>
                                        </ListItemIcon>
                                        <ListItemText><Link style={{color: "black"}}
                                                            to="/catalog/district">Dictrict</Link></ListItemText>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </Drawer>
                    <main style={{padding: 0, backgroundColor: 'white'}} className={clsx(classes.content, {
                        [classes.contentShift]: isOpen,
                    })}>
                        <div className={classes.drawerHeader}/>

                    </main>

                </div>

            </div>
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles, {withTheme: true})(Admin);
