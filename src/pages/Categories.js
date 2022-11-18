import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';
import '../styles/Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const onClickStatus = (event) => {
    dispatch(checkStatus());
    event.currentTarget.classList.toggle('btn-off');
  };
  return (
    <div className="big-container">
      <button className="categories-btn" type="button" onClick={onClickStatus}>Check Status</button>
      <p>{categories}</p>
    </div>
  );
};
export default Categories;

// fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EqZ6YUUbJz8PKUL0OiMU/books/', {
//   method: 'POST',
//   body: JSON.stringify({
//     item_id: 'item_3', title: 'Harr_3', author: 'Y_3', category: 'N_3',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.text())
//   .then((json) => console.log(json));

// createAsyncThunk('book/fetchBooks', () => axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EqZ6YUUbJz8PKUL0OiMU/books/')
//   .then((response) => response.text())
//   .then((json) => console.log(json)));
//   fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EqZ6YUUbJz8PKUL0OiMU/books/', {
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
