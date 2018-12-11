import Dropbox from "dropbox";

import { postExpense, getExpenses, removeExpense } from './api';

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

export const getExpenseList = ({ from }) => {
  return dispatch => {
    getExpenses({ from }).then(response => {
      dispatch({
        type: GET_EXPENSE_LIST,
        payload: response.data
      })
    });
  }
}

export const deleteExpense = (id, from) => {
  return dispatch => {
    removeExpense(id).then(
      () => {
        getExpenses({ from }).then(response => {
          dispatch({
            type: GET_EXPENSE_LIST,
            payload: response.data
          })
        });
      }
    );
  };
}

const APP_CLIENT_ID = "5fstmwjaisrt06t";
const CALLBACK_URL = "https://buttercup.pw/";

function generateAuthorisationURL() {
    const client = new Dropbox({ clientId: APP_CLIENT_ID });
    return client.getAuthenticationUrl(CALLBACK_URL);
}

export const dropboxAuthenticate = () => {
  NavigationActions.navigate({ routeName: "RemoteExplorer", params: { title } });
};
