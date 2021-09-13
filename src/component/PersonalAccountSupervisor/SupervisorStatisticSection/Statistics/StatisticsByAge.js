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

function StatisticsByAge({t}) {

    const [data, setData] = useState([
        {name: 'Toshkent shahar', id: 1, seventeen: 13, thirty: 22, fortyfive: 14, sixty: 44, sixtyabove: 33},
        {name: 'Toshkent', id: 2, seventeen: 33, thirty: 44, fortyfive: 22, sixty: 55, sixtyabove: 23},
        {name: 'Andijon', id: 3, seventeen: 25, thirty: 54, fortyfive: 16, sixty: 23, sixtyabove: 44},
        {name: 'Buxoro', id: 4, seventeen: 25, thirty: 16, fortyfive: 54, sixty: 16, sixtyabove: 47},
        {name: 'Jizzax', id: 5, seventeen: 34, thirty: 13, fortyfive: 45, sixty: 12, sixtyabove: 56},
        {name: 'Qashqa daryo', id: 6, seventeen: 67, thirty: 43, fortyfive: 35, sixty: 43, sixtyabove: 76},
        {name: 'Navoiy', id: 7, seventeen: 33, thirty: 44, fortyfive: 16, sixty: 47, sixtyabove: 54},
        {name: 'Namangan', id: 8, seventeen: 19, thirty: 13, fortyfive: 65, sixty: 33, sixtyabove: 34},
        {name: 'Samarqand', id: 9, seventeen: 20, thirty: 67, fortyfive: 13, sixty: 55, sixtyabove: 23},
        {name: 'Surxondaryo', id: 10, seventeen: 43, thirty: 45, fortyfive: 54, sixty: 22, sixtyabove: 55},
        {name: 'Sirdaryo', id: 11, seventeen: 55, thirty: 34, fortyfive: 13, sixty: 33, sixtyabove: 64},
        {name: 'Farg`ona', id: 12, seventeen: 34, thirty: 22, fortyfive: 23, sixty: 13, sixtyabove: 17},
        {name: 'Xorazm', id: 13, seventeen: 22, thirty: 44, fortyfive: 43, sixty: 11, sixtyabove: 25},
        {name: 'Qoraqalpo g`iston', id: 14, seventeen: 33, thirty: 76, fortyfive: 13, sixty: 44, sixtyabove: 15}
    ]);
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        // fetchData()
    }, [])

    function fetchData() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL+'/application/filterByAge',
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

    /* if (fetch && fetch.map(gender => {
         data.map(item => {
             if (item.id === gender.regionId) {
                 if (gender.gender === "erkak") {
                     item.erkak = gender.count
                 }
                 if (gender.gender === "ayol") {
                     item.ayol = gender.count
                 }
             } else {
                 item.ayol = ""
                 item.erkak = ""
             }
         })
     }))*/

    return (
        <ResponsiveContainer width="100%" height={"100%"}>
            <BarChart margin={{
                left: 40
            }} width={400} height={500} data={data} layout="vertical">
                <CartesianGrid horizontal={false} stroke="#CFD8DC" strokeWidth={0.5}/>
                <YAxis dataKey="name" type="category"/>
                <XAxis type={"number"} tickCount={10} domain={[0, "dataMax+10"]}/>
                    <input type="checkbox"/>
                <Legend wrapperStyle={{position: 'relative'}}/>
                <Tooltip/>
                <Bar barSize={7}
                     dataKey="seventeen" fill="#5DDAF0">
                    {/*<LabelList dataKey="seventeen" content={renderCustomizedLabel}/>*/}
                </Bar>
                <Bar barSize={7}
                     dataKey="thirty" fill="#B393E0" >
                    {/*<LabelList dataKey="thirty" content={renderCustomizedLabel}/>*/}
                </Bar>
                <Bar barSize={7}
                     dataKey="fortyfive" fill="#DAF285">
                    {/*<LabelList dataKey="fortyfive" content={renderCustomizedLabel}/>*/}
                </Bar>
                <Bar barSize={7}
                     dataKey="sixty" fill="#F57670">
                    {/*<LabelList dataKey="sixty" content={renderCustomizedLabel}/>*/}
                </Bar>
                <Bar barSize={7}
                     dataKey="sixtyabove" fill="#78BAF3">
                    {/*<LabelList dataKey="sixtyabove" content={renderCustomizedLabel}/>*/}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default withTranslation()(StatisticsByAge);