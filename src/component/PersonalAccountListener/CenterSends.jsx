import React from "react";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";

const CenterSends = (props) => {
    return (
        <div>
            <div className="new">
                <div className="new-item">1</div>
            </div>
            <div className="content">
                <div className="fedbeck">
                    <div className="request-content-title-name">
                        <div className="applicant-image"></div>
                        <div className="name"><h3>Aliyev Vali Galievich</h3></div>
                    </div>
                    <div className="fedbeck-right">
                        {/* <div className="new">1</div> */}
                        <ButtonDefault text="Открыть" />
                        <p>12ч назад</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CenterSends;
