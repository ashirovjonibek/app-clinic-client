import React from "react";
import Title from "../Title";

const Home = () => {
    return (
        <div className="home fluit">
            <div className="header-img">
                <button className="btn-default">Обращение</button>
            </div>
            <div className="container">
                <div className="what-clinic">
                    <div className="what-clinic-text">
                        <Title text="Что такое клиника" />
                    </div>
                    <div className="what-clinic-mini"></div>
                </div>
                <div className="what-clinic">
                    <div className="what-clinic-mini"></div>
                    <div className="what-clinic-text"></div>
                </div>
                <div className="cel-clinic">
                    <Title text="Цель клиники" />
                </div>
                <div className="cel-clinic">
                    <Title text="Предназначение клиники" />
                </div>
                <div className="cel-clinic">
                    <Title text="Популярные вопросы" />
                </div><div className="cel-clinic">
                    <Title text="Нормативно-правовая база" />
                </div>
            </div>
            <div className="home-slider">
                <div className="container">
                    <Title text="Полезные ссылки" />
                </div>
            </div>
            <div className="container">
                <div className="cel-clinic">
                    <Title text="Адреса прокуратур" />
                </div>
                <div className="cel-clinic" style={{height: '600px'}}>
                    <Title text="Мы на карте"/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0329210425926!2d69.28706118608989!3d41.3074374422724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad54d47a56f%3A0x87547e5307b77db5!2z0JPQtdC90LXRgNCw0LvRjNC90LDRjyDQv9GA0L7QutGD0YDQsNGC0YPRgNCwINCg0LXRgdC_0YPQsdC70LjQutC4INCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1624433459932!5m2!1sru!2s"   allowfullscreen="" loading="lazy" style={{height: '500px', width: '100%',  borderRadius: '10px', margin: '20px 0'}}></iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;
