import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageCropperState {
    urlImage: string;
}

const initialState: ImageCropperState = {
    urlImage: "",
};

export const imageCropperSlice = createSlice({
    name: "imageCropper",
    initialState,
    reducers: {
        setUrlImage: (state, action: PayloadAction<string>) => {
            console.log("Imagen en redux", action.payload);
            state.urlImage = action.payload;
        },
    },
});

export const { setUrlImage } = imageCropperSlice.actions;
export default imageCropperSlice.reducer;
