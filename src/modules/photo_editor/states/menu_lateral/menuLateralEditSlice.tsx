import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComponentState {
  component: string;
  isComponentMain: boolean;
  applyChanges: boolean;
}

const initialState: ComponentState = {
  component: "ToolEdit",
  isComponentMain: true,
  applyChanges: false,
};

export const menuLateralEditSlice = createSlice({
  name: "menuLateralEdit",
  initialState,
  reducers: {
    setComponent: (state, action: PayloadAction<string>) => {
      state.component = action.payload;
    },

    setComponentMain: (state, action: PayloadAction<boolean>) => {
      console.log("setComponentMain");
      state.isComponentMain = action.payload;
    },

    setApplyChanges: (state, action: PayloadAction<boolean>) => {
      state.applyChanges = action.payload;
    }
  },
});

export const { setComponent, setComponentMain, setApplyChanges } = menuLateralEditSlice.actions;
export default menuLateralEditSlice.reducer;
