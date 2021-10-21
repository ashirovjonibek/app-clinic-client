import React from "react";
import { withTranslation } from "react-i18next";

const DocumentText = ({ appeal, t, type }) => {
  return (
    <div className="document-text">
      {type !== "answer" ? (
        <div className="document-text-title">
          <h4>{t("Subject of the appeal")}:</h4>
          <p style={{wordBreak:"break-all"}}>{appeal?.title}</p>
        </div>
      ) : (
        ""
      )}
      <hr
        style={{
          color: "#CACFD2",
          backgroundColor: "#CACFD2",
          height: 1,
          margin: "5px 0",
        }}
      />
      <div className="document-text-item" style={{wordBreak:"break-all"}}>{appeal?.description}</div>
    </div>
  );
};

export default withTranslation()(DocumentText);
