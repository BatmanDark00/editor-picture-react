import { configureStore } from "@reduxjs/toolkit";
import imageCropperSlice from "@/modules/photo_editor/states/cropper/imageCropperSlice";
import filterSlice from "@/modules/photo_editor/states/cropper/filterSlice";
import menuLateralEditSlice from "@/modules/photo_editor/states/menu_lateral/menuLateralEditSlice";
import themeModeSlice from "./themeModeSlice";
import transformSlice from "@/modules/photo_editor/states/cropper/transformSlice";

const rootReducer = {
  imageCropper: imageCropperSlice,
  filter: filterSlice,
  menuLateralEdit: menuLateralEditSlice,
  themeMode: themeModeSlice,
  transform: transformSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  
});

export type RootState = ReturnType<typeof store.getState>;
