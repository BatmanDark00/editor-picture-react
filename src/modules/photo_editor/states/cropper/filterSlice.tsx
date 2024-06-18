import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  filters: {
    hueRotate?: number;
    saturate?: number;
    sepia?: number;
    grayscale?: number;
    brightness?: number;
    opacity?: number;
    contrast?: number;
    blur?: number;
  };
}

interface FilterProps {
  hueRotate?: number;
  saturate?: number;
  sepia?: number;
  grayscale?: number;
  brightness?: number;
  opacity?: number;
  contrast?: number;
  blur?: number;
}

const initialState: FilterState = {
  filters: {
    hueRotate: 0,
    saturate: 0,
    sepia: 0,
    grayscale: 0,
    brightness: 0,
    opacity: 0,
    contrast: 0,
    blur: 0,
  },
};

export const composeFilterString = (filters: FilterProps) => {
  const filterStrings = [
    filters.hueRotate ? `hue-rotate(${filters.hueRotate}deg)` : "",
    filters.saturate ? `saturate(${filters.saturate}%)` : "",
    filters.sepia ? `sepia(${filters.sepia}%)` : "",
    filters.grayscale ? `grayscale(${filters.grayscale}%)` : "",
    filters.brightness ? `brightness(${filters.brightness}%)` : "",
    filters.opacity ? `opacity(${filters.opacity}%)` : "",
    filters.contrast ? `contrast(${filters.contrast}%)` : "",
    filters.blur ? `blur(${filters.blur}px)` : "",
  ].filter(Boolean);

  return filterStrings.join(" ");
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FilterProps>) => {
      console.log("Filters", action.payload);
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
