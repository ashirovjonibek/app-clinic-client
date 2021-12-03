import React, {useState} from "react";
import {withTranslation} from "react-i18next";

const RequestTheme = ({label, description, t, check}) => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="request-theme">
                <div>
                    <h3>{t("Subject of the appeal")}:<span>
                        {label && label}
                    </span></h3>
                </div>
                <div>
                    <input type="checkbox" defaultChecked={check}/>
                    <label htmlFor="">{t("Confidentially")}</label>
                </div>
            </div>
            <hr/>
            <div className="request-content-item">
                <p style={{maxHeight: show ? "" : "340px", overflow: "hidden"}}>{description && description}</p>
                {description?.length > 1300 && <span onClick={() => setShow(!show)} style={{
                    cursor: "pointer",
                    color: "blue"
                }}>{show ? "Hide" : "Show"}</span>}
            </div>
            <hr/>
        </div>
    )
}

export default withTranslation()(RequestTheme);
