import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';
import '../styles/Form.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const uId = uuid();
  const id = uId.slice(0, 8);
  const category = 'Action';

  const onChangeHandlerTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeHandlerAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onClickInput = () => {
    dispatch(addBook({
      id, title, author, category,
    }));
    setAuthor('');
    setTitle('');
  };

  return (
    <>
      <form className="add-form">
        <h3>ADD NEW BOOK</h3>
        <div className="form-inputs">
          <input type="text" placeholder="Book Title" onChange={onChangeHandlerTitle} value={title} />
          <input type="text" placeholder="Book Author" onChange={onChangeHandlerAuthor} value={author} />
          <input
            type="button"
            value="ADD BOOK"
            onClick={onClickInput}
          />
        </div>
      </form>
    </>
  );
};

export default AddBook;
