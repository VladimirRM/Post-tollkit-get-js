import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
  "posts/getposts",
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(setPosts(result.data))
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers:{
    [getPosts.fulfilled]:()=>console.log('fulfilled'),
    [getPosts.pending]:()=>console.log('pending'),
    [getPosts.rejected]:()=>console.log('rejected'),
  }
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
