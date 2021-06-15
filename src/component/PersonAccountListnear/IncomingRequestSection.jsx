import React from "react";
import ContentTop from "../ContentTop";
import IncomingRequestItem from "./IncomingRequestItem";

const IncomingRequestSection = () => {
    return (
        <div className="incoming-request-section">
            <ContentTop />
            <IncomingRequestItem/>
        </div>
    );
}

export default IncomingRequestSection;
