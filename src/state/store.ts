import { configureStore } from "@reduxjs/toolkit";
import postsReduser from './movies/moviesSlice'

export const store = configureStore({
    reducer: {
        movies: postsReduser,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;