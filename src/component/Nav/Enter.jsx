import React from 'react';
import enterImg from '../../assets/img/enter-img.svg';

const Enter = () => {



    return (
        <div className="enter">
            <div className="enter-btn">
                <div className="enter-img">
                    <img src={enterImg} alt="enter img" />
                </div>
                Войти
            </div>
            <div className="enter-content">
                <ul>
                    <li>
                        <a href="">Логинь </a>
                    </li>
                    <li>
                        <a href="">Заявитель</a>
                    </li>
                    <li>
                        <a href="">Слушатель</a>
                    </li>
                    <li>
                        <a href="">Выйти</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Enter;
