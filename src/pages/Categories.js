// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
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
