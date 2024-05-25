import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateMode {
  mode: "dark" | "light";
}

const initialState: StateMode = {
  mode: "dark",
};

export const DarkModeChangeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeDarkMode: (state, action: PayloadAction<"dark" | "light">) => {
      state.mode = action.payload;
    },
  },
});

export const { changeDarkMode } = DarkModeChangeSlice.actions;
export default DarkModeChangeSlice.reducer;
