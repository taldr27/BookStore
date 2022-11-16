import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBook';

export const defaultState = [
  {
    id: '0a33d1ab',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: '1b35d1ab',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Action',
  },
  {
    id: '0c36d3ab',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Action',
  },
];

export const addBook = (payload) => (
  {
    type: ADD_BOOK,
    id: payload.id,
    title: payload.title,
    author: payload.author,
    category: payload.category,
  }
);

export const removeBook = (payload) => (
  {
    type: REMOVE_BOOK,
    id: payload.id,
  }
);

export const fetchBooks = createAsyncThunk(
  'GET_BOOKS',
  async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EqZ6YUUbJz8PKUL0OiMU/books/');
    const json = await response.json();
    return json;
  },
);

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          category: action.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
// https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EqZ6YUUbJz8PKUL0OiMU/
