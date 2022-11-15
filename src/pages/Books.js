import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="big-container">
      {books.map((book) => (
        <Book
          key={book.id}
          id={`${book.id}`}
          title={book.title}
          author={book.author}
          completed={book.completed}
          chapter={book.chapter}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
