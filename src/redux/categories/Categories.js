export const checkStatus = () => (
  {
    type: 'CHECK_STATUS',
    payload: 'Test',
  }
);

export default function categoriesReducer(state = [], action) {
  if (action.type === 'CHECK_STATUS') {
    return 'Under Construction';
  }
  return state;
}
