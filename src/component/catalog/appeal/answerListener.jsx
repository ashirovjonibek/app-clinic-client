import {FileOutlined} from '@ant-design/icons';
import {Avatar, Col, Image, Row, Tag, Form, Button, Input} from 'antd';
import React, {useState} from 'react';
import {withTranslation} from 'react-i18next';
import {API_URL} from '../../../utils/constant';
import {types} from "./type";

const AnswerListener = ({item, t, answer, type, setDoc, setDocOpen}) => {
    const [form] = Form.useForm();
    const [isDislike, setIsDislike] = useState(false);

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    }

    const onFinish = (values) => {
        console.log(values)
    };

    return (
        <Row className="border mt-2 rounded" gutter={24}>
            <Col className="pb-2 pt-3 border-bottom mb-2 bg-light" xs={24} sm={24} md={24} lg={24}>
                <h6 style={{fontWeight: 600, fontSize: "20px"}}>
                    Tinglovchi
                </h6>
            </Col>
            <Col className="pb-1" xs={12} sm={12} md={12} lg={12}>
                <Avatar className="m-0 p-0"
                        src={item?.image &&
                        <Image src={item?.image} style={{width: "100%", height: "45px", objectFit: 'cover'}}/>}
                        style={{backgroundColor: stringToHslColor("Listener", 50, 50), float: 'left'}}
                        size={45}>{
                    item?.fullName[0]?.toUpperCase()
                }</Avatar>
                <span className="d-flex pt-2 justify-content-center aligin-items-center"
                      style={{
                          backgroundColor: "",
                          paddingLeft: "5px",
                          fontSize: "20px",
                          fontWeight: "600",
                          float: 'left'
                      }}>{item?.fullName}</span>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
                {answer && <Row gutter={24} className="mt-2">
                    {answer?.description && <Col xs={24} sm={24} md={24} lg={24}>
                        <p className="border-bottom pb-1"
                           style={{fontWeight: "550", fontFamily: "sans-serif", wordBreak: "break-all"}}>
                            <span style={{fontWeight: "600", fontSize: "16px", paddingRight: "5px"}}>Javob matni:</span>
                            {answer?.description}
                        </p>
                    </Col>}
                    <Col className="p-3" xs={24} sm={24} md={24} lg={24}>
                        {answer?.attachmentId && <Row gutter={24}>
                            <Col lg={3} md={4} sm={8} xs={12} className="p-0 pl-3">
                                <span>
                                    File
                                </span>
                            </Col>
                            <Col lg={21} md={20} sm={16} xs={12}>
                                <Row className="float-right" gutter={4}>
                                    <Col xs={24} sm={24} md={24} lg={24} className="text-left">
                                        <span className="mr-2">
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>}
                        <Row>
                            {answer?.attachmentId && <Col lg={3} md={4} sm={8} xs={12} className="p-1">
                                <Tag onClick={() => {
                                    setDoc(API_URL + '/attach/' + answer?.attachmentId[0]);
                                    setDocOpen(true)
                                }} style={{width: "100%", cursor: 'pointer'}} className="text-center p-2 rounded">
                                    <FileOutlined style={{fontSize: "20px"}}/>
                                </Tag>
                            </Col>}
                            <Col lg={answer?.attachmentId ? 21 : 24} md={answer?.attachmentId ? 20 : 24}
                                 sm={answer?.attachmentId ? 16 : 24} xs={answer?.attachmentId ? 12 : 24}
                                 className="p-1">
                                {type === types.getFromBoss &&
                                <Row className="float-right" sm={24} xs={24} lg={4} md={12}>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Tag onClick={() => setIsDislike(!isDislike)}
                                             style={{width: "100%", cursor: 'pointer'}}
                                             className="text-center p-2 bg-danger text-light rounded">
                                            Qoniqarsiz
                                        </Tag>
                                    </Col>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Tag style={{width: "100%", cursor: 'pointer'}}
                                             className="text-center p-2 bg-success text-light rounded">
                                            Qoniqarli
                                        </Tag>
                                    </Col>
                                </Row>}

                            </Col>
                        </Row>

                    </Col>
                </Row>}
                {
                    isDislike && <Row className="p-3" gutter={24}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            style={{
                                width: "100%"
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: "Maydonni to'ldiring"
                                },
                            ]}
                        >
                            <Col lg={24} md={24} sm={24} xs={24}>
                                <Form.Item name={'comment'} label="Izoh">
                                    <Input.TextArea placheholder="Izoh qoldiring!!!"
                                                    style={{width: "100%", height: "100px"}}/>
                                </Form.Item>
                            </Col>
                            <Col lg={24} md={24} sm={24} xs={24}>
                                <Button type="primary" className="float-right m-1" htmlType="submit">
                                    Yuborish
                                </Button>
                                <Button onClick={() => setIsDislike(!isDislike)} type="default"
                                        className="float-right m-1">
                                    Bekor qilish
                                </Button>
                            </Col>
                        </Form>
                    </Row>
                }
            </Col>
        </Row>
    )
}

export default withTranslation()(AnswerListener)