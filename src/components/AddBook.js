import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/Books';
import '../styles/Form.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const uId = uuid();
  const id = uId.slice(0, 8);

  const onChangeHandlerTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeHandlerAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onChangeCategoryHandler = ({ target }) => setCategory(target.value);
  const onClickInput = () => {
    if (title !== '' && author !== '') {
      dispatch(addBook({
        id, title, author, category,
      }));
      setAuthor('');
      setTitle('');
      setCategory('');
      setTimeout(() => dispatch(fetchBooks()), 500);
    } else {
      setMessage('Please, put something in the fields');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };
  return (
    <>
      <form className="add-form">
        <h3>ADD NEW BOOK</h3>
        <h2>{message}</h2>
        <div className="form-inputs">
          <div className="fields">
            <input required="required" type="text" placeholder="Book Title" onChange={onChangeHandlerTitle} value={title} />
            <input required="required" type="text" placeholder="Book Author" onChange={onChangeHandlerAuthor} value={author} />
            <select className="user-inputs" name={category} onChange={onChangeCategoryHandler} required>
              <option value="" hidden>Choose Genre</option>
              <option value="Action">Action</option>
              <option value="Suspense">Suspense</option>
              <option value="Romance">Romance</option>
              <option value="Comedy">Comedy</option>
              <option value="Thriller">Thriller</option>
              <option value="Fiction">Science Fiction</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
          <input
            type="button"
            value="ADD BOOK"
            className="add-btn"
            onClick={onClickInput}
          />
        </div>
      </form>
    </>
  );
};

export default AddBook;
