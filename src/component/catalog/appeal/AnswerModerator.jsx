import { Avatar, Col, Image, Row } from 'antd';
import React from 'react';

const AnswerModerator = () => {

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    }

    return (
        <Row className="border mt-2 rounded" gutter={24}>
            <Col className="pb-1 pt-1 border-bottom" style={{backgroundColor:"#fff2e8"}} xs={24} sm={24} md={24} lg={24}>
                <p
                    style={{ fontWeight: "500", fontFamily: "sans-serif", wordBreak: "break-all" }}>
                    <span style={{ fontWeight: "600", fontSize: "16px", paddingRight: "5px" }}>Mudir mulohazasi:</span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia voluptatibus itaque eaque dolore numquam magnam!
                    Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea
                    iste voluptatibus, sint sequi.
                </p>
            </Col>
        </Row>
    )
}

export default AnswerModerator