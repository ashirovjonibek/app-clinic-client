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
import axios from "axios";

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
    const i18 = localStorage.getItem('I18N_LANGUAGE');

    const [data, setData] = useState([]);
    const [section, setSection] = useState([]);

    const stringToHslColor=(str, s, l)=> {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl('+h+', '+s+'%, '+l+'%)';
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + '/application/filterBySection',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        })
            .then(function (res) {
                let filter = res.data;
                axios({
                    method: 'get',
                    url: API_URL + '/section',
                    headers: {
                        'Authorization': localStorage.getItem(STORAGE_NAME)
                    }
                })
                    .then((response) => {
                        let d = response.data;
                        let a = [];
                        axios({
                            method: 'get',
                            url: API_URL + '/region'
                        }).then((response1) => {
                            let dat = response1.data?._embedded?.regions;
                            console.log(dat);
                            filter.map((item1) => {
                                dat.map((item) => {
                                    let b = {name: item.name[i18], id: item.id};
                                    d.map((sec, i) => {
                                        let kafedra = sec.title[i18];
                                        let kafedra1 = kafedra.toString();
                                        let kafedra3 = kafedra1.replace('-', '_');
                                        let kafedra4 = kafedra3.trim();
                                        let kafedra5 = kafedra4.replace(' ', '_');

                                        console.log("filter region id", item1.regionId);
                                        if (item1.regionId === item.id) {
                                            item1.counts.map((count) => {
                                                if (count.sectionId === sec.id) {
                                                    b = {...b, [kafedra5]: count.count}
                                                }
                                            })
                                        }else {
                                            b = {...b, [kafedra5]: 0}
                                        }
                                    });
                                    a.push(b);
                                });
                                console.log("all data------------>", a)
                            });
                            setData(a)
                            setSection(d)
                        })

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <ResponsiveContainer width="100%" height={"100%"}>
            <BarChart margin={{
                left: 45
            }} width={400} height={500} data={data} layout="vertical">
                <CartesianGrid horizontal={false} stroke="#CFD8DC" strokeWidth={0.5}/>
                <YAxis dataKey={"name"} type="category"/>
                <XAxis type={"number"} tickCount={10} domain={[0, "dataMax+10"]}/>
                <input type="checkbox"/>
                <Legend wrapperStyle={{position: 'relative'}}/>
                <Tooltip itemStyle={{fontSize: 12}} labelStyle={{fontSize: 12}}/>

                {section && section.map((sec, i) => {
                    let kafedra = sec.title[i18]
                    let kafedra1 = kafedra.toString()
                    let kafedra3 = kafedra1.replace('-', '_')
                    let kafedra4 = kafedra3.trim()
                    let kafedra5 = kafedra4.replace(' ', '_')
                    // console.log(kafedra5)
                    return (

                        <Bar key={i} barSize={7}
                             dataKey={kafedra5} fill={stringToHslColor(kafedra5,50,50)}>
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

