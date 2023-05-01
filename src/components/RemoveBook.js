import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/Books';
import '../styles/RemoveBook.css';

const RemoveBook = (id) => {
  const dispatch = useDispatch();
  const index = id;
  const convertedId = index.id;
  const onClickRemove = () => {
    dispatch(removeBook(convertedId));
    setTimeout(() => dispatch(fetchBooks()), 500);
  };
  return (
    <>
      <button type="button" className="remove-book" onClick={onClickRemove} id={convertedId}>Remove Book</button>
    </>
  );
};

export default RemoveBook;
