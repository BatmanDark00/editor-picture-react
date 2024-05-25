import { configureStore } from "@reduxjs/toolkit";
import imageCropperSlice from "./imageCropperSlice";
import menuLateralEditSlice from "./menuLateralEditSlice";
import darkModeChangeSlice from "./DarkModeChangeSlice";

const rootReducer = {
  imageCropper: imageCropperSlice,
  menuLateralEdit: menuLateralEditSlice,
  darkMode: darkModeChangeSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
