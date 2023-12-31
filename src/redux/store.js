import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './cars/favoritesSlice';
import { filterReducer } from './cars/filterSlice';
import { modalReducer } from './cars/modalSlice';
import carsApi from './api/carsApi';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    filter: filterReducer,
    modal: modalReducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    .concat(carsApi.middleware),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
