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
    mixTone?: number | 0,
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
  mixTone?: number | 0;
}

/* interface MixTone {
  sepia?: number,
  saturate?: number,
  hueRotate?: number,
} */

const initialState: FilterState = {
  filters: {
    hueRotate: 0,
    saturate: 0,
    sepia: 0,
    grayscale: 0,
    brightness: 100,
    opacity: 100,
    contrast: 100,
    blur: 0,
    mixTone: 100,
  },
};

export const composeFilterString = (filters: FilterProps) => {
  let mixToneFilters = "";

  if (filters.mixTone !== undefined) {
    if (filters.mixTone < 100) {
      const coldTone = 100 - filters.mixTone;
      mixToneFilters = `hue-rotate(180deg) sepia(${0.6 * coldTone}%) saturate(${1 + 2.5 * coldTone}%) contrast(150%) hue-rotate(180deg)`;
    } else if (filters.mixTone > 101) {
      const warmTone = filters.mixTone - 100;
      mixToneFilters = `hue-rotate(20deg) sepia(${0.7 * warmTone}%) saturate(${1 + 2.7 * warmTone}%) hue-rotate(${-0.3 * warmTone}deg)`;
    }
  }

  const filterStrings = [
    filters.hueRotate ? `hue-rotate(${filters.hueRotate}deg)` : "",
    filters.saturate ? `saturate(${filters.saturate}%)` : "",
    filters.sepia ? `sepia(${filters.sepia}%)` : "",
    filters.grayscale ? `grayscale(${filters.grayscale}%)` : "",
    filters.brightness ? `brightness(${filters.brightness}%)` : "",
    filters.opacity ? `opacity(${filters.opacity}%)` : "",
    filters.contrast ? `contrast(${filters.contrast}%)` : "",
    filters.blur ? `blur(${filters.blur}px)` : "",
    mixToneFilters,
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
    setTone: (state, action: PayloadAction<number>) => {
      state.filters.mixTone = action.payload;
    }
  },
});

export const { setFilters, setTone } = filterSlice.actions;
export default filterSlice.reducer;
