import { Checkbox } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addons } from "../models/constants";
import { durationEnum } from "../models/enums";
import { setAddons } from "../redux/subscription/subscriptionSlice";

function AddonCard({ addon }) {
  const { duration, selectedAddons } = useSelector(
    (state) => state.subscription
  );

  const dispatch = useDispatch();

  const handleChange = (event, selectedAddon) => {
    dispatch(setAddons({
        selectedAddon,
        isSelected:event.target.checked
    }));
  };

  return (
    <div className="addon-card">
      <div className="left-side">
        <div className="addon-check">
          <Checkbox
            defaultChecked={selectedAddons.includes(addons[addon].title)}
            onChange={(e) => {handleChange(e,addons[addon].title)}}
          />
        </div>
        <div className="addon-description">
          <p className="addon-title">{addons[addon].title}</p>
          <p className="addon-info">{addons[addon].description}</p>
        </div>
      </div>
      <div className="addon-price">
        {duration === durationEnum.MONTHLY
          ? `+$${addons[addon].monthly}/mo`
          : `+$${addons[addon].yearly}/yr`}
      </div>
    </div>
  );
}

export default AddonCard;
