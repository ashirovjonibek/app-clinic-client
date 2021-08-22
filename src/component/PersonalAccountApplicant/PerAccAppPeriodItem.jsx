import React from "react";
import RequestTheme from "../RequestTheme";

const PerAccAppPeriodItem = ({item}) => {
    let a=new Date(item.createdAt)
    let b=new Date();
    return (
        <div>
            <div className="period-section-title">Срок рассмотрения вашего обращения:<strong>15 </strong>дней</div>
            <div className="content">
                <div className="period-section">
                    <div className="request-theme">
                        <div>
                            <h3>Тема обращения:<span>{item.title}</span></h3>
                        </div>
                    </div>
                    <div className="request-content-item">
                        <p>{item.description}</p>
                    </div>
                    <div className="bottom-inform">
                        До окончания осталось:<strong>{15-(b.getDate()-a.getDate())}</strong>дней
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerAccAppPeriodItem;
