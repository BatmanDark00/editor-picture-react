import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageCropperState {
  urlImage: string;
  imageCanvas?: string;
  toneCropper?: number;
  stencilProps?: {
    minAspectRatio?: number | 0;
    maxAspectRatio?: number | 0;
  };
  isCrop?: boolean;
}

interface StencilProps {
  minAspectRatio?: number;
  maxAspectRatio?: number;
}

const initialState: ImageCropperState = {
  urlImage: "",
  imageCanvas: "",
  toneCropper: 0,
  stencilProps: {
    minAspectRatio: 0,
    maxAspectRatio: 0,
  },
  isCrop: false,
};

export const imageCropperSlice = createSlice({
  name: "imageCropper",
  initialState,
  reducers: {
    setUrlImage: (state, action: PayloadAction<string>) => {
      state.urlImage = action.payload;
    },

    setImageCanvas: (state, action: PayloadAction<string>) => {
      state.imageCanvas = action.payload;
    },

    setToneCropper: (state, action: PayloadAction<number>) => {
      state.toneCropper = action.payload;
      console.log("Tone", state.toneCropper);
    },

    setStencilProps: (state, action: PayloadAction<StencilProps>) => {
      state.stencilProps = action.payload;

      console.log("StencilProps", action.payload);
    },

    setApplyCrop: (state, action: PayloadAction<boolean>) => {
      state.isCrop = action.payload;

      
    },
  },
});

export const { setUrlImage, setImageCanvas, setToneCropper, setStencilProps, setApplyCrop } =
  imageCropperSlice.actions;
export default imageCropperSlice.reducer;
