import { configureStore } from '@reduxjs/toolkit';
import slicer from '../features/slicer';

export const store = configureStore({
    reducer: {
        job: slicer
    },
});

export type RootState = ReturnType<typeof store.getState>