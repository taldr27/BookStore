import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="big-container">
      <button className="categories-btn" type="button">Check Status</button>
      <p>{categories}</p>
    </div>
  );
};
export default Categories;
