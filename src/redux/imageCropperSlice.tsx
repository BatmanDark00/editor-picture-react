import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    urlImage: "",
}

export const imageCropperSlice = createSlice({
    name: "imageCropper",
    initialState,
    reducers: {
        setImage: (state, action) => {
            console.log("Imagen en redux", action.payload);
            state.urlImage = action.payload;
        },
    }
});

export const { setImage } = imageCropperSlice.actions;
export default imageCropperSlice.reducer;
