import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productGetApi } from '../RTK/service';
import wishListSlice from "../RTK/wishList";

export const store = configureStore({
  reducer: {
    [productGetApi.reducerPath]: productGetApi.reducer,
    wishList: wishListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productGetApi.middleware),
});

setupListeners(store.dispatch);
