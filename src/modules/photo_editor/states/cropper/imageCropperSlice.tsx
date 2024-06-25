import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ImageCropperState {
  urlImage: string;
  imageCropper: string;
  toneCropper?: string;
  toneTypeCropper?: string;
  filterValCropper?: number;
  stencilProps?: {
    minAspectRatio?: number | 0;
    maxAspectRatio?: number | 0;
  };
  isCrop?: boolean;
  isVisibleCropper?: boolean;
  isApplyStyles?: boolean;
  rotate?: number | 0;
  rotateNegative?: number | 0;
  //resetRotate?: number |0;
}

interface StencilProps {
  minAspectRatio?: number;
  maxAspectRatio?: number;
}

const initialState: ImageCropperState = {
  urlImage: "",
  imageCropper: "",
  toneCropper: "",
  toneTypeCropper: "",
  filterValCropper: 0,
  stencilProps: {
    minAspectRatio: 0,
    maxAspectRatio: 0,
  },
  isCrop: false,
  isVisibleCropper: false,  
  isApplyStyles: false,
  rotate: 0,
  rotateNegative: 0,
//resetRotate: 0,
};

export const imageCropperSlice = createSlice({
  name: "imageCropper",
  initialState,
  reducers: {
    setUrlImage: (state, action: PayloadAction<string>) => {
      state.urlImage = action.payload;
    },

    setImageCropper: (state, action: PayloadAction<string>) => {
      state.imageCropper = action.payload;
    },

    /*  setHueRotate: (state, action: PayloadAction<number>) => {
      state.filters.hueRotate = action.payload;
    },

    setSaturate: (state, action: PayloadAction<number>) => {
      state.filters.saturate = action.payload;
    },

    setSepia: (state, action: PayloadAction<number>) => {
      state.filters.sepia = action.payload;
    },
 */
    setToneCropper: (state, action: PayloadAction<string>) => {
      state.toneCropper = action.payload;
      console.log("Tone", state.toneCropper);
    },

    setToneTypeCropper: (state, action: PayloadAction<string>) => {
      state.toneTypeCropper = action.payload;

      console.log("Type", state.toneTypeCropper);
    },

    setFilterValCropper: (state, action: PayloadAction<number>) => {
      state.filterValCropper = action.payload;
      console.log("Color", state.filterValCropper);
    },

    setStencilProps: (state, action: PayloadAction<StencilProps>) => {
      state.stencilProps = action.payload;

      console.log("StencilProps", action.payload);
    },

    setApplyCrop: (state, action: PayloadAction<boolean>) => {
      state.isCrop = action.payload;
    },

    setVisibleCropper: (state, action: PayloadAction<boolean>) => {
      state.isVisibleCropper = action.payload;
    },

    setApplyStyles: (state, action: PayloadAction<boolean>) => {
      state.isApplyStyles = action.payload;
    },
    setRotate: (state, action: PayloadAction<number>) => {
      state.rotate = action.payload;
    },
   /*  setResetRotate: (state, action: PayloadAction<number>) => {
      state.resetRotate = action.payload;
    }, */
    setRotateNegative: (state, action: PayloadAction<number>) => {
      state.rotateNegative = action.payload;
    },
  },
});

export const {
  setUrlImage,
  setImageCropper,
  setToneCropper,
  setToneTypeCropper,
  setFilterValCropper,
  /*   setFilters,
  setHueRotate,
  setSaturate,
  setSepia, */
  setStencilProps,
  setApplyCrop,
  setVisibleCropper,
  setApplyStyles,
  setRotate,
  //setResetRotate,
  setRotateNegative
} = imageCropperSlice.actions;
export default imageCropperSlice.reducer;
