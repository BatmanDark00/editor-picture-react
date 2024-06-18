import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface FilterState {
  filters: {
    hueRotate?: number;
    saturate?: number;
    sepia?: number;
    //grayscale?: number;
  };
}

interface FilterProps {
  hueRotate?: number;
  saturate?: number;
  sepia?: number;
  //grayscale?: number;
}

const initialState: FilterState = {
  filters: {
    hueRotate: 0,
    saturate: 0,
    sepia: 0,
    //grayscale: 0,
  },
};

export const composeFilterString = (filters: FilterProps) => {
  const filterStrings = [];
  if (filters.hueRotate !== 0) {
    filterStrings.push(`hue-rotate(${filters.hueRotate}deg)`);
  }
  if (filters.saturate !== 0) {
    filterStrings.push(`saturate(${filters.saturate}%)`);
  }
  if (filters.sepia !== 0) {
    filterStrings.push(`sepia(${filters.sepia}%)`);
  }
 /*  if (filters.grayscale !== 0) {
    filterStrings.push(`grayscale(${filters.grayscale}%)`);
  } */  
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
