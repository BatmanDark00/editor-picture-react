import { configureStore } from "@reduxjs/toolkit";
import imageCropperSlice from "./imageCropperSlice";
import menuLateralEditSlice from "./menuLateralEditSlice";
import themeModeSlice from "./themeModeSlice";

const rootReducer = {
  imageCropper: imageCropperSlice,
  menuLateralEdit: menuLateralEditSlice,
  themeMode: themeModeSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
