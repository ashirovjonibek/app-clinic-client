import React, {useEffect} from "react";
import './404.css'
import {Link} from "react-router-dom";

const NotFound = () => {

    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Obbo!</h1>
                    </div>
                    <h2>404 - Sahifa topilmadi</h2>
                    <p>Siz qidirayotgan sahifa nomi o'zgartirilgan yoki vaqtincha o'chirilgan bo'lishi mumkin.</p>
                    <Link to="/">Bosh sahifaga qaytish</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound