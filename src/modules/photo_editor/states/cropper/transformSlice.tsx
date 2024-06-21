import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransformState {
    flip?: {
        horizontal?: boolean |false;
        vertical?: boolean | false;
    }; 
}

 interface Flip {
    horizontal?: boolean;
    vertical?: boolean;
} 

const initialState: TransformState = {
    flip: {
        horizontal: false,
        vertical: false,
    } 
}

export const transformSlice = createSlice ({
    name: "transform",
    initialState,
    reducers: {
        setFlip: (state, action: PayloadAction<Flip>) => {
            state.flip = {...state.flip, ...action.payload}
            console.log("onFlip", action.payload)
        } 
    }
})

export const {
    setFlip,
} = transformSlice.actions;
export default transformSlice.reducer;