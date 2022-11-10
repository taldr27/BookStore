import React from 'react';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => (
  <div className="big-container">
    <Book title="The Hunger Games" author="Suzanne Collins" />
    <Book title="Dune" author="Frank Herbert" />
    <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    <AddBook />
  </div>
);

export default Books;
