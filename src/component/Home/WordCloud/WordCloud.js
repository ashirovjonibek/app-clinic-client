import React from 'react';
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import {withTranslation} from "react-i18next";

const options = {
    colors: ["#222D44", "#C9CED8", "#045B62","#1F618D","#D0ECE7","#A9CCE3"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};

function WordCloud({t}) {

    const word = [
        {
            text: t("Appeal"),
            value: 39,
        },
        {
            text: t("Useful links"),
            value: 40,
        },
        {
            text: t("About the clinic"),
            value: 41,
        },
        {
            text: t("We are on the map"),
            value: 43,
        },
        {
            text: t("The purpose of the clinic"),
            value: 43,
        },
        {
            text: t("Listener"),
            value: 44,
        },
        {
            text: t("Popular questions"),
            value: 45,
        },
        {
            text: t("Addresses of prosecutors"),
            value: 46,
        },
        {
            text: t("Statistics"),
            value: 47,
        },
        {
            text: t("Consultation"),
            value: 48,
        },
        {
            text: t("Consideration period"),
            value: 49,
        },

        //********************************************
        {
            text: t("Appeal"),
            value: 25,
        },
        {
            text: t("Useful links"),
            value: 26,
        },
        {
            text: t("About the clinic"),
            value: 27,
        },
        {
            text: t("We are on the map"),
            value: 28,
        },
        {
            text: t("The purpose of the clinic"),
            value: 29,
        },
        {
            text: t("Listener"),
            value: 30,
        },
        {
            text: t("Popular questions"),
            value: 31,
        },
        {
            text: t("Addresses of prosecutors"),
            value: 32,
        },
        {
            text: t("Statistics"),
            value: 33,
        },
        {
            text: t("Consultation"),
            value: 34,
        },
        {
            text: t("Consideration period"),
            value: 35,
        },
        //********************************************
        {
            text: t("Appeal"),
            value: 35,
        },
        {
            text: t("Useful links"),
            value: 34,
        },
        {
            text: t("About the clinic"),
            value: 33,
        },
        {
            text: t("We are on the map"),
            value: 32,
        },
        {
            text: t("The purpose of the clinic"),
            value: 31,
        },
        {
            text: t("Listener"),
            value: 30,
        },
        {
            text: t("Popular questions"),
            value: 29,
        },
        {
            text: t("Addresses of prosecutors"),
            value: 28,
        },
        {
            text: t("Statistics"),
            value: 27,
        },
        {
            text: t("Consultation"),
            value: 26,
        },
        {
            text: t("Consideration period"),
            value: 25,
        },
        //********************************************
        {
            text: t("Appeal"),
            value: 35,
        },
        {
            text: t("Useful links"),
            value: 34,
        },
        {
            text: t("About the clinic"),
            value: 33,
        },
        {
            text: t("We are on the map"),
            value: 32,
        },
        {
            text: t("The purpose of the clinic"),
            value: 31,
        },
        {
            text: t("Listener"),
            value: 30,
        },
        {
            text: t("Popular questions"),
            value: 29,
        },
        {
            text: t("Addresses of prosecutors"),
            value: 28,
        },
        {
            text: t("Statistics"),
            value: 27,
        },
        {
            text: t("Consultation"),
            value: 26,
        },
        {
            text: t("Consideration period"),
            value: 25,
        },
    ];

    return (
        <div>
            <div style={{height: "300px", width: "100%"}}>
                <ReactWordcloud options={options} words={word}/>
            </div>
        </div>
    );
}

export default withTranslation()(WordCloud);