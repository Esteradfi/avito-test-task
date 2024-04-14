import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import moviesReducer from "./movies";


//Создание хранилища
//Предполагался ещё auth reducer, но не оставалось времени на реализацию авторизации
export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;