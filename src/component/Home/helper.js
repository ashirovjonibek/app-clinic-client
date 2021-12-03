import React, {useEffect, useState} from "react";
import i18n from "../../i18n";

const LangContener = ({color, className}) => {
    const [selectedLang, setSelectedLang] = useState("");

    const languagesList = [
        {
            label: "O'ZB",
            className: "uzb-item",
            val: "uz"
        },
        {
            label: "РУС",
            className: "rus-item",
            val: "ru"
        }
    ];

    useEffect(() => {
        if (!localStorage.getItem("I18N_LANGUAGE")) {
            localStorage.setItem("I18N_LANGUAGE", "uz");
            setSelectedLang(localStorage.getItem("I18N_LANGUAGE"))
        } else {
            setSelectedLang(localStorage.getItem("I18N_LANGUAGE"))
        }
    }, []);

    const changeLang = (lang) => {
        setSelectedLang(lang);
        localStorage.setItem("I18N_LANGUAGE", lang);
        i18n.changeLanguage(lang).then(r => console.log(r))
    };

    return (
        <select id="select-land-id" className={className}
                style={{backgroundColor: "rgba(0,0,0,0)", color: color, marginRight: "10px"}} value={selectedLang}
                onChange={(e) => {
                    changeLang(e.target.value)
                }}>
            {languagesList.map((item, i) =>
                <option style={{color: "#000"}} value={item?.val}>{item?.label}</option>
            )}
        </select>
    )
};

export default LangContener;