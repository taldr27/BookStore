const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBook';

export const defaultState = [
  {
    id: 0,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: '43%',
    chapter: '14',
  },
  {
    id: 1,
    title: 'Dune',
    author: 'Frank Herbert',
    completed: '10%',
    chapter: '1',
  },
  {
    id: 2,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    completed: '93%',
    chapter: '20',
  },
];

export const addBook = (payload) => (
  {
    type: ADD_BOOK,
    id: payload.id,
    title: payload.title,
    author: payload.author,
    completed: payload.completed,
    chapter: payload.chapter,
  }
);

// export const removeBook = () => (
//   {
//     type: REMOVE_BOOK,
//     payload: test,
//   }
// );

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          completed: action.completed,
          chapter: action.chapter,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
