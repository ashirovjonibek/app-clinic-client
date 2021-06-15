import React from "react";

const PerAccAppPeriodSection = () => {
    return (
        <div>
            <div className="period-section-title">Срок рассмотрения вашего обращения:<strong>15 </strong>дней</div>
            <div className="content">
                <div className="content-item">
                    <div className="period-section">
                        <div className="request-theme">
                            <div>
                                <h3>Тема обращения:<span>Lorem ipsum dolor sit amet</span></h3>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Конфиденциально</label>
                            </div>
                        </div>
                        <div className="request-content-item">
                            <p>Повседневная практика показывает, что сложившаяся структура организации создаёт
                                необходимость включения в
                                производственный план целого ряда внеочередных мероприятий с учётом комплекса
                                системы обучения кадров, соответствующей
                                насущным потребностям. Явные признаки победы институционализации формируют
                                глобальную экономическую сеть и при этом - в
                                равной степени предоставлены сами себе. А также независимые государства и по сей
                                день остаются уделом либералов, которые
                                жаждут быть описаны максимально подробно.</p>

                        </div>
                        <div className="bottom-inform">
                            До окончания осталось:<strong>15 </strong>дней
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerAccAppPeriodSection;
