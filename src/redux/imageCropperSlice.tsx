import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageCropperState {
  urlImage: string;
  imageCanvas?: string;
}

const initialState: ImageCropperState = {
  urlImage: "",
  imageCanvas: "",
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
  },
});

export const { setUrlImage, setImageCanvas } = imageCropperSlice.actions;
export default imageCropperSlice.reducer;
