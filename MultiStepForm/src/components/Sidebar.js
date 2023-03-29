import React from "react";
import { useLocation } from "react-router-dom";
import { steps } from "../models/constants";

function Sidebar() {

  const location = useLocation()

  return (
    <>
      {Object.keys(steps).map((key,index) => {
        return (
          <div className="steps" key={key}>
            <div className={`step-circle ${location.pathname === steps[key].path && "current"}`}>{index+1}</div>
            <div className="step-info">
              <p>Step {index+1}</p>
              <p className="step-title">{steps[key].description}</p>
            </div>
          </div>
        );
      })}
      {/* <div className="steps">
        <div className="step-circle">1</div>
        <div className="step-info">
          <p>Step 1</p>
          <p className="step-title">YOUR INFO</p>
        </div>
      </div>
      <div className="steps">
        <div className="step-circle">2</div>
        <div className="step-info">
          <p>Step 2</p>
          <p className="step-title">SELECT PLAN</p>
        </div>
      </div>
      <div className="steps">
        <div className="step-circle">3</div>
        <div className="step-info">
          <p>Step 3</p>
          <p className="step-title">ADD-ONS</p>
        </div>
      </div>
      <div className="steps">
        <div className="step-circle">4</div>
        <div className="step-info">
          <p>Step 4</p>
          <p className="step-title">SUMMARY</p>
        </div>
      </div> */}
    </>
  );
}

export default Sidebar;
