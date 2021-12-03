import React, {useEffect, useState} from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
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
    return (
        <text x={x + width + 20} y={y + height - 2} fill={fireOffset ? "#000" : "#000"} textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsByOverdue({t}) {

    const data = [
        {name: t('Karakalpaks tan'), id: 1, count: 0},
        {name: t('Andijan'), id: 2, count: 0},
        {name: t('Bukhara'), id: 3, count: 0},
        {name: t('Jizzakh'), id: 4, count: 0},
        {name: t('Kashka darya'), id: 5, count: 0},
        {name: t('Navoi'), id: 6, count: 0},
        {name: t('Namangan'), id: 7, count: 0},
        {name: t('Samarkand'), id: 8, count: 0},
        {name: t('Surkhandarya'), id: 9, count: 0},
        {name: t('Syrdarya'), id: 10, count: 0},
        {name: t('Tashkent'), id: 11, count: 0},
        {name: t('Fergana'), id: 12, count: 0},
        {name: t('Khorezm'), id: 13, count: 0},
        {name: t("Tashkent City"), id: 14, count: 0}
    ];
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        // fetchData()
    }, [])

    function fetchData() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/application/filterByRegion',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setFetch(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // if (fetch && fetch.map(region => {
    //     data.map(item => {
    //         if (item.id === region.regionId) {
    //             item.count = region.count
    //         }else {
    //             item.count=""
    //         }
    //     })
    // }))

    return (
        <ResponsiveContainer width="100%" height={"100%"}>
            <BarChart margin={{
                left: 45
            }} width={400} height={500} data={data} layout="vertical">
                <CartesianGrid horizontal={false} stroke="#CFD8DC" strokeWidth={0.5}/>
                <YAxis dataKey="name" type="category"/>
                <XAxis type={"number"} tickCount={10} domain={[0, "dataMax+10"]}/>
                <br/>
                {/*<Legend wrapperStyle={{position: 'relative'}}/>*/}
                <Tooltip itemStyle={{fontSize: 12}} labelStyle={{fontSize: 12}}/>
                <Bar barSize={15}
                     dataKey="count" fill="#78BAF3">
                    <LabelList dataKey="count" content={renderCustomizedLabel}/>
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default withTranslation()(StatisticsByOverdue);