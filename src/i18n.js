import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"

import translationRU from "./locale/ru/translation.json"
import translationUZ from "./locale/uz/translation.json"
import translationUzCyr from "./locale/uz_cry/translation.json"

const resources = {
    ru: {
        translation: translationRU,
    },
    uz: {
        translation: translationUZ,
    },
    uzCyr: {
        translation: translationUzCyr
    }
};

const language = localStorage.getItem("I18N_LANGUAGE");

if (!language) {
    localStorage.setItem("I18N_LANGUAGE", "uz")
}

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("I18N_LANGUAGE") || "uz",

        keySeparator: false,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n
