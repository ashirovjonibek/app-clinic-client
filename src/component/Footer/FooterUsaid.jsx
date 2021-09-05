import React from "react";
import imageUsaid from "../../assets/icon/footer/usaid.jpg";
import {withTranslation} from "react-i18next";

const FooterUsaid = ({t}) => {
    return (
        <div className="usaid-wrapper container-fluid">
            <div className="container">
                <div className="usaid">
                    <img src={imageUsaid} alt=""/>
                    <p>{t("This website is made possible by the assistance of the American people through the United States Agency for International Development (USAID). Tetra Tech DPK is responsible for the content of this publication, which does not necessarily reflect the position of USAID or the US Government.")}</p>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(FooterUsaid);
