import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateMode {
  themeMode: "dark" | "light";
}

const initialState: StateMode = {
  themeMode: "dark",
};

export const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<"dark" | "light">) => {
      state.themeMode = action.payload;    
      console.log("Theme", state.themeMode);
    },
  },
});

export const { setThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
