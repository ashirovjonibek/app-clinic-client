import React from "react";
import Title from "../Title";
import { useHistory } from "react-router-dom";
import WhatSlider from "./WhatSlider";
import PopularSlider from "./PopularSlider";
import DirectoryPdf from "../PersonalAccountListener/DirectoryPdf";
import prokuraturaImg from '../../assets/img/useful/prokuratura.jpg';
import gerbImg from '../../assets/img/useful/gerb.jpg';
import tashabbusImg from '../../assets/img/useful/5tashabbus.jpg';



const Home = () => {
    const history = useHistory();
    return (
        <div className="home fluit">
            <div className="header-img">
                <div>
                    <button onClick={() => history.push('/applicantAppeal')} className="btn-default">Обращение</button>
                </div>
            </div>
            <div className="container">
                <div id="what-clinic">
                    <div className="what-clinic-text">
                        <Title text="Что такое клиника" />
                        <p>Клиника является неотъемлемой частью Академии, которая осуществляет деятельность по обеспечению интеграции теоретических знаний студентов с практикой, развитию практических навыков у студентов и предоставлению недискриминационных юридических консультаций физическим и юридическим лицам.</p>

                        <p>Клиника является неотъемлемой частью Академии, которая осуществляет деятельность по обеспечению интеграции теоретических знаний студентов с практикой, развитию практических навыков у студентов и предоставлению недискриминационных юридических консультаций физическим и юридическим лицам.</p>
                    </div>
                    <div className="what-clinic-mini"></div>
                </div>
                <div id="what-clinic">
                    <div className="what-clinic-mini">
                        <WhatSlider />
                    </div>
                    <div className="what-clinic-text">
                        <p>Клиника является неотъемлемой частью Академии, которая осуществляет деятельность по обеспечению интеграции теоретических знаний студентов с практикой, развитию практических навыков у студентов и предоставлению недискриминационных юридических консультаций физическим и юридическим лицам.</p>

                        <p>Клиника является неотъемлемой частью Академии, которая осуществляет деятельность по обеспечению интеграции теоретических знаний студентов с практикой, развитию практических навыков у студентов и предоставлению недискриминационных юридических консультаций физическим и юридическим лицам.</p>
                    </div>
                </div>
                <div id="cel-clinic">
                    <Title text="Цель клиники" />
                    <h5>Основными задачами клиники являются:</h5>
                    <div className="cel-clinic-text">
                        <div className="text-inform">
                            <ul>
                                <li>Обеспечение соответствия теоретических знаний студентов практике</li>
                                <li>Оказание бесплатной юридической помощи физическим лицам</li>
                                <li>Обеспечение соответствия теоретических знаний студентов практике</li>
                                <li>Оказание бесплатной юридической помощи физическим лицам</li>
                            </ul>
                        </div>
                        <div className="text-inform">
                            <ul>
                                <li>Формирование и развитие практических навыков у студентов</li>
                                <li>Повышение правосознания и правовой культуры населения</li>
                                <li>Формирование и развитие практических навыков у студентов</li>
                                <li>Повышение правосознания и правовой культуры населения</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="statistic-clinic">
                    <Title text="Статистика" />
                    <div className="statistic-row">
                        <div>
                            <h3>124</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3>124</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3>124</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3>124</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="statistic-row">
                        <div>
                            <h3>124</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3>124</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3>124</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3>124</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div id="purpose-clinic">
                    <Title text="Предназначение клиники" />
                    <div className="porpose-text">
                        <p>На основе взаимодействия с государственным и хозяйственным управлением, судебными и правоохранительными органами, адвокатскими и другими организациями для обеспечения стажировки студентов в поликлинике на период обучения:
                            принять организационные меры по организации практики студентов в клинике;
                            широкое вовлечение студентов в правоприменительную практику за счет неразрывной связи их теоретических знаний с практикой,
                            принять организационные меры по организации практики студентов в клинике;
                            широкое вовлечение студентов в правоприменительную практику за счет неразрывной связи их теоретических знаний с практикой</p>
                    </div>
                    <div className="porpose-text">
                        <p>О предоставлении бесплатной юридической помощи физическим и юридическим лицам:
                            обеспечение своевременного и качественного рассмотрения обращений физических и юридических лиц за юридической консультацией;
                            давать рекомендации о необходимости обращения в соответствующие органы государственного и хозяйственного управления, суды, правоохранительные органы и адвокатские структуры для их разрешения, исходя из характера и сложности обращений физических и юридических лиц, суды, правоохранительные органы и адвокатские структуры для их разрешения, исходя из характера и сложности обращений физических и юридических лиц;</p>
                    </div>
                    <div className="porpose-text">
                        <p>По повышению уровня профессиональной подготовки студентов и формированию у них навыков работы с юридическими и физическими лицами:
                            подготовка аналитических данных по правовым вопросам, разработка новых программ, способствующих развитию практических навыков;
                            проведение семинаров и тренингов, направленных на формирование правовой профессиональной этики, навыков профессиональной деятельности у студентов, проходящих практику в клинике,
                            проведение семинаров и тренингов, направленных на формирование правовой профессиональной этики, навыков профессиональной деятельности у студентов, проходящих практику в клинике;</p>
                    </div>
                </div>
                <div id="popular-clinic">
                    <Title text="Популярные вопросы" />
                    <PopularSlider />
                </div>
                <div id="legal-clinic">
                    <Title text="Нормативно-правовая база" />
                    <div className="legal-body">
                        <div className="legal-body-items">
                            <DirectoryPdf />
                            <DirectoryPdf />
                            <DirectoryPdf />
                        </div>
                        <div className="legal-body-items">
                            <DirectoryPdf />
                            <DirectoryPdf />
                            <DirectoryPdf />
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-useful-links">
                <div className="container">
                    <Title text="Полезные ссылки" />
                    <div className="useful-links-body">
                        <a className="useful-links-item">
                            <img src={prokuraturaImg} alt="" />
                            <p>Генеральная прокуратура Республики Узбекистан</p>
                        </a>
                        <a className="useful-links-item">
                            <img src={gerbImg} alt="" />
                            <p>Официальный веб-сайт Президента Республики Узбекистан</p>
                        </a>
                        <a className="useful-links-item">
                            <img src={tashabbusImg} alt="" />
                            <p>Центр “Стратегия развития”</p>
                        </a>
                        <a className="useful-links-item">
                            <img src={prokuraturaImg} alt="" />
                            <p>Генеральная прокуратура Республики Узбекистан</p>
                        </a>
                        <a className="useful-links-item">
                            <img src={prokuraturaImg} alt="" />
                            <p>Генеральная прокуратура Республики Узбекистан</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="adres-procuratura">
                    <Title text="Адреса прокуратур" />
                    <div style={{ width: '60%', lineHeight: '22px' }}>
                        <p style={{ margin: '10px' }}>Клиника ўз фаолиятини Ўзбекистон Республикасининг Конституцияси ва
                            қонунларига, Ўзбекистон Республикаси Олий Мажлиси палаталари қарорларига, Ўзбекистон
                            Республикаси Президентининг фармон, қарор ва фармойишларига, Ўзбекистон Республикаси
                            Вазирлар Маҳкамасининг қарор ва фармойишларига, Ўзбекистон Республикаси Адлия вазирлиги,
                            Олий ва ўрта махсус таълим вазирлигининг ҳайъат қарорлари ва буйруқлари, Академия Устави
                            ҳамда мазкур низомга мувофиқ олиб боради.</p>

                        <p style={{ margin: '10px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error
                            tenetur molestiae quod voluptates nisi voluptatum possimus praesentium adipisci! Libero
                            vitae accusamus animi hic quis, fugit molestias vero ullam nihil.Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quo error tenetur molestiae quod voluptates nisi voluptatum
                            possimus praesentium adipisci! Libero vitae accusamus animi hic quis, fugit molestias vero
                            ullam nihil.</p>
                    </div>
                </div>
                <div className="cel-clinic" style={{ height: '600px' }}>
                    <Title text="Мы на карте" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0329210425926!2d69.28706118608989!3d41.3074374422724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad54d47a56f%3A0x87547e5307b77db5!2z0JPQtdC90LXRgNCw0LvRjNC90LDRjyDQv9GA0L7QutGD0YDQsNGC0YPRgNCwINCg0LXRgdC_0YPQsdC70LjQutC4INCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1624433459932!5m2!1sru!2s"
                        loading="lazy" style={{
                            height: '500px',
                            width: '100%',
                            borderRadius: '10px',
                            margin: '20px 0',
                            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'
                        }}></iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;
