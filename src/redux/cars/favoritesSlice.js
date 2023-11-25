import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: '',
  },
  reducers: {
    favoritesCar(state, action) {
      state.favorites = action.payload;
    },
  },
});

export const favoritesCar = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
