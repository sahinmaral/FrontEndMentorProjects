import React from "react";
import successIcon from "../images/icon-thank-you.svg";

function ConfirmPage() {
  return (
    <div className="confirm-page page">
      <div className="success-icon">
        <img src={successIcon} alt="success"/>
      </div>
      <h1 className="page-title">Thank you</h1>
      <p className="page-description">
        Thanks for confirming your subscription. We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ConfirmPage;
