import { Switch } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { durationEnum } from "../models/enums";
import { setDuration } from "../redux/subscription/subscriptionSlice";

function DurationSelect() {
  const { duration } = useSelector((state) => state.subscription);

  const dispatch = useDispatch();

  const handleSwitchChange = (checked) => {
    dispatch(setDuration(checked ? durationEnum.YEARLY : durationEnum.MONTHLY));
  };

  return (
    <div className="duration-select">
      <label>Monthly</label>
      <Switch
        onChange={handleSwitchChange}
        defaultChecked={duration === durationEnum.MONTHLY ? false : true}
      />
      <label>Yearly</label>
    </div>
  );
}

export default DurationSelect;
