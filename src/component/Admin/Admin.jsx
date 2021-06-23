import React from "react";
import AdminListAppeal from "./AdminListAppeal";
import AdminListListnear from "./AdminListListnear";

const Admin = () => {
    return (
        <div className="admin">
            <div className="container-fluit">
                <div className="container">
                    <div className="admin-navigation">
                        <ul>
                            <li>
                                <a href="">Список заявителей</a>
                            </li>
                            <li>
                                <a href="">Список слушателей</a>
                            </li>
                            <li>
                                <a href="">Список начальников</a>
                            </li>
                            <li>
                                <a href="">Список модераторов</a>
                            </li>

                            <li>
                                <a href="">Настройки</a>
                            </li>
                        </ul>
                    </div>
                    <div className="admin-table">
                        {/* <AdminListAppeal /> */}
                        <AdminListListnear />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
