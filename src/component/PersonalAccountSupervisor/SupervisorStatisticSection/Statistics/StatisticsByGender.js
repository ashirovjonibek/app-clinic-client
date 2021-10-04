import React, {useEffect, useState} from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
    ResponsiveContainer,
} from 'recharts';
import {withTranslation} from "react-i18next";
import {API_URL, STORAGE_NAME} from "../../../../utils/constant";

const renderCustomizedLabel = (props) => {
    const {
        x, y, width, height, value,
    } = props;
    const fireOffset = value.toString().length < 5;
    const offset = fireOffset ? -40 : 5;
    return (
        <text x={x + width + 20} y={y + height - 2} fill={"#000"} textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsByGender({t}) {
    let male = t("male")
    let female = t("female")

    const  data  =  [
        {name: t('Karakalpaks tan'), id: 1, [male]: 0,[female]: 0},
        {name: t('Andijan'), id: 2, [male]: 0,[female]: 0},
        {name: t('Bukhara'), id: 3, [male]: 0,[female]: 0},
        {name: t('Jizzakh'), id: 4, [male]: 0,[female]: 0},
        {name: t('Kashka darya'), id: 5, [male]: 0,[female]: 0},
        {name: t('Navoi'), id: 6, [male]: 0,[female]: 0},
        {name: t('Namangan'), id: 7, [male]: 0,[female]: 0},
        {name: t('Samarkand'), id: 8, [male]: 0,[female]: 0},
        {name: t('Surkhandarya'), id: 9, [male]: 0,[female]: 0},
        {name: t('Syrdarya'), id: 10, [male]: 0,[female]: 0},
        {name: t('Tashkent'), id: 11, [male]: 0,[female]: 0},
        {name: t('Fergana'), id: 12, [male]: 0,[female]: 0},
        {name: t('Khorezm'), id: 13, [male]: 0,[female]: 0},
        {name: t("Tashkent City"), id: 14, [male]: 0, [female]: 0}
    ];
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL+'/application/filterByGender',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };
        axios(config)
            .then(function (response) {
                setFetch(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    if (fetch && fetch.map(gender => {
        data.map(item => {
            if (item.id === gender.regionId) {
                if (gender.gender==="erkak"){
                item[male] = gender.count
                }
                if (gender.gender==="ayol"){
                item[female] = gender.count
                }
            }else {
                if (item[female] === 0) {
                    item[female]= ""
                }
                if ( item[male]===0) {
                    item[male] = ""
                }

            }
        })
    }))

        return (
            <ResponsiveContainer width="100%" height={"100%"}>
                <BarChart margin={{
                    left: 45
                }} width={400} height={500} data={data} layout="vertical">
                    <CartesianGrid horizontal={false} stroke="#CFD8DC" strokeWidth={0.5}/>
                    <YAxis dataKey="name" type="category"/>
                    <XAxis type={"number"} tickCount={10} domain={[0, "dataMax+10"]}/>
                    <br/>
                    <Legend wrapperStyle={{position: 'relative'}}/>
                    <Tooltip itemStyle={{fontSize:12}} labelStyle={{fontSize:12}}/>
                    <Bar barSize={10}
                         dataKey={t("male")} fill="#78BAF3">
                        <LabelList dataKey={t("male")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={10}
                         dataKey={t("female")} fill="#F57670">
                        <LabelList dataKey={t("female")} content={renderCustomizedLabel}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}

export default withTranslation()(StatisticsByGender);