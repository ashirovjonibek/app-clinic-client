import React, {useEffect, useState} from "react";
import Title from "../Title";
import {Link, useHistory} from "react-router-dom";
import YourAppealSection from "./YourAppealSection";
import PerAccAppCallFlowSection from "./PerAccAppCallFlowSection";
import PerAccAppPeriodSection from "./PerAccAppPeriodSection";
import PerAccAppResponseRequest from "./PerAccAppResponseRequest";
import SendSection from "../PersonalAccountListener/SendSection";
import ApplicationNav from "./ApplicationNav";
import Footer from "../Footer/Footer";
import {CustomPagination} from "../catalog/Pagenation";
import {STORAGE_NAME} from "../../utils/constant";
import {withTranslation} from "react-i18next";

const PersonalAccountApplicant = (props) => {

    const [pageQount, setPageQount] = useState(1);
    const [sitebar, setSitebar] = useState(false);
    const [appeal, setAppeal] = useState([]);
    const history = useHistory();


    // console.log(pageSize)
    function pushBar(n) {
        switch (n) {
            case 1:
                return <YourAppealSection n={n} setAppeal={setAppeal}/>
            case 2:
                return <PerAccAppCallFlowSection />
            case 3:
                return <PerAccAppPeriodSection />
            case 4:
                return <PerAccAppResponseRequest appeal={appeal}/>
            case 5:
                return <SendSection />
        }
    }
    useEffect(() => {
        // console.log("this is redux->",me)
        if (!localStorage.getItem(STORAGE_NAME)) {
            history.push("/auth/login")
        }

    }, [])
    const getPage = (n) => {
        setPageQount(n);
    }

    return (
        <div>
            <ApplicationNav getPage={getPage} setSitebar={setSitebar} sitebar={sitebar}/>
            <div className="acount-applicant container-fluit" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <Title text={props.t("Personal account")} />
                    <section className="section-body">
                        <div className="navbar-wrapper">
                            <div className="navbarr">
                                <ul>
                                    <li className="navbar-items ">
                                        <Link to="/applicantAppeal">{props.t("Create a new appeal")}</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 1 ? "active" : ""}>
                                        <Link to="#" onClick={() => getPage(1)}>{props.t("Your appeal")}</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 2 ? "active" : ""}>
                                        <Link to="#" onClick={() => getPage(2)}>{props.t("Document status")}</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 3 ? "active" : ""}>
                                        <Link to="#" onClick={() => getPage(3)}>{props.t("Consideration period")}</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 4 ? "active" : ""}>
                                        <Link to="#" onClick={() => getPage(4)}>{props.t("Responses to requests")}</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 5 ? "active" : ""}>
                                        <Link to="#" onClick={() => getPage(5)}>{props.t("Message center")}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {
                                pushBar(pageQount)
                            }

                        </div>

                    </section>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default withTranslation()(PersonalAccountApplicant);
