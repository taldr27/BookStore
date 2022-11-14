const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';

export const addBook = () => (
  {
    type: ADD_BOOK,
    payload: test,
  }
);

export const removeBook = () => (
  {
    type: REMOVE_BOOK,
    payload: test,
  }
);

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          payload: action.payload,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
