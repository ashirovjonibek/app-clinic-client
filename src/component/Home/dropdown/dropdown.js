import React from "react";
import './dropdown.css'
import {Visibility} from '@material-ui/icons'
import {CHANGE_EYE, CHANGE_IMG_LESS, CHANGE_THEME} from "../../../redux/me/actionType";
import {useDispatch, useSelector} from "react-redux";


const DropDown = ({color}) => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state?.theme);

    const onChange = (e) => {
        dispatch({type: CHANGE_EYE, data: e.target.id})
    };

    return (
        <div className="dropdown">
            <span className="dropbtn" style={{marginRight: "10px", fontSize: "20px", color: color}}>
                <div className="pt-1">
                    <Visibility/>
                </div>
            </span>
            <div className="dropdown-content">
                <a id="1" onClick={(e) => {
                    dispatch({type: CHANGE_THEME, data: ""});
                    dispatch({type: CHANGE_IMG_LESS, data: false});
                    onChange(e)
                }} href="#">Odatiy</a>
                <a id="2" onClick={() => {
                    dispatch({type: CHANGE_THEME, data: "grayscale(100%)"})
                }} href="#">Oq va qora</a>
                <a id="3" onClick={(e) => {
                    dispatch({type: CHANGE_THEME, data: ""});
                    onChange(e)
                }} style={{borderBottom: "1px solid rgba(0,0,0,0.3)"}} href="#">Qora va sariq</a>
                <a id="4" onClick={(e) => dispatch({type: CHANGE_IMG_LESS, data: true})}
                   style={{backgroundColor: "rgba(0,0,0,0.7)"}} href="#">Rasmsiz</a>
                {/*<a id="5" onClick={onChange} href="#">Kichik shrift</a>*/}
                {/*<a id="5" onClick={onChange} href="#">Katta shrift</a>*/}
            </div>
        </div>
    )
};
export default DropDown;