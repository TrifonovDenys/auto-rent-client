import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: "filter",
    initialState:{
        brandFilter: "",
        priceFilter: ""
    },
    reducers:{
        setBrandFilter(state, action){
            state.brandFilter = action.payload
        },
        setPriceFilter(state, action){
            state.priceFilter = action.payload
        }
    }
})

export const {setBrandFilter, setPriceFilter} = filterSlice.actions
export const filterReducer = filterSlice.reducer;