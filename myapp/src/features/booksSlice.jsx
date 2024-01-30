import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooksThunk } from "./booksThunk";

const initialState = {
  books: [],
  error: null,
};

export const getBooks = createAsyncThunk("bookList/getbooks", getBooksThunk);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    reset: (state) => ({ ...state, books: [] }),
  },
  extraReducers: (builder) => {
    // è una chiamata asincrona, chiamando il thunk
    // builder
    //   .addCase(getBooksThunk.fullfilled, (state, result) => {
    //     return { ...state, books: result.payload };
    //   })
    //   .addCase(getBooksThunk.rejected, (state, result) => {
    //     return { ...state, books: [], error: "qualcosa è andato storto" };
    //   });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = booksSlice.actions;

export default booksSlice.reducer;
