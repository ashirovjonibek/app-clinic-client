import React from "react";

const CheckboxConfidensial = () => {
    return (
        <div>
            <div className="confidential">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

                <div>
                    <label for="">Конфиденциально</label>

                    <p for="vehicle1">
                        данный вопрос не будет отображаться в разделе «Популярные вопросы» в АИС
                                            Клиника.</p>
                </div>
            </div>
        </div>
    );
}

export default CheckboxConfidensial;
