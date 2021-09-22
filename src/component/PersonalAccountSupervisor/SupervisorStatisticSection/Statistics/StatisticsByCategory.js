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
    return (
        <text fontSize={9} x={x + width + 10} y={y + height} fill="#000" textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsByCategory({t}) {
    const i18 = localStorage.getItem('I18N_LANGUAGE')

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

    const [section, setSection] = useState([]);
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        fetchData()
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
                fetchSection()
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
                {
                    let d = response.data;
                    let a = []

                    data.map((item) => {
                        let b = {region: item.name, id: item.id}
                        d.map((sec, i) => {
                            let kafedra = sec.title["uz"]
                            let kafedra1 = kafedra.toString()
                            let kafedra3 = kafedra1.replace('-', '_')
                            let kafedra4 = kafedra3.trim()
                            let kafedra5 = kafedra4.replace(' ', '_')
                            b = {...b, [kafedra5]: 0}
                        })
                        a.push(b)
                        console.log("all data------------>", a)
                    })
                    setData(a)
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <ResponsiveContainer width="100%" height={"100%"}>
            <BarChart margin={{
                left: 45
            }} width={400} height={500} data={data} layout="vertical">
                <CartesianGrid horizontal={false} stroke="#CFD8DC" strokeWidth={0.5}/>
                <YAxis dataKey={data.region ? "region" : "name"} type="category"/>
                <XAxis type={"number"} tickCount={10} domain={[0, "dataMax+10"]}/>
                <input type="checkbox"/>
                <Legend wrapperStyle={{position: 'relative'}}/>
                <Tooltip itemStyle={{fontSize: 12}} labelStyle={{fontSize: 12}}/>

                {section && section.map((sec, i) => {
                    let kafedra = sec.title["uz"]
                    let kafedra1 = kafedra.toString()
                    let kafedra3 = kafedra1.replace('-', '_')
                    let kafedra4 = kafedra3.trim()
                    let kafedra5 = kafedra4.replace(' ', '_')
                    // console.log(kafedra5)
                    return (

                        <Bar key={i} barSize={7}
                             dataKey={kafedra5} fill="#78BAF3">
                            {/*<LabelList dataKey={sec.title[i18]}*/}
                            {/*           content={renderCustomizedLabel}/>*/}
                        </Bar>
                    )
                })}

            </BarChart>
        </ResponsiveContainer>
    );
}

export default withTranslation()(StatisticsByCategory);

