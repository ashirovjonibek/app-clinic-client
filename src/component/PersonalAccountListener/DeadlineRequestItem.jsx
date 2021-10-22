import React from "react";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import {withTranslation} from "react-i18next";
import i18next from "i18next";
import {API_URL} from "../../utils/constant";
import {Audiotrack, FileCopy, Videocam} from "@material-ui/icons";

const DeadlineRequestItem = ({t}) => {
    return (
        <div className="deadline-request-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text="Турсунов Тулкин Мирзаевич" />
                        <div className="id">id: 12345</div>
                    </div>
                    <div className="request-content-title-date">
                        <div className="date-label">
                            Осталось:
                                        </div>
                        <div className="date-item">
                            5 день
                                        </div>
                    </div>
                </div>
                <div className="request-theme">
                    <div>
                        <h3>{t("Subject of the appeal")}:<span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque deleniti deserunt dolorem dolores, impedit ipsa quas qui ratione tempore! Aliquid cumque dolorem enim, esse labore mollitia repellat sint tempore?
                    </span></h3>
                    </div>
                </div>
                <div className="request-content-item">
                    <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores beatae deleniti dolorum eligendi error minima modi nam nostrum vel. Aperiam autem doloribus, esse labore nam nobis perspiciatis suscipit voluptatum.</p>

                </div>
                <div className="categories">
                    <ul>
                        <li>
                            <label htmlFor="">{t("Category of treatment")}</label>
                            <div
                                className="category-item">
                                Jinoiy
                            </div>
                        </li>
                        <li
                        >
                            <label htmlFor="">{t("File")}</label>
                            <div
                                className="file-item">
                                    <a
                                    ><FileCopy/></a>
                            </div>
                        </li>
                        <li
                        >
                            <label htmlFor="">
                            </label>
                            <div

                                className="file-item">
                                <Videocam/>
                            </div>
                        </li>
                        <li
                        >
                            <label htmlFor="">{t("Audio")}</label>
                            <div
                                // title={item?.audio ? props.t("Download the application") : props.t("Doc not found")}

                                // style={{textAlign: "center", cursor: "pointer"}}
                                className="file-item">
                                <Audiotrack/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(DeadlineRequestItem);
