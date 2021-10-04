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
        <text fontSize={10} x={x + width + 12} y={y + height} fill={"#000"} textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsByStatus({t}) {

    let completed = t("completed")
    let inprocess = t("inprocess")
    let newAppeal = t("new")

    const data = [
        {name: t('Karakalpaks tan'), id: 1, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Andijan'), id: 2, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Bukhara'), id: 3, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Jizzakh'), id: 4, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Kashka darya'), id: 5, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Navoi'), id: 6, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Namangan'), id: 7, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Samarkand'), id: 8, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Surkhandarya'), id: 9, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Syrdarya'), id: 10, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Tashkent'), id: 11, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Fergana'), id: 12, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t('Khorezm'), id: 13, [completed]: 0, [inprocess]: 0, [newAppeal]: 0},
        {name: t("Tashkent City"), id: 14, [completed]: 0, [inprocess]: 0, [newAppeal]: 0}
    ];

    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/application/filterByStatus',
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

    if (fetch && fetch.map(status => {
        data.map(item => {
            if (item.id === status.regionId) {
                if (status.status === "COMPLETED") {
                    item[completed] = status.count
                }
                if (status.status === "CREATED") {
                    item[newAppeal] = status.count
                }
                if (status.status === "INPROCESS") {
                    item[inprocess] = status.count
                }
            } else {
                if (item[completed] === 0) {
                    item[completed] = ""
                }
                if (item[newAppeal] === 0) {
                    item[newAppeal] = ""
                }
                if (item[inprocess] === 0) {
                    item[inprocess] = ""
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
                    <input type="checkbox"/>
                    <Legend wrapperStyle={{position: 'relative'}}/>
                    <Tooltip itemStyle={{fontSize: 12}} labelStyle={{fontSize: 12}}/>
                    <Bar barSize={8}
                         dataKey={t("new")} fill="#78BAF3">
                        <LabelList dataKey={t("new")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={t("inprocess")} fill="#BAFF85">
                        <LabelList dataKey={t("inprocess")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={t("completed")} fill="#F57670">
                        <LabelList dataKey={t("completed")} content={renderCustomizedLabel}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}

export default withTranslation()(StatisticsByStatus);

