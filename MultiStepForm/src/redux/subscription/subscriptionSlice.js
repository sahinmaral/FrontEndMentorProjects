import { createSlice } from "@reduxjs/toolkit";
import { durationEnum, planEnum } from "../../models/enums";

const initialState = {
  name: "",
  phoneNumber: "",
  emailAddress: "",
  selectedAddons: [
  ],
  selectedPlan: planEnum.ARCADE,
  duration: durationEnum.MONTHLY,
};

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.emailAddress = action.payload.emailAddress;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    setAddons: (state, action) => {
      if (action.payload.isSelected) {
        state.selectedAddons.push(action.payload.selectedAddon);
      } else {
        state.selectedAddons.pop(action.payload.selectedAddon);
      }
    },
  },
});

export const { setPersonalInfo, setDuration, setPlan, setAddons } =
  subscriptionSlice.actions;

export default subscriptionSlice.reducer;
