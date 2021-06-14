import React from "react";

const SectionCategory = () => {
    return (
        <div className="categories">
            <ul>
                <li>
                    <label for="">Категория обращения</label>
                    <input type="text" />
                </li>
                <li>
                    <label for="">Файл</label>
                    <input type="text" placeholder="Название файла. формат" />
                </li>
            </ul>
        </div>
    );
}

export default SectionCategory;
