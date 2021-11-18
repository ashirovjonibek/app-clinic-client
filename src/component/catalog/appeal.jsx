import {Avatar, Badge, Button, Card, Col, Image, Input, Row} from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, {useState} from 'react';
import {Typography, Tag,Form} from 'antd';
import {FileOutlined} from '@ant-design/icons'
import VideoCameraOutlined from "@ant-design/icons/lib/icons/VideoCameraOutlined";
import AudioOutlined from "@ant-design/icons/lib/icons/AudioOutlined";
import DislikeOutlined from "@ant-design/icons/lib/icons/DislikeOutlined";
import LikeOutlined from "@ant-design/icons/lib/icons/LikeOutlined";
import './appeals.scss'

const {Text, Link} = Typography;

const Appeals = ({
                     item
                 }) => {

    const [form]=Form.useForm();
    const [show, setShow] = useState(false);
    const [isDislike,setIsDislike]=useState(false);
    const [text, setText] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex  dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex  dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.")

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    }

    const onFinish=(values)=>{
        console.log(values)
    };

    return (
        <div className="container-fluid">
            <Badge.Ribbon text="Hippiescscsdcsdcsd" color="green">
                <Card className="m-2 rounded card-appeals"
                      title={false}>
                    <Row gutter={24}>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Avatar className="m-0 p-0"
                                    src={<Image src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.2.1618553190.1631750400" style={{ width: "100%",height:"45px",objectFit:'cover' }} />}
                                    style={{backgroundColor: stringToHslColor("Appeals", 50, 50), float: 'left'}}
                                    size={45}>{
                                "A"
                            }</Avatar>
                            <span className="d-flex pt-2 justify-content-center aligin-items-center"
                                  style={{
                                      backgroundColor: "",
                                      paddingLeft: "5px",
                                      fontSize: "20px",
                                      fontWeight: "600",
                                      float: 'left'
                                  }}>{"Appeals"}</span>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row gutter={24} className="mt-2">
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <p className="border-bottom pb-1"
                                       style={{fontWeight: "550", fontFamily: "sans-serif", wordBreak: "break-all"}}>
                                        <span style={{fontWeight: "600", fontSize: "16px", paddingRight: "5px"}}>Murojaat mavzusi:</span>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quia voluptatibus itaque eaque dolore numquam magnam!
                                        Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea
                                        iste voluptatibus, sint sequi.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="border rounded" gutter={24}>
                        <Col className="border p-3" lg={24} md={24} sm={24} xs={24}>
                            <p style={{
                                maxHeight: show ? "" : "245px",
                                overflow: show ? "" : 'hidden',
                                transition:"ease 500ms"
                            }} className="text-justify">
                                {
                                    text
                                }

                            </p>
                            {
                                text.length > 1300 && <Button type="link" onClick={() => setShow(!show)}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            }
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Row gutter={24}>
                                <Col className="p-3" xs={24} sm={24} md={6} lg={6}>
                                    <span>
                                        Bo'lim
                                    </span>
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={24} className="p-1">
                                            <Tag style={{width: '100%', fontSize: "16px"}} className="text-center p-2">
                                                cscsdcsd
                                            </Tag>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="p-3" xs={24} sm={24} md={18} lg={18}>
                                    <span>
                                        Files
                                    </span>
                                    <Row>
                                        <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                            <Tag style={{width: "100%"}} className="text-center p-2">
                                                <FileOutlined style={{fontSize: "20px"}}/>
                                            </Tag>
                                        </Col>
                                        <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                            <Tag style={{width: "100%"}} className="text-center p-2">
                                                <VideoCameraOutlined style={{fontSize: "20px"}}/>
                                            </Tag>
                                        </Col>
                                        <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                            <Tag style={{width: "100%"}} className="text-center p-2">
                                                <AudioOutlined style={{fontSize: "20px"}}/>
                                            </Tag>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="border mt-2 rounded" gutter={24}>
                        <Col className="pb-2 pt-3 border-bottom mb-2 bg-light" xs={24} sm={24} md={24} lg={24}>
                            <h6 style={{fontWeight: 600, fontSize: "20px"}}>
                                Kafedra mudiri
                            </h6>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Avatar className="m-0 p-0"
                                    src={<Image src="https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745?k=20&m=1210237745&s=612x612&w=0&h=bNtLzfmabV8hdPKwwsQwgHYKIz1RKdmt5N_i1SnbadA=" style={{ width: "100%",height:"45px",objectFit:'cover' }} />}
                                    style={{backgroundColor: stringToHslColor("Listener", 50, 50), float: 'left'}}
                                    size={45}>{
                                "A"
                            }</Avatar>
                            <span className="d-flex pt-2 justify-content-center aligin-items-center"
                                  style={{
                                      backgroundColor: "",
                                      paddingLeft: "5px",
                                      fontSize: "20px",
                                      fontWeight: "600",
                                      float: 'left'
                                  }}>{"Kafedra mudiri"}</span>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row gutter={24} className="mt-2">
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <p className="pb-1"
                                       style={{fontWeight: "500", fontFamily: "sans-serif", wordBreak: "break-all"}}>
                                        <span style={{fontWeight: "600", fontSize: "16px", paddingRight: "5px"}}>Mudir mulohazasi:</span>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quia voluptatibus itaque eaque dolore numquam magnam!
                                        Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea
                                        iste voluptatibus, sint sequi.
                                    </p>
                                </Col>
                            </Row>
                            {
                                isDislike&&<Row className="p-3" gutter={24}>
                                    <Form
                                        form={form}
                                        layout="vertical"
                                        onFinish={onFinish}
                                        style={{
                                            width:"100%"
                                        }}
                                        rules={[
                                            {
                                                required: true,
                                                message:"Maydonni to'ldiring"
                                            },
                                        ]}
                                    >
                                        <Col lg={24} md={24} sm={24} xs={24}>
                                            <Form.Item name={'comment'} label="Izoh">
                                                <Input.TextArea placheholder="Izoh qoldiring!!!" style={{width:"100%",height:"100px"}}/>
                                            </Form.Item>
                                        </Col>
                                        <Col lg={24} md={24} sm={24} xs={24}>
                                            <Button type="primary" className="float-right m-1" htmlType="submit">
                                                Yuborish
                                            </Button>
                                            <Button onClick={()=>setIsDislike(!isDislike)} type="default" className="float-right m-1">
                                                Bekor qilish
                                            </Button>
                                        </Col>
                                    </Form>
                                </Row>
                            }
                        </Col>
                    </Row>

                    <Row className="border mt-2 rounded" gutter={24}>
                        <Col className="pb-2 pt-3 border-bottom mb-2 bg-light" xs={24} sm={24} md={24} lg={24}>
                            <h6 style={{fontWeight: 600, fontSize: "20px"}}>
                                Tinglovchi
                            </h6>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Avatar className="m-0 p-0"
                                    src={<Image src="https://image.shutterstock.com/image-photo/portrait-young-smiling-caucasian-man-260nw-1491969899.jpg" style={{ width: "100%",height:"45px",objectFit:'cover' }} />}
                                    style={{backgroundColor: stringToHslColor("Listener", 50, 50), float: 'left'}}
                                    size={45}>{
                                "A"
                            }</Avatar>
                            <span className="d-flex pt-2 justify-content-center aligin-items-center"
                                  style={{
                                      backgroundColor: "",
                                      paddingLeft: "5px",
                                      fontSize: "20px",
                                      fontWeight: "600",
                                      float: 'left'
                                  }}>{"Listener"}</span>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row gutter={24} className="mt-2">
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <p className="border-bottom pb-1"
                                       style={{fontWeight: "550", fontFamily: "sans-serif", wordBreak: "break-all"}}>
                                        <span style={{fontWeight: "600", fontSize: "16px", paddingRight: "5px"}}>Javob matni:</span>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quia voluptatibus itaque eaque dolore numquam magnam!
                                        Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea
                                        iste voluptatibus, sint sequi.
                                    </p>
                                </Col>
                                <Col className="p-3" xs={24} sm={24} md={24} lg={24}>
                                    <Row gutter={24}>
                                        <Col lg={3} md={4} sm={8} xs={12} className="p-0 pl-3">
                                            <span>
                                                File
                                            </span>
                                        </Col>
                                        <Col lg={21} md={20} sm={16} xs={12}>
                                            <Row  className="float-right" gutter={4}>
                                                <Col xs={24} sm={24} md={24} lg={24} className="text-left">
                                                    <span className="mr-2">
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={4} sm={8} xs={12} className="p-1">
                                            <Tag style={{width: "100%"}} className="text-center p-2 rounded">
                                                <FileOutlined style={{fontSize: "20px"}}/>
                                            </Tag>
                                        </Col>
                                        <Col lg={21} md={20} sm={16} xs={12} className="p-1">
                                            <Row className="float-right" gutter={4}>
                                                <Col lg={12} md={12} sm={12} xs={12}>
                                                    <Tag onClick={()=>setIsDislike(!isDislike)} style={{width: "100%",cursor:'pointer'}} className="text-center p-2 bg-danger text-light rounded">
                                                        Qoniqarsiz
                                                    </Tag>
                                                </Col>
                                                <Col lg={12} md={12} sm={12} xs={12}>
                                                    <Tag style={{width: "100%",cursor:'pointer'}} className="text-center p-2 bg-success text-light rounded">
                                                        Qoniqarli
                                                    </Tag>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            {
                                isDislike&&<Row className="p-3" gutter={24}>
                                    <Form
                                        form={form}
                                        layout="vertical"
                                        onFinish={onFinish}
                                        style={{
                                            width:"100%"
                                        }}
                                        rules={[
                                            {
                                                required: true,
                                                message:"Maydonni to'ldiring"
                                            },
                                        ]}
                                    >
                                        <Col lg={24} md={24} sm={24} xs={24}>
                                            <Form.Item name={'comment'} label="Izoh">
                                                <Input.TextArea placheholder="Izoh qoldiring!!!" style={{width:"100%",height:"100px"}}/>
                                            </Form.Item>
                                        </Col>
                                        <Col lg={24} md={24} sm={24} xs={24}>
                                            <Button type="primary" className="float-right m-1" htmlType="submit">
                                                Yuborish
                                            </Button>
                                            <Button onClick={()=>setIsDislike(!isDislike)} type="default" className="float-right m-1">
                                                Bekor qilish
                                            </Button>
                                        </Col>
                                    </Form>
                                </Row>
                            }
                        </Col>
                    </Row>

                    <Row className="border mt-2 rounded" gutter={24}>
                        <Col className="pb-2 pt-3 border-bottom mb-2 bg-light" xs={24} sm={24} md={24} lg={24}>
                            <h6 style={{fontWeight: 600, fontSize: "20px"}}>
                                Tinglovchi
                            </h6>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Avatar className="m-0 p-0"
                                    src={<Image src="https://image.shutterstock.com/image-photo/portrait-young-smiling-caucasian-man-260nw-1491969899.jpg" style={{ width: "100%",height:"45px",objectFit:'cover' }} />}
                                    style={{backgroundColor: stringToHslColor("Listener", 50, 50), float: 'left'}}
                                    size={45}>{
                                "A"
                            }</Avatar>
                            <span className="d-flex pt-2 justify-content-center aligin-items-center"
                                  style={{
                                      backgroundColor: "",
                                      paddingLeft: "5px",
                                      fontSize: "20px",
                                      fontWeight: "600",
                                      float: 'left'
                                  }}>{"Listener"}</span>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row gutter={24} className="mt-2">
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <p className="border-bottom pb-1"
                                       style={{fontWeight: "550", fontFamily: "sans-serif", wordBreak: "break-all"}}>
                                        <span style={{fontWeight: "600", fontSize: "16px", paddingRight: "5px"}}>Javob matni:</span>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quia voluptatibus itaque eaque dolore numquam magnam!
                                        Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea
                                        iste voluptatibus, sint sequi.
                                    </p>
                                </Col>
                                <Col className="p-3" xs={24} sm={24} md={24} lg={24}>
                                    <Row gutter={24}>
                                        <Col lg={3} md={4} sm={8} xs={12} className="p-0 pl-3">
                                            <span>
                                                File
                                            </span>
                                        </Col>
                                        <Col lg={21} md={20} sm={16} xs={12}>
                                            <Row  className="float-right" gutter={4}>
                                                <Col xs={24} sm={24} md={24} lg={24} className="text-left">
                                                    <span className="mr-2">
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={4} sm={8} xs={12} className="p-1">
                                            <Tag style={{width: "100%"}} className="text-center p-2 rounded">
                                                <FileOutlined style={{fontSize: "20px"}}/>
                                            </Tag>
                                        </Col>
                                        <Col lg={21} md={20} sm={16} xs={12} className="p-1">
                                            <Row className="float-right" gutter={4}>
                                                <Col lg={12} md={12} sm={12} xs={12}>
                                                    <Tag onClick={()=>setIsDislike(!isDislike)} style={{width: "100%",cursor:'pointer'}} className="text-center p-2 bg-danger text-light rounded">
                                                        <DislikeOutlined style={{fontSize: "20px"}}/>
                                                    </Tag>
                                                </Col>
                                                <Col lg={12} md={12} sm={12} xs={12}>
                                                    <Tag style={{width: "100%",cursor:'pointer'}} className="text-center p-2 bg-success text-light rounded">
                                                        <LikeOutlined style={{fontSize: "20px"}}/>
                                                    </Tag>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            {
                                isDislike&&<Row className="p-3" gutter={24}>
                                    <Form
                                        form={form}
                                        layout="vertical"
                                        onFinish={onFinish}
                                        style={{
                                            width:"100%"
                                        }}
                                        rules={[
                                            {
                                                required: true,
                                                message:"Maydonni to'ldiring"
                                            },
                                        ]}
                                    >
                                        <Col lg={24} md={24} sm={24} xs={24}>
                                            <Form.Item name={'comment'} label="Izoh">
                                                <Input.TextArea placheholder="Izoh qoldiring!!!" style={{width:"100%",height:"100px"}}/>
                                            </Form.Item>
                                        </Col>
                                        <Col lg={24} md={24} sm={24} xs={24}>
                                            <Button type="primary" className="float-right m-1" htmlType="submit">
                                                Yuborish
                                            </Button>
                                            <Button onClick={()=>setIsDislike(!isDislike)} type="default" className="float-right m-1">
                                                Bekor qilish
                                            </Button>
                                        </Col>
                                    </Form>
                                </Row>
                            }
                        </Col>
                    </Row>
                </Card>
            </Badge.Ribbon>
        </div>
    )
}

export default Appeals