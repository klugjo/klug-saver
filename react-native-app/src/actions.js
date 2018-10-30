import { postExpense, getExpenses } from './api';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload) => {
  return dispatch => {
    postExpense(payload).then(
      (response) => dispatch({
        type: ADD_EXPENSE,
        payload: response.data
      })
    );
  };
}

export const GET_EXPENSE_LIST = 'GET_EXPENSE_LIST';

export const getExpenseList = () => {
  return dispatch => {
    getExpenses().then(response => {
      dispatch({
        type: GET_EXPENSE_LIST,
        payload: response.data
      })
    })
  }
} 
