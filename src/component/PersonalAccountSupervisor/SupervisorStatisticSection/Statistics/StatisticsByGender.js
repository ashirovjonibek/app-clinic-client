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
        <text x={x + width + 20} y={y + height - 2} fill={fireOffset ? "#000" : "#000"} textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsByGender({t}) {

    const [data, setData] = useState([
        {name: 'Toshkent shahar', id: 1, erkak: 0, ayol: 0},
        {name: 'Toshkent', id: 2, erkak: 0,ayol: 0},
        {name: 'Andijon', id: 3, erkak: 0,ayol: 0},
        {name: 'Buxoro', id: 4, erkak: 0,ayol: 0},
        {name: 'Jizzax', id: 5, erkak: 0,ayol: 0},
        {name: 'Qashqa daryo', id: 6, erkak: 0,ayol: 0},
        {name: 'Navoiy', id: 7, erkak: 0,ayol: 0},
        {name: 'Namangan', id: 8, erkak: 0,ayol: 0},
        {name: 'Samarqand', id: 9, erkak: 0,ayol: 0},
        {name: 'Surxondaryo', id: 10, erkak: 0,ayol: 0},
        {name: 'Sirdaryo', id: 11, erkak: 0,ayol: 0},
        {name: 'Farg`ona', id: 12, erkak: 0,ayol: 0},
        {name: 'Xorazm', id: 13, erkak: 0,ayol: 0},
        {name: 'Qoraqalpo g`iston', id: 14, erkak: 0,ayol: 0}
    ]);
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
                console.log(JSON.stringify(response.data));
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
                item.erkak = gender.count
                }
                if (gender.gender==="ayol"){
                item.ayol = gender.count
                }
            }else {
                item.ayol=""
                item.erkak=""
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
                    <Bar barSize={10}
                         dataKey="erkak" fill="#78BAF3">
                        <LabelList dataKey="erkak" content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={10}
                         dataKey="ayol" fill="#F57670">
                        <LabelList dataKey="ayol" content={renderCustomizedLabel}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}

export default withTranslation()(StatisticsByGender);