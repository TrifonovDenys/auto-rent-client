import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: "filter",
    initialState:{
        filter:""
    },
    reducers:{
        filterCar(state, action){
            state.filter = action.payload
        }
    }
})

export const filterCar = filterSlice.actions
export const filterReducer = filterSlice.reducer;