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
import {STORAGE_NAME} from "../utils/constant";


const renderCustomizedLabel = (props) => {
    const {
        x, y, width, height, value,
    } = props;
    const fireOffset = value.toString().length < 5;
    const offset = fireOffset ? -40 : 5;
    return (
        <text x={x + width + 20} y={y + height - 2} fill={fireOffset ? "#000" : "#000"} textAnchor="end">
            {value}
        </text>
    );
};

function TestStatistics({t}) {

    const [data, setData] = useState([
        {name: 'Toshkent shahar', id: 1, count: 0},
        {name: 'Toshkent', id: 2, count: 0},
        {name: 'Andijon', id: 3, count: 0},
        {name: 'Buxoro', id: 4, count: 0},
        {name: 'Jizzax', id: 5, count: 0},
        {name: 'Qashqa daryo', id: 6, count: 0},
        {name: 'Navoiy', id: 7, count: 0},
        {name: 'Namangan', id: 8, count: 0},
        {name: 'Samarqand', id: 9, count: 0},
        {name: 'Surxondaryo', id: 10, count: 0},
        {name: 'Sirdaryo', id: 11, count: 0},
        {name: 'Farg`ona', id: 12, count: 0},
        {name: 'Xorazm', id: 13, count: 0},
        {name: 'Qoraqalpo g`iston', id: 14, count: 0}
    ]);
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: 'http://67.205.182.147:9090/api/application/filterByRegion',
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

    if (fetch && fetch.map(region => {
        data.map(item => {
            if (item.id === region.regionId) {
                item.count = region.count
            }
        })
    }))

        return (
            <ResponsiveContainer width="100%" height={"100%"}>
                <BarChart margin={{
                    left: 40
                }} width={400} height={500} data={data} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3"/>
                    <YAxis dataKey="name" type="category"/>
                    <XAxis type={"number"} tickCount={10} domain={[0, "dataMax+10"]}/>
                    <br/>
                    {/*<Legend wrapperStyle={{position: 'relative'}}/>*/}
                    <Tooltip/>
                    <Bar barSize={15}
                         dataKey="count" fill="#4E5E80">
                        <LabelList dataKey="count" content={renderCustomizedLabel}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}

export default withTranslation()(TestStatistics);