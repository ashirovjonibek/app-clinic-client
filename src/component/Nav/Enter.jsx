import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {STORAGE_NAME} from "../../utils/constant";
import {withTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {IMAGE, ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME} from "../../redux/me/actionType";
import UserName from "../UserName";

const Enter = ({t}) => {
    const me = useSelector(state => state.meReducer)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch({type: ME_DATA, data: {}});
        dispatch({type: ME_USERNAME, data: ""});
        dispatch({type: ME_FULL_NAME, data: ""});
        dispatch({type: ME_EMAIL, data: ""});
        dispatch({type: IMAGE, data: ""});
        localStorage.removeItem(STORAGE_NAME);
    };

    return (
        <div className="enter">
            <div className="enter-btn" style={{cursor: "pointer"}}>
                <div className="enter-img" style={{padding: "3px"}}>
                    <UserName
                        width={"30px"}
                        height={"30px"}
                        fontSize={"20px"}
                        lineHeight={"30px"}
                        top={true}
                        avatar={me?.image?me.image:null}
                        text={me.meFullName !== ""
                            ? me.meFullName : me.meUsername ? me.meUsername
                                : t("Login")}
                    />
                </div>
                <span style={{
                    paddingLeft: "3px",
                    float: "left",
                    textAlign: "left"
                }}> {me.meFullName !== "" ? me.meFullName : <Link style={{textDecoration: "none", color:"white"}}  to="/auth/login">{t("Login")}</Link>}
                    {/*<p className="enter-btn-role">{me.meFullName!==""? "( "+me.me.roles[0].name+" )":""} </p>*/}
                </span>
            </div>
            {
                me.meUsername === "" ? <div className="enter-content">
                        <ul>
                            {/*<li>*/}
                            {/*    <Link to="/auth/login">{t("Login")}</Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to="/auth/registrationApplicant">{t("The applicant")}</Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to="/auth/registrationListener">{t("Listener")}</Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div> :
                    <div className="enter-content">
                        <ul>
                            <li>
                                <Link onClick={logOut} to="/">{t("Go out")}</Link>
                            </li>
                            <li>
                                <Link to="/profileSettings">{t("Profile")}</Link>
                            </li>
                        </ul>
                    </div>
            }
        </div>
    );
}

export default withTranslation()(Enter);
