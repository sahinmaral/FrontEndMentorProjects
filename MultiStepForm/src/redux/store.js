import { configureStore } from "@reduxjs/toolkit";
import subscriptionSlice from "./subscription/subscriptionSlice";

export const store = configureStore({
  reducer: {
    subscription: subscriptionSlice,
  },
});
