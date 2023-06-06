import { configureStore } from "@reduxjs/toolkit";
import { regApi } from "./API/regApi";
import { authSlice } from "./services/authSlice";


export const store = configureStore({
    reducer: {
        [regApi.reducerPath]: regApi.reducer,
        authSlice:authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(regApi.middleware),
})