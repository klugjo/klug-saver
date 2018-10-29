import { postExpense } from './api';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload) => {
  return (dispatch) => {
    return postExpense(payload).then(
      (data) => dispatch({
        type: ADD_EXPENSE,
        payload
      })
    );
  };
}
