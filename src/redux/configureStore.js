import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/Books';
import categoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  book: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore(rootReducer);
export default store;
