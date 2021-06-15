import React from "react";
import RequestTheme from "../RequestTheme";

const PerAccAppPeriodItem = () => {
    return (
        <div>
            <div className="period-section-title">Срок рассмотрения вашего обращения:<strong>15 </strong>дней</div>
            <div className="content">
                <div className="period-section">
                    <RequestTheme />
                    <div className="bottom-inform">
                        До окончания осталось:<strong>15 </strong>дней
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerAccAppPeriodItem;
