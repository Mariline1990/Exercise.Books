import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../features/booksSlice";

const List = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getBooks({}));
  // }, []); // chiamiamo la thunk con useEffect

  const { books, error } = useSelector((store) => store.booksList);

  return (
    <div>
      {books.map((book) => (
        <h1>{book.bookTitle}</h1>
      ))}
      <h1>{error}</h1>
    </div>
  );
};

export default List;
