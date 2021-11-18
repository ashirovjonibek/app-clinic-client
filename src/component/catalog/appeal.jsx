import { Avatar, Badge, Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';

const Appeals=({
    item
})=>{

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
    
        let h = hash % 360;
        return 'hsl('+h+', '+s+'%, '+l+'%)';
    }

    return(
        <div className="container">
            <Badge.Ribbon text="Hippies" color="red">
        <Card className="m-1"
        hoverable
        title={
            <Row gutter={24}>
                <Col xs={12} sm={12} md={12} lg={12}>
                <Avatar className="m-0 p-0" style={{backgroundColor:stringToHslColor("Appeals",50,50),float:'left'}} size={45}>{
                // item?.applicant?.image?
                            // <img src={API_URL+item?.applicant?.image} alt="" />
                            // :item?.applicant?.fullName[0].toUpperCase()
                            "A"
                            }</Avatar>
                            <span className="d-flex p-2 justify-content-center aligin-items-center" style={{backgroundColor:"",float:'left'}} >{"Appeals"}</span>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Badge text="dcsdcsdcsd" color="red"/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Row>
                    <Col xs={3} sm={3} md={3} lg={3}>
                            Murojaat mavzusi:
                        </Col>
                        <Col xs={21} sm={21} md={21} lg={21}>
                            <p style={{wordBreak:"break-all"}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Quia voluptatibus itaque eaque dolore numquam magnam! 
                                Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        }>
            
            <Meta title="Europe Street beat" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi."/>
        </Card>
        </Badge.Ribbon>
        </div>
    )
}

export default Appeals