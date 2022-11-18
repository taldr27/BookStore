import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';
import { fetchBooks } from '../redux/books/Books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="big-container">
      <AddBook />
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          progress={book.progress}
        />
      ))}
    </div>
  );
};

export default Books;
