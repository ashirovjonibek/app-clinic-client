import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

const Setting = () => {
    return (
        <div className="setting">
            <div className="row">
                {/* <div>
                    <h3>Настройки обращений с приоритетом</h3>
                    <div className="row-inside">
                        <h4 className="groupOne">Группа заявителей группы
                            <strong> приоритет 1</strong> должны быть рассмотрены в течении :
                        </h4>
                        <div className="number">
                            <button style={{ justifyContent: 'center', alignItems: 'center' }}>+</button>
                            <strong className="number-item">5</strong>
                            <button style={{ justifyContent: 'center' }}>-</button>
                            <h4>дней</h4>
                        </div>
                    </div>
                    <div className="row-inside">
                        <h4 className="groupTwo">Группа заявителей группы
                            <strong> приоритет 2</strong> должны быть рассмотрены в течении :
                        </h4>
                        <div className="number">
                            <button style={{ justifyContent: 'center', alignItems: 'center' }}>+</button>
                            <strong className="number-item">15</strong>
                            <button style={{ justifyContent: 'center' }}>-</button>
                            <h4>дней</h4>
                        </div>
                    </div>
                </div> */}
                <div className="kafedr">
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', fontWeight: '500'}}>
                        <AddIcon fontSize='large' style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25', borderRadius: '50%', marginRight: '10px'}}/>
                        Добавить кафедру
                    </div>
                    <div className="table-scroll">
                        <h5 className="table-title">Кафедры</h5>
                        <table>
                            <tr>
                                <th className="table-border number">#</th>
                                <th className="table-border name-uz">Name Uz</th>
                                <th className="table-border name-ru">Name Ру</th>
                                <th className="table-border name-en">Name En</th>
                                <th className="table-border edit">Изменить</th>
                                <th className="table-border delete">Удалить</th>
                            </tr>
                            <tr>
                                <td className="table-border">1</td>
                                <td className="table-border">Jinoiy ishlar</td>
                                <td className="table-border">Уголовные дела</td>
                                <td className="table-border">Criminal cases</td>
                                <td className="table-border"><EditIcon /></td>
                                <td className="table-border"><DeleteIcon /></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Setting;
