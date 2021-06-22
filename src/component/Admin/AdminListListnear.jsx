import React from "react";

const AdminListListnear = () => {
    return (
        <div className="admin-list-appeal">
            <div style={{ marginBottom: '20px' }}>
                <h5 className="table-title">Кафедра</h5>
                <ul>
                    <li>
                        <a href="">Название кафедры</a>
                    </li>
                    <li>
                        <a href="">Название кафедры</a>
                    </li>
                    <li>
                        <a href="">Название кафедры</a>
                    </li>
                    <li>
                        <a href="">Название кафедры</a>
                    </li>
                    <li>
                        <a href="">Название кафедры</a>
                    </li>
                    <li>
                        <a href="">Название кафедры</a>
                    </li>
                </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h5 className="table-title">Новые</h5>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <table>
                        <tr>
                            <th className="table-border applicant-name">Ф.И.О</th>
                            <th className="table-border">Национальность</th>
                            <th className="table-border gender">Пол</th>
                            <th className="table-border citi">Область</th>
                            <th className="table-border tel">Телефон</th>
                            <th className="table-border pochta">Почта</th>
                        </tr>
                        <tr>
                            <td className="table-border applicant-name">Darlene Robertson</td>
                            <td className="table-border"></td>
                            <td className="table-border"></td>
                            <td className="table-border"></td>
                            <td className="table-border"></td>
                            <td className="table-border"></td>
                        </tr>
                        <tr>
                            <td className="table-border applicant-name">Darlene Robertson</td>
                            <td className="table-border"></td>
                            <td className="table-border"></td>
                            <td className="table-border"></td>
                            <td className="table-border"></td>
                            <td className="table-border"></td>
                        </tr>
                    </table>
                    <div style={{marginLeft: '10px'}}>
                        <button className="btn-default">Зарегистрировать все</button>
                    </div>
                </div>
            </div>
            <div>
                <h5 className="table-title">Список</h5>
                <table>
                    <tr>
                        <th className="table-border applicant-name">Ф.И.О</th>
                        <th className="table-border">Национальность</th>
                        <th className="table-border gender">Пол</th>
                        <th className="table-border citi">Область</th>
                        <th className="table-border tel">Телефон</th>
                        <th className="table-border pochta">Почта</th>
                    </tr>
                    <tr>
                        <td className="table-border applicant-name">Darlene Robertson</td>
                        <td className="table-border"></td>
                        <td className="table-border"></td>
                        <td className="table-border"></td>
                        <td className="table-border"></td>
                        <td className="table-border"></td>
                    </tr>
                    <tr>
                        <td className="table-border applicant-name">Darlene Robertson</td>
                        <td className="table-border"></td>
                        <td className="table-border"></td>
                        <td className="table-border"></td>
                        <td className="table-border"></td>
                        <td className="table-border"></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AdminListListnear;
