import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    faviritesAdd(state, action) {
      state.favorites.push(action.payload)
    },
    faviritesDel(state, action) {
      state.favorites = state.favorites.filter(({id}) => id !== action.payload.id)
    },
  },
});

export const {faviritesAdd, faviritesDel} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
