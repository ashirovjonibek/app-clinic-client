import React from "react";
import './dropdown.css'
import {Visibility} from '@material-ui/icons'
import {CHANGE_EYE, CHANGE_IMG_LESS, CHANGE_THEME} from "../../../redux/me/actionType";
import {useDispatch, useSelector} from "react-redux";
import {withTranslation} from "react-i18next";


const DropDown = ({color,isWin,isMob,t}) => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state?.theme);

    const onChange = (e) => {
        dispatch({type: CHANGE_EYE, data: e.target.id})
    };

    return (
        <div className="dropdown">
            <span className="dropbtn d-flex align-items-center justify-content-center" style={{marginRight: "10px", fontSize: "20px",
                // color: color
            }}>
                <div style={{paddingLeft:isMob?"7px":""}} className={isWin?"":"pt-1"}>
                    <Visibility/>
                </div>
            </span>
            <div className="dropdown-content">
                <a id="1" onClick={(e) => {
                    dispatch({type: CHANGE_THEME, data: ""});
                    dispatch({type: CHANGE_IMG_LESS, data: false});
                    onChange(e)
                }} href="#">{t("Normal")}</a>
                <a id="2" onClick={() => {
                    dispatch({type: CHANGE_THEME, data: "grayscale(100%)"})
                }} href="#">{t("White and black")}</a>
                <a id="3" onClick={(e) => {
                    dispatch({type: CHANGE_THEME, data: ""});
                    onChange(e)
                }} style={{borderBottom: "1px solid rgba(0,0,0,0.3)"}} href="#">{t("Black and yellow")}</a>
                <a id="4" onClick={(e) => dispatch({type: CHANGE_IMG_LESS, data: true})}
                   style={{backgroundColor: "rgba(0,0,0,0.7)"}} href="#">{t("No picture")}</a>
            </div>
        </div>
    )
};
export default withTranslation()(DropDown);