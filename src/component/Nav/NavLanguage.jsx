import React, {useEffect, useState} from "react";
import "../../assets/scss/language-select.css";
import i18n from "../../i18n";

const NavLanguage = () => {

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
        },
        {
            label: "ЎЗБ",
            className: "uzCyr-item",
            val: "uzCyr"
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
        <div className="navlanguage">
            {
                languagesList.map((lang, index) =>
                    lang.val === selectedLang ?
                        <div style={{cursor: "pointer"}} id="selectedLang" key={index}
                             className={"navlanguage-item " + lang.className}>
                            <span className="navlangs">{lang.label}</span></div> : ""
                )
            }
            <div className="navlanguage-content">
                {
                    languagesList.map((lang) =>
                        <a style={{cursor: "pointer"}} key={lang.val} onClick={(e) => {
                            changeLang(e.target.id)
                        }} id={lang.val} className={lang.className}>{lang.label}</a>
                    )
                }
            </div>
        </div>
    );
}

export default NavLanguage;
