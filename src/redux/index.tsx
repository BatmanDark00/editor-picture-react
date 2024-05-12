import { configureStore } from "@reduxjs/toolkit";
import imageCropperSlice from "./imageCropperSlice";
import menuLateralEditSlice from "./menuLateralEditSlice";

const rootReducer = {
  imageCropper: imageCropperSlice,
  menuLateralEdit: menuLateralEditSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
