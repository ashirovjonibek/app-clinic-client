import React, {useEffect, useState} from "react";
import "../../assets/scss/language-select.css";
import i18n from "../../i18n";

const NavLanguage = () => {

    const [selectedLang,setSelectedLang]=useState("");


    const languagesList = [
        {
            label: "O'ZB",
            className:"uzb-item",
            val: "uz"
        },
        {
            label: "РУС",
            className:"rus-item",
            val: "ru"
        },
        {
            label: "ENG",
            className:"ang-item",
            val: "en"
        },
    ];

    useEffect(()=>{
        if(!localStorage.getItem("I18N_LANGUAGE"))
            {
                localStorage.setItem("I18N_LANGUAGE","uz");
                setSelectedLang(localStorage.getItem("I18N_LANGUAGE"))
            }else {
            setSelectedLang(localStorage.getItem("I18N_LANGUAGE"))
        }
    },[]);

    const changeLang=(lang)=>{
        console.log(lang);
        setSelectedLang(lang);
        localStorage.setItem("I18N_LANGUAGE",lang);
        i18n.changeLanguage(lang)
        console.log(i18n)
    };

    return (
        <div className="navlanguage">
            {
                languagesList.map((lang)=>
                lang.val===selectedLang?
                    <div id="selectedLang" className={"navlanguage-item "+lang.className}>{lang.label}</div>:""
                )
            }
            <div className="navlanguage-content">
                {
                    languagesList.map((lang)=>
                        <a href="#" key={lang.val} onClick={(e)=>{
                            changeLang(e.target.id)
                        }} id={lang.val} className={lang.className}>{lang.label}</a>
                    )
                }
            </div>
        </div>
    );
}

export default NavLanguage;
