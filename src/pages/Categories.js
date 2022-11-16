import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/Books';
import { checkStatus } from '../redux/categories/Categories';
import '../styles/Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const onClickStatus = (event) => {
    dispatch(checkStatus());
    event.currentTarget.classList.toggle('btn-off');
    // fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EqZ6YUUbJz8PKUL0OiMU/books/', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     item_id: 'item6', title: '123', author: '123', category: '123',
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.text())
    //   .then((json) => console.log(json));
    console.log(dispatch(fetchBooks()));
  };
  return (
    <div className="big-container">
      <button className="categories-btn" type="button" onClick={onClickStatus}>Check Status</button>
      <p>{categories}</p>
    </div>
  );
};
export default Categories;
