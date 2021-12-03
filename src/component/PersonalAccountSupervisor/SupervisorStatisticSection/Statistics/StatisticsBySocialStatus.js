import React, {useEffect, useState} from 'react';
import {Bar, BarChart, CartesianGrid, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';
import {withTranslation} from "react-i18next";
import {API_URL, STORAGE_NAME} from "../../../../utils/constant";

const renderCustomizedLabel = (props) => {
    const {
        x, y, width, height, value,
    } = props;
    const fireOffset = value.toString().length < 5;
    const offset = fireOffset ? -40 : 5;
    return (
        <text fontSize={10} x={x + width + 12} y={y + height} fill={fireOffset ? "#000" : "#000"} textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsBySocialStatus({t}) {
    let invalid = t("invalid")
    let singlemother = t("single_mother")
    let others = t("others")

    const data = [
        {name: t('Karakalpaks tan'), id: 1, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Andijan'), id: 2, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Bukhara'), id: 3, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Jizzakh'), id: 4, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Kashka darya'), id: 5, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Navoi'), id: 6, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Namangan'), id: 7, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Samarkand'), id: 8, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Surkhandarya'), id: 9, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Syrdarya'), id: 10, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Tashkent'), id: 11, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Fergana'), id: 12, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t('Khorezm'), id: 13, [invalid]: 0, [singlemother]: 0, [others]: 0},
        {name: t("Tashkent City"), id: 14, [invalid]: 0, [singlemother]: 0, [others]: 0}
    ];

    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/application/filterBySocialStatus',
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

    if (fetch && fetch.map(socialsts => {
        data.map(item => {
            if (item.id === socialsts.regionId) {
                if (socialsts.socialStatusId === 1) {
                    item[invalid] = socialsts.count
                }
                if (socialsts.socialStatusId === 2) {
                    item[singlemother] = socialsts.count
                }
                if (socialsts.socialStatusId === 3) {
                    item[others] = socialsts.count
                }
            } else {
                if (item[singlemother] === 0) {
                    item[singlemother] = ""
                }
                if (item[invalid] === 0) {
                    item[invalid] = ""
                }
                if (item[others] === 0) {
                    item[others] = ""
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
                    <Tooltip itemStyle={{fontSize: 12}} labelStyle={{fontSize: 12}}/>
                    <Bar barSize={8}
                         dataKey={invalid} fill="#78BAF3">
                        <LabelList dataKey={t("invalid")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={singlemother} fill="#F57670">
                        <LabelList dataKey={t("single_mother")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={others} fill="#B393E0">
                        <LabelList dataKey={t("others")} content={renderCustomizedLabel}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}

export default withTranslation()(StatisticsBySocialStatus);

