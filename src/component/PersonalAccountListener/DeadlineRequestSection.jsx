import React, {useEffect, useState} from "react";
import DeadlineRequestItem from "./DeadlineRequestItem";
import {Col, Form, Input, message, Row, Select} from "antd";
import {withTranslation} from "react-i18next";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import CustomPagination from "../catalog/Pagenation";

const {Item} = Form;
const DeadlineRequestSection = ({t}) => {
    const [form] = Form.useForm();
    const [appeals, setAppeals] = useState([]);
    const [size, setSize] = useState(3);
    const [active, setActive] = useState(1);
    const [total, setTotal] = useState(0);
    const [prefix, setPrefix] = useState({
        status: "",
        search: ""
    })
    const [status, setStatus] = useState([
        {
            name: "Yangi",
            value: "CREATED"
        },
        {
            name: "Jarayonda",
            value: "INPROCESS"
        },
        {
            name: "Bajarilgan",
            value: "COMPLETED"
        },
    ]);
    useEffect(() => {
        let a = "";
        if (prefix?.search && prefix?.status) {
            a = "&status=" + prefix?.status + "&search=" + prefix?.search
        } else if (prefix?.search) {
            a = "&search=" + prefix?.search
        } else if (prefix?.status) {
            a = "&status=" + prefix?.status
        }

        axios({
            method: 'get',
            url: API_URL + `/document/get-all?page=${active - 1}&size=${size}${a}`,
            headers: {
                Authorization: localStorage.getItem(STORAGE_NAME),
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res)
            setAppeals(res?.data?.object);
            setTotal(res?.data?.totalPages);
        }).catch((e) => {
            message.error("Xatolik yuz berdi");
        })
    }, [prefix, active, size]);


    console.log(prefix);
    return (
        <div className="deadline-request-section">
            <Form form={form} layout={"vertical"}>
                <Row gutter={24}>
                    <Col xs={24} sm={24} md={12} lg={{span: 8}}>
                        <Item
                            name="status"
                        >
                            <Select onChange={(e) => {
                                setPrefix({
                                    ...prefix,
                                    status: e
                                })
                            }} allowClear placeholder="Holat bo'yicha saralash">
                                {
                                    status?.map((item, i) =>
                                        <Select.Option key={i} value={item?.value}>
                                            {item?.name}
                                        </Select.Option>
                                    )
                                }
                            </Select>
                        </Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={{span: 8, offset: 8}}>
                        <Item
                            name="search"
                        >
                            <Input.Search onChange={(e) => {
                                setPrefix({
                                    ...prefix,
                                    search: e?.target?.value
                                })
                            }} placeholder={t("Search")}/>
                        </Item>
                    </Col>
                </Row>
            </Form>
            {
                appeals && appeals?.map((item, i) =>
                    <DeadlineRequestItem key={i} appeal={item?.application}/>
                )
            }
            <div>
                {total > 0 && <CustomPagination
                    pageLength={total}
                    setActive={setActive}
                    active={active}
                    size={size}
                    setSize={setSize}
                />}
            </div>
        </div>
    );
}

export default withTranslation()(DeadlineRequestSection);
