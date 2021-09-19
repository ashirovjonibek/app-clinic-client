import React, { useEffect, useState} from 'react';
import {Bar, BarChart, CartesianGrid, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';
import {withTranslation} from "react-i18next";
import {API_URL, STORAGE_NAME} from "../../../../utils/constant";

const renderCustomizedLabel = (props) => {
    const {
        x, y, width, height, value,
    } = props;
    return (
        <text fontSize={10} x={x + width + 13} y={y + height} fill={"#000"} textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsBySocialStatus({t}) {
    let invalid = t("invalid")
    let singlemother = t("single_mother")
    let others = t("others")

    const data = useState([
        {name: t("Tashkent City"), id: 1, [invalid]: null, [singlemother]: null, [others]: null},
        {name: t('Tashkent'), id: 2, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Andijan'), id: 3, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Bukhara'), id: 4, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Jizzakh'), id: 5, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Kashka darya'), id: 6, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Navoi'), id: 7, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Namangan'), id: 8, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Samarkand'), id: 9, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Surkhandarya'), id: 10, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Syrdarya'), id: 11, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Fergana'), id: 12, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Khorezm'), id: 13, [invalid]: '', [singlemother]: '', [others]: ''},
        {name: t('Karakalpakstan'), id: 14, [invalid]: '', [singlemother]: '', [others]: ''}
    ]);
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
                item[singlemother] = ""
                item[invalid] = ""
                item[others] = ""
            }
        })
    }))

        return (
            <ResponsiveContainer width="100%" height={"100%"}>
                <BarChart margin={{
                    left: 40
                }} width={400} height={500} data={data} layout="vertical">
                    <CartesianGrid horizontal={false} stroke="#CFD8DC" strokeWidth={0.5}/>
                    <YAxis dataKey="name" type="category"/>
                    <XAxis type={"number"} tickCount={10} domain={[0, "dataMax+10"]}/>
                    <br/>
                    <Legend wrapperStyle={{position: 'relative'}}/>
                    <Tooltip itemStyle={{fontSize:12}} labelStyle={{fontSize:12}}/>
                    <Bar barSize={8}
                         dataKey={invalid} fill="#78BAF3">
                        <LabelList dataKey={invalid} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={singlemother} fill="#F57670">
                        <LabelList dataKey={singlemother} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={others} fill="#B393E0">
                        <LabelList dataKey={others} content={renderCustomizedLabel}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}

export default withTranslation()(StatisticsBySocialStatus);