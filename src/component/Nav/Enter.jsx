import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { STORAGE_NAME } from "../../utils/constant";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE, ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME, ROLE } from "../../redux/me/actionType";
import UserName from "../UserName";
import { Dropdown, Menu } from 'antd'

const Enter = ({ t }) => {
    const me = useSelector(state => state.meReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const logOut = () => {
        dispatch({ type: ME_DATA, data: {} });
        dispatch({ type: ME_USERNAME, data: "" });
        dispatch({ type: ME_FULL_NAME, data: "" });
        dispatch({ type: ME_EMAIL, data: "" });
        dispatch({ type: IMAGE, data: "" });
        dispatch({ type: ROLE, data: [] });
        localStorage.removeItem(STORAGE_NAME);
    };
    let path = window.location.pathname;

    console.log(me);

    return (
        <div className="enter">
            <Dropdown overlay={ me.meUsername === "" ? <div className="enter-content">
                </div> :
                    <Menu>
                        <Menu.Item>
                            <Link to="/profileSettings">{t("Profile")}</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link onClick={logOut} to="/">{t("Go out")}</Link>
                        </Menu.Item>
                    </Menu>}>
            <div style={{ cursor: "pointer" }} className="enter-btn">
                <div className="enter-img" style={{ padding: "3px" }}>
                    <UserName
                        width={"30px"}
                        height={"30px"}
                        fontSize={"20px"}
                        lineHeight={"30px"}
                        top={true}
                        avatar={me?.image ? me.image : null}
                        text={me.meFullName !== ""
                            ? me.meFullName : me.meUsername ? me.meUsername
                                : t("Login")}
                    />
                </div>
                <span className="header_username" style={{
                    paddingLeft: "3px",
                    float: "left",
                    textAlign: "left"
                }}> {me.meFullName !== "" ? <span style={{ textDecoration: "none", color: "white" }} >{me.meFullName}</span> : <span style={{ textDecoration: "none", color: "white" }} >{t("Login")}</span>}
                    {/*<p className="enter-btn-role">{me.meFullName!==""? "( "+me.me.roles[0].name+" )":""} </p>*/}
                </span>
            </div>
            </Dropdown>
        </div>
    );
}

export default withTranslation()(Enter);
