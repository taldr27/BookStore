import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';
import { fetchBooks } from '../redux/books/Books';

const Books = () => {
  const dispatch = useDispatch();
  dispatch(fetchBooks());
  const books = useSelector((state) => state.books);
  return (
    <div className="big-container">
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={`${book.item_id}`}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
