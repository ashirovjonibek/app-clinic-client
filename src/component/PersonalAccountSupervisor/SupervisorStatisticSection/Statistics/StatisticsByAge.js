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
        <text fontSize={9} x={x + width + 12} y={y + height} fill={"#000"} textAnchor="end">
            {value}
        </text>
    );
};

function StatisticsByAge({t}) {
    let fromZeroToSeventeen = t("fromZeroToSeventeen")
    let fromEighteenToThirty = t("fromEighteenToThirty")
    let fromThirtyOneToFortyFive = t("fromThirtyOneToFortyFive")
    let fromFortySixToSixty = t("fromFortySixToSixty")
    let fromSixtyOne = t("fromSixtyOne")

    const data = [
        {
            name: t("Tashkent City"),
            id: 1,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Tashkent'),
            id: 2,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Andijan'),
            id: 3,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Bukhara'),
            id: 4,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Jizzakh'),
            id: 5,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Kashka darya'),
            id: 6,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Navoi'),
            id: 7,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Namangan'),
            id: 8,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Samarkand'),
            id: 9,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Surkhandarya'),
            id: 10,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Syrdarya'),
            id: 11,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Fergana'),
            id: 12,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Khorezm'),
            id: 13,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        },
        {
            name: t('Karakalpaks tan'),
            id: 14,
            [fromZeroToSeventeen]: 0,
            [fromEighteenToThirty]: 0,
            [fromThirtyOneToFortyFive]: 0,
            [fromFortySixToSixty]: 0,
            [fromSixtyOne]: 0
        }
    ];
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + '/application/filterByAge',
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

    if (fetch && fetch.map(age => {
        data.map(dataItem => {
            if (dataItem.id === age.regionId) {
                age.counts.map(ageItem => {
                    if (ageItem.age === "fromZeroToSeventeen") {
                        dataItem[fromZeroToSeventeen] = ageItem.count
                    } else {
                        if (dataItem[fromZeroToSeventeen] === 0) {
                            dataItem[fromZeroToSeventeen] = ""
                        }
                    }

                    if (ageItem.age === "fromEighteenToThirty") {
                        dataItem[fromEighteenToThirty] = ageItem.count
                    } else {
                        if (dataItem[fromEighteenToThirty] === 0) {
                            dataItem[fromEighteenToThirty] = ""
                        }
                    }

                    if (ageItem.age === "fromThirtyOneToFortyFive") {
                        dataItem[fromThirtyOneToFortyFive] = ageItem.count
                    } else {
                        if (dataItem[fromThirtyOneToFortyFive] === 0) {
                            dataItem[fromThirtyOneToFortyFive] = ""
                        }
                    }

                    if (ageItem.age === "fromFortySixToSixty") {
                        dataItem[fromFortySixToSixty] = ageItem.count
                    } else {
                        if (dataItem[fromFortySixToSixty] === 0) {
                            dataItem[fromFortySixToSixty] = ""
                        }
                    }

                    if (ageItem.age === "fromSixtyOne") {
                        dataItem[fromSixtyOne] = ageItem.count
                    } else {
                        if (dataItem[fromSixtyOne] === 0) {
                            dataItem[fromSixtyOne] = ""
                        }
                    }
                })
            } else {
                dataItem[fromSixtyOne] = ""
                dataItem[fromFortySixToSixty] = ""
                dataItem[fromThirtyOneToFortyFive] = ""
                dataItem[fromEighteenToThirty] = ""
                dataItem[fromZeroToSeventeen] = ""
            }
        })
    }))

        return (
            <ResponsiveContainer width="100%" height={"97%"}>
                <BarChart margin={{
                    left: 45
                }} width={400} height={500} data={data} layout="vertical">
                    <CartesianGrid horizontal={false} stroke="#CFD8DC" strokeWidth={0.5}/>
                    <YAxis dataKey="name" type="category"/>
                    <XAxis type={"number"} tickCount={10} domain={[0, "dataMax+10"]}/>
                    <Legend wrapperStyle={{position: 'relative'}}/>
                    <Tooltip itemStyle={{fontSize: 12}} labelStyle={{fontSize: 12}}/>
                    <Bar barSize={8}
                         dataKey={fromZeroToSeventeen} fill="#5DDAF0">
                        <LabelList dataKey={t("fromZeroToSeventeen")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={fromEighteenToThirty} fill="#B393E0">
                        <LabelList dataKey={t("fromEighteenToThirty")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={fromThirtyOneToFortyFive} fill="#DAF285">
                        <LabelList dataKey={t("fromThirtyOneToFortyFive")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={fromFortySixToSixty} fill="#F57670">
                        <LabelList dataKey={t("fromFortySixToSixty")} content={renderCustomizedLabel}/>
                    </Bar>
                    <Bar barSize={8}
                         dataKey={fromSixtyOne} fill="#78BAF3">
                        <LabelList dataKey={t("fromSixtyOne")} content={renderCustomizedLabel}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}

export default withTranslation()(StatisticsByAge);