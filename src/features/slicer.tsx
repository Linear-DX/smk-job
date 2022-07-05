import { createSlice } from "@reduxjs/toolkit";
import dataLowonganKerja from '../data/dataLowonganKerja';

interface dataLoker {
    label: string,
    title: string,
    desc: string,
    loc: string,
    image: string,
}

interface LokerState {
    jobs: dataLoker[]
}

const initialState: LokerState = {
    jobs: dataLowonganKerja
}

export const slicer = createSlice({
    name: "job",
    initialState,
    reducers: {
        setLoker(state, action) {
            return {
                ...state,
                loker: action.payload
            }
        }
    }
});

export default slicer.reducer;