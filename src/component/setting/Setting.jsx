import React from "react";

const Setting = () => {
    return (
        <div className="containerFluid">
            <div className="containerSetting">
                <div className="row">
                    <p className="setting">Настройки обращений с приоритетом</p>
                    <div className="rowInside">
                        <p className="groupOne">Группа заявителей группы 
                            <strong> приоритет 1</strong> должны быть рассмотрены в течении : 
                        </p>
                        <div className="number">
                            <span style={{opacity:'0.5'}}>+</span> 
                            <strong className="groupOneNumber">5</strong> 
                            <span style={{opacity:'0.5'}}>-</span> 
                            <span>дней</span>
                        </div>        
                    </div>
                    <div className="rowInside">
                        <p className="groupTwo">Группа заявителей группы 
                            <strong> приоритет 2</strong> должны быть рассмотрены в течении : 
                        </p>
                        <div className="number"> 
                            <span style={{opacity:'0.5'}}>+</span> 
                            <strong className="groupOneNumber">15</strong> 
                            <span style={{opacity:'0.5'}}>-</span> 
                            <span>дней</span>
                        </div> 
                    </div>
                    
                    <p className="kafedra">Кафедры</p>
                    <div className="buttonDiv">
                        <button className="btn-kafedra">Название кафедры</button>
                        <button className="btn-kafedra">Название кафедры</button>
                        <button className="btn-kafedra">Название кафедры</button>
                        <button className="btn-kafedra">Название кафедры</button>
                        <a className="addKafedra" href="#"><span style={{marginRight:'5px'}}>+</span>добавить кафедру</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting;
