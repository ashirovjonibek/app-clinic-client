import React from "react";

const SortDate = () => {
    return (
        <form className="request-sort">
            <label for="cars">Сортировать по:</label>
            <select name="cars" id="cars">
                <option value="volvo">Дате создания</option>
                <option value="saab">Срок исполнения</option>
                <option value="opel">Приоритет</option>
            </select>
        </form>
    );
}

export default SortDate;
