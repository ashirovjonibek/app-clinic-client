import React from "react";
import DocumentProsses from "../DocumentProsses";
import DocumentText from "../DocumentText";

const PerAccAppCallFlow = () => {
    return (

        <div className="content">
            <div className="content-item">
                <DocumentProsses />
                <DocumentText />
            </div>
            <div className="content-item">
                <div className="document-prosses">
                    <div className="new">
                        <h3 style={{ color: "#222D44" }}>Новое</h3>
                        <div className="prosses-item">
                            <div className="prosses-item-active"></div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="progressing">
                        <h3>В обработке</h3>
                        <div className="prosses-item"></div>
                    </div>
                    <div className="line"></div>
                    <div className="close">
                        <h3>Закрыто</h3>
                        <div className="prosses-item"></div>
                    </div>
                </div>
                <div className="document-text">
                    <div className="document-text-title">
                        <h4>Тема обращения:</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="document-text-item">
                        Повседневная практика показывает, что сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы обучения кадров, соответствующей насущным потребностям. Явные признаки победы институционализации формируют глобальную экономическую сеть и при этом -  в равной степени предоставлены сами себе. А также независимые государства и по сей день остаются уделом либералов, которые жаждут быть описаны максимально подробно.
                                    </div>
                </div>
            </div>

        </div>
    );
}

export default PerAccAppCallFlow;
