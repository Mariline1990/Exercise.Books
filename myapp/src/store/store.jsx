import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../features/booksSlice";

export default configureStore({
  reducer: { books: booksSlice },
});
