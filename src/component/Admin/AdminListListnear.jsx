import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constant";
import axios from "axios";
import SimpleModal from "./SimpleModal";

const AdminListListnear = () => {

  const [listnear, setListnear] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "/auth/listeners").then(res => {
      console.log(res);
      setListnear(res.data);
    });
  }, []);

  console.log(listnear);

  return (
    <div className="admin">
      <div className="admin-list-listnear">
        <div className="table-scroll" style={{ paddingBottom: '20px', marginBottom: '20px' }}>
          <h5 className="table-title">Новые</h5>
          <div className="table-registration">
            <div>
              <table>
                <tr>
                  <th className="table-border applicant-name">Ф.И.О</th>
                  <th className="table-border nation">Должность</th>
                  <th className="table-border gender">Курс</th>
                  <th className="table-border citi">Кафедра</th>
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
            <div className="table-registration-button">
              <button className="btn-default">Зарегистрировать все</button>
            </div>
          </div>
        </div>
        <div className="table-scroll" style={{ paddingBottom: '20px', marginBottom: '20px' }}>
          <h5 className="table-title">Список</h5>
          <table>
            <tr>
              <th className="table-border applicant-name">Ф.И.О</th>
              <th className="table-border nation">Должность</th>
              <th className="table-border gender">Курс</th>
              <th className="table-border citi">Кафедра</th>
              <th className="table-border tel">Телефон</th>
              <th className="table-border pochta">Почта</th>
              <th className="table-border "></th>
            </tr>
            {listnear && listnear.map((item, i) =>
              <tr key={i} value={item.id}>
                <td className="table-border applicant-name">{item.fullName}</td>
                <td className="table-border">{item.position.title.ru}</td>
                <td className="table-border">{item.course}</td>
                <td className="table-border">{item.section.title.ru}</td>
                <td className="table-border">{item.phoneNumber}</td>
                <td className="table-border">{item.email}</td>
                <td className="table-border edit"><SimpleModal item={item}/></td>
              </tr>
            )}
          </table>
         
        </div>
      </div>
    </div>
  );
}

export default AdminListListnear;
