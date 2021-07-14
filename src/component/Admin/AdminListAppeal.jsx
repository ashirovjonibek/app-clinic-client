import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL, STORAGE_NAME } from "../../utils/constant";

const AdminListAppeal = () => {

    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "/auth/applicants").then(res => {
            setApplicants(res.data);
        });
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            url: API_URL + '/auth/applicants',
            method: 'GET',
            headers: {
                'Authorization': token
            }
        }).then(res => {
            // console.log(res)
        })
        // axios.get(API_URL + "/auth/applicants").then(res => {
        //     console.log(res)
        //     setApplicants(res.data);
        // });
    }, []);

    return (
        <div className="admin">
            <div className="admin-list-appeal">
                <div style={{ margin: '20px 0' }}>
                    <div className="table-scroll" style={{ marginTop: '10px' }}>
                        <h5 className="table-title">Список</h5>
                        <table>
                            <tr>
                                <th className="table-border applicant-name">Ф.И.О</th>
                                <th className="table-border nation">Национальность</th>
                                <th className="table-border gender">Пол</th>
                                <th className="table-border citi">Адрес</th>
                                <th className="table-border tel">Телефон</th>
                                <th className="table-border pochta">Почта</th>
                                <th className="table-border lgot">Категория льгот</th>
                                <th className="table-border date">Дата рождения</th>
                            </tr>
                            {applicants && applicants.map((item, i) =>
                                <tr key={i} value={item.id}>
                                    <td className="table-border applicant-name">{item.fullName}</td>
                                    <td className="table-border">{item.nation.name.ru}</td>
                                    <td className="table-border">{item.gender}</td>
                                    <td className="table-border" style={{ textAlign: 'start' }}>{item.region.name.ru},  {item.district.name.ru},  {item.address}</td>
                                    <td className="table-border">{item.phoneNumber}</td>
                                    <td className="table-border">{item.email}</td>
                                    <td className="table-border">{item.socialStatus.name.ru}</td>
                                    <td className="table-border">{item.birthDate.slice(0, 10)}</td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminListAppeal;
