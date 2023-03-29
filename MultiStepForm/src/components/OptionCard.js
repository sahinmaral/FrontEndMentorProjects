import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plans } from "../models/constants";
import { durationEnum } from "../models/enums";
import { setPlan } from "../redux/subscription/subscriptionSlice";
import PlanIcon from "./PlanIcon";

function OptionCard({ option }) {
  const { selectedPlan, duration } = useSelector((state) => state.subscription);

  const dispatch = useDispatch();

  const handleClick = (currentPlan) => {
    dispatch(setPlan(currentPlan));
  };

  return (
    <div
      className={`option ${selectedPlan === plans[option].title && "selected"}`}
      onClick={() => {
        handleClick(plans[option].title);
      }}
    >
      <div className="option-icon">
        <PlanIcon url={plans[option].icon} alt={plans[option].title} />
      </div>
      <div className="option-description">
        <p className="option-title">{plans[option].title}</p>
        <p className="option-price">
          {duration === durationEnum.MONTHLY
            ? `$${plans[option].monthly}/mo`
            : `$${plans[option].yearly}/yr`}
        </p>
        {duration === durationEnum.YEARLY && (
          <p className="option-discount">2 months free</p>
        )}
      </div>
    </div>
  );
}

export default OptionCard;
