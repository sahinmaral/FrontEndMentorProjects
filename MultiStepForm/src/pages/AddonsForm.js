import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AddonCard from "../components/AddonCard";
import { addons } from "../models/constants";
import PageDescription from "../components/PageDescription";

function AddonsForm() {
  return (
    <div className="addons-page page">

      <PageDescription title="Pick addo-ons" description="Add-ons help enhance your gaming experience."/>

      <div className="addons-group">
        {Object.keys(addons).map((key) => {
          return <AddonCard addon={key} key={addons[key].title} />;
        })}
      </div>

      <div className="navigation-buttons">
        <Link to="/step-2" className="go-back-button">
          <p>Go Back</p>
        </Link>

        <Link to="/summary">
          <Button type="primary" className="next-step-button">
            Next Step
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AddonsForm;
