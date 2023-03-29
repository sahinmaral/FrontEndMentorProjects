import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { plans } from "../models/constants";
import PageDescription from "../components/PageDescription";
import OptionCard from "../components/OptionCard";
import DurationSelect from "../components/DurationSelect";

function PlanForm() {
  return (
    <div className="plan-page page">
      <PageDescription
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />

      <div className="plan-options">
        <Space size={25}>
          {Object.keys(plans).map((key) => {
            return <OptionCard option={key} key={plans[key].title} />;
          })}
        </Space>
      </div>

      <div className="plan-options mobile">
        {Object.keys(plans).map((key) => {
          return <OptionCard option={key} key={plans[key].title} />;
        })}
      </div>

      <DurationSelect />

      <div className="navigation-buttons">
        <Link to="/" className="go-back-button">
          <p>Go Back</p>
        </Link>

        <Link to="/step-3">
          <Button type="primary" className="next-step-button">
            Next Step
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PlanForm;
