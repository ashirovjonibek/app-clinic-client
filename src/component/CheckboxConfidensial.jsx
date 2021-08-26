import React from "react";

const CheckboxConfidensial = (props) => {
    return (
        <div>
            <div className="confidential">
                <input type="checkbox" disabled={true} defaultChecked={props.top} id="vehicle1" name="vehicle1" />

                <div>
                    <label htmlFor="vehicle1">Конфиденциально</label>

                    <p id="vehicle1">
                        данный вопрос не будет отображаться в разделе «Популярные вопросы» в АИС
                                            Клиника.</p>
                </div>
            </div>
        </div>
    );
}

export default CheckboxConfidensial;
