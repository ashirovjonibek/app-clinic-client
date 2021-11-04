import React, {useEffect, useState} from "react";
import iconStar from "../assets/icon/icon-star.svg";

const Stars = (props) => {
    const [stars,setStars]=useState([]);
    useEffect(()=>{
        let a=[];
        for (let i = 0; i < props.stars; i++) {
            a.push(iconStar)
        }
        setStars(a)
    },[props]);
    return (
        <div className="stars">
            {
                stars&&stars?.map((item,i)=>
                    <img key={i} height="20px" width="20px" src={item} alt="" />
                )
            }
        </div>
    );
}

export default Stars;
