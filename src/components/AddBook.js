import React from 'react';
import '../styles/Form.css';

const AddBook = () => (
  <>
    <form className="add-form">
      <h3>ADD NEW BOOK</h3>
      <div className="form-inputs">
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <input type="button" value="ADD BOOK" />
      </div>
    </form>
  </>
);

export default AddBook;
