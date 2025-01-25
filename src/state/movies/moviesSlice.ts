import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiBaseUrl } from "../../constans/baseUrl";


export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
    const response = await fetch(`${apiBaseUrl}/movies`);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    return await response.json(); 
});

interface PostsState {
    data: any,
    isloading: boolean,
    isErrore: boolean
}

const initialState: PostsState = {
    data: [],
    isloading: true,
    isErrore: false
}


const postsSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            
            state.isloading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state) => {
            state.isErrore = true
        })
    }
})

export default postsSlice.reducer;