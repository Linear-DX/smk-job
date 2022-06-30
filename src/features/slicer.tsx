import { createSlice } from "@reduxjs/toolkit";
import dataLowonganKerja from '../data/dataLowonganKerja';

interface dataLoker {
    job: String,
    desc: String,
    loc: String
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