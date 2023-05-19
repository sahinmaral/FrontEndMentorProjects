import { Button } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { steps } from "../models/constants";

function NavigationButtons() {
  const location = useLocation();

  const currentStep = Object.values(steps).find((step) => step.path === location.pathname);


  return (
    <>
      {currentStep.prevPath && (
        <Link to={currentStep.prevPath} className="go-back-button">
          <p>Go Back</p>
        </Link>
      )}

      <Link to={currentStep.nextPath}>
        <Button type="primary" className="next-step-button">
          Next Step
        </Button>
      </Link>
    </>
  );
}

export default NavigationButtons;
