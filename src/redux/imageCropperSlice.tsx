import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageCropperState {
  urlImage: string;
  imageCanvas?: string;
  toneCropper?: number;
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

    setToneCropper: (state, action: PayloadAction<number>) => {
      state.toneCropper = action.payload;
      console.log("Tone", state.toneCropper);
    }
  },
});

export const { setUrlImage, setImageCanvas, setToneCropper } = imageCropperSlice.actions;
export default imageCropperSlice.reducer;
