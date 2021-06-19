import React, {useContext} from "react";
import iconDropdown from "../assets/icon/icon-down.svg";
import {ListenerContext} from "../utils/ListenerContext";

const InputCategoriya = ({nameCourse, namePosition, nameChair}) => {
    // const {course, setCourse, position, setPosition, chair, setChair} = useContext(ListenerContext);
    const handleChangeCategory = (e) => {
        // if (nameCourse !== undefined) {
        //     setCourse(e.target.value)
        // }
        // if (namePosition !== undefined) {
        //     setPosition(e.target.value)
        // }
        // if (nameChair !== undefined) {
        //     setChair(e.target.value)
        // }

    }
    return (
        <div>
            <div className="category">
                <input onChange={handleChangeCategory} list="lorem" name="lorem" placeholder="Выберите категорию"
                />
                <img src={iconDropdown} alt=""/>
            </div>
            <datalist id="lorem">
                <option value="lorem"/>
                <option value="lorem"/>
                <option value="lorem"/>
            </datalist>
        </div>
    );
}

export default InputCategoriya;
