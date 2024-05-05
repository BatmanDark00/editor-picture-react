import { configureStore } from '@reduxjs/toolkit';
import imageCropperSlice  from './imageCropperSlice';

const rootReducer = {
    imageCropper: imageCropperSlice,
};

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;