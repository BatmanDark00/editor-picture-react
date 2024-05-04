import { configureStore } from '@reduxjs/toolkit';
import imageCropperSlice  from './imageCropperSlice';

export const store = configureStore({
    reducer: {
        imageCropper: imageCropperSlice,
    },
});

