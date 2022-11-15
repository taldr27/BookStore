import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import '../styles/Form.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const dispatch = useDispatch();

  const onChangeHandlerTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const onChangeHandlerAuthor = (event) => {
    setAuthor(event.target.value);
    console.log(author);
  };

  return (
    <>
      <form className="add-form">
        <h3>ADD NEW BOOK</h3>
        <div className="form-inputs">
          <input type="text" placeholder="Book Title" onChange={onChangeHandlerTitle} value={title} />
          <input type="text" placeholder="Book Author" onChange={onChangeHandlerAuthor} value={author} />
          <p>{title}</p>
          <p>{author}</p>
          <input
            type="button"
            value="ADD BOOK"
          />
        </div>
      </form>
    </>
  );
};

export default AddBook;
