import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/favoriteSlice/favoriteSlice";

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
    },
});
