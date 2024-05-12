import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComponentState {
  component: string;
}

const initialState: ComponentState = {
  component: "ToolEdit",
};

export const menuLateralEditSlice = createSlice({
  name: "menuLateralEdit",
  initialState,
  reducers: {
    setComponent: (state, action: PayloadAction<string>) => {
      state.component = action.payload;
    },
  },
});

export const { setComponent } = menuLateralEditSlice.actions;
export default menuLateralEditSlice.reducer;
