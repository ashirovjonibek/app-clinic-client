import React from "react";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";

const CenterSends = (props) => {
    return (
        <div>
            <div className="new">
                <div className="new-item">1</div>
            </div>
            <div className="content" style={{ marginBottom: '-7px' }}>
                <div className="fedbeck">
                    {/*<div className="request-content-title-name">*/}
                    {/*    <div className="applicant-image"></div>*/}
                    {/*    <div className="name"><h3>Aliyev Vali Galievich</h3></div>*/}
                    {/*</div>*/}
                    <UserName text={"Aliyev Vali Galievich"}/>

                    <div className="fedbeck-right">
                        <ButtonDefault text="Открыть" />
                    </div>
                    <p className="hours">12ч назад</p>
                </div>
            </div>
        </div>

    );
}

export default CenterSends;
