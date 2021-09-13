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
        <text fontSize={9} x={x + width + 10} y={y + height} fill={fireOffset ? "#000" : "#000"} textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsByCategory({t}) {

    const [data, setData] = useState([
        {name: 'Toshkent shahar', id: 1},
        {name: 'Toshkent', id: 2},
        {name: 'Andijon', id: 3},
        {name: 'Buxoro', id: 4},
        {name: 'Jizzax', id: 5},
        {name: 'Qashqa daryo', id: 6},
        {name: 'Navoiy', id: 7},
        {name: 'Namangan', id: 8},
        {name: 'Samarqand', id: 9},
        {name: 'Surxondaryo', id: 10},
        {name: 'Sirdaryo', id: 11},
        {name: 'Farg`ona', id: 12},
        {name: 'Xorazm', id: 13},
        {name: 'Qoraqalpo g`iston', id: 14}
    ]);

    const [bySocialStatus, setBySocialStatus] = useState([]);
    const [section, setSection] = useState([]);

    useEffect(() => {
        fetchData()
        fetchSection()
    }, [])

    function fetchData() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/application/filterBySection',
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

    function fetchSection() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/section',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };
        axios(config)
            .then(function (response) {
                setSection(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    if (bySocialStatus && bySocialStatus.map(item => {
        section && section.map(sec => {
            data && data.map(itemData => {
                setData({
                    ...data,
                    itemData: {
                        ...itemData,
                        [section.title.uz]: item.count
                    }
                })
            })
        })
    }))

        /*if (fetch && fetch.map(status => {
            data.map(item => {
                if (item.id === status.regionId) {
                    if (status.status === "COMPLETED") {
                        item.completed = status.count
                    }
                    if (status.status === "CREATED") {
                        item.new = status.count
                    }
                    if (status.status === "INPROCESS") {
                        item.inprocess = status.count
                    }
                } else {
                    item.completed = ""
                    item.new = ""
                    item.inprocess = ""
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
                         dataKey="new" fill="#78BAF3">
                        <LabelList dataKey="new" content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={7}
                         dataKey="inprocess" fill="#BAFF85">
                        <LabelList dataKey="inprocess" content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={7}
                         dataKey="completed" fill="#F57670">
                        <LabelList dataKey="completed" content={renderCustomizedLabel}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}

export default withTranslation()(StatisticsByCategory);

