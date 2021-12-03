import React from "react";
import {withTranslation} from "react-i18next";
import {ptBR} from "@material-ui/core/locale";

const CheckboxConfidensial = (props) => {
    return (
        <div>
            <div className="confidential">
                <input type="checkbox" disabled={true} defaultChecked={props.top} id="vehicle1" name="vehicle1"/>

                <div>
                    <label htmlFor="vehicle1">{props.t("Confidentially")}</label>

                    <p id="vehicle1">
                        {props.t("This question will not be displayed in the \"Frequently Asked Questions\" section of the AIS Clinic.")}</p>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(CheckboxConfidensial);
