import React from "react";
import UserItem from "../UserItem";
import Stars from "../Stars";
import {withTranslation} from "react-i18next";

const ModeratorListnearReytingItem = ({t, item}) => {
    return (
        <div className="moderator-listnear-reyting-item">
            <div className="content">
                <div className="fedbeck">
                    <UserItem p={item}/>
                    <div className="reyting-stars">
                        <div style={{marginRight: '10px'}}>{t("Rating")}:</div>
                        <Stars stars={item.stars}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(ModeratorListnearReytingItem);
