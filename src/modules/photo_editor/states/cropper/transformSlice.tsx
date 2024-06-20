import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransformState {
    rotate?: number;
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
    rotate: 0,
    flip: {
        horizontal: false,
        vertical: false,
    } 
}

export const composeTransform = (transform: TransformState) => {
    const transformValues = [];

    if (transform.rotate) {
        transformValues.push(`${transform.rotate}deg`);
    }

    if (transform.flip) {
        const { horizontal, vertical } = transform.flip;

        if (horizontal) {
            transformValues.push(`x 180deg`);
        }

        if (vertical) {
            transformValues.push(`y 180deg`);
        }
    } 
    return transformValues.join(" ");
};

export const transformSlice = createSlice ({
    name: "transform",
    initialState,
    reducers: {
        setRotate: (state, action: PayloadAction<number>) => {
            state.rotate = action.payload;
            console.log("rotando", action.payload);
        },
        resetRotate: (state) => {
            state.rotate = 0;
        },

        setFlip: (state, action: PayloadAction<Flip>) => {
            state.flip = {...state.flip, ...action.payload}
            console.log("onFlip", action.payload)
        } 
    }
})

export const {
    setRotate,
    resetRotate,
    setFlip,
} = transformSlice.actions;
export default transformSlice.reducer;