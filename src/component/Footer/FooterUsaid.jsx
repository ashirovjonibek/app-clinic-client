import React from "react";
import imageUsaid from "../../assets/icon/footer/usaid.jpg";

const FooterUsaid = () => {
    return (
        <div className="usaid-wrapper container-fluid">
            <div className="container">
                <div className="usaid">
                    <img src={imageUsaid} alt="" />
                    <p>Данный вебсайт стал возможным благодаря помощи американского народа, оказанной через Агентство
                    США по международному
                    развитию (USAID). Tetra Tech DPK (Тетра Тек ДПК) несет ответственность за содержание публикации,
                    которое не обязательно
                        отражает позицию USAID или Правительства США</p>
                </div>
            </div>
        </div>
    );
}

export default FooterUsaid;
