export const addBook = () => (
  {
    type: 'ADD_BOOK',
    payload: test,
  }
);

export const removeBook = () => (
  {
    type: 'REMOVE_BOOK',
    payload: test,
  }
);

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          payload: action.payload,
        },
      ];
    case 'REMOVE_BOOK':
      return [
        ...state,
        {
          payload: action.payload,
        },
      ];
    default:
      return state;
  }
}
