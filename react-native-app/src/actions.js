import { postExpense, getExpenses, removeExpense, putArchiveContents } from './api';
import { ARCHIVE_FILE_PATH } from "./constants";

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

export const SAVE_DROPBOX_TOKEN = 'SAVE_DROPBOX_TOKEN';

export const saveDropboxToken = (token) => {
  return {
    type: SAVE_DROPBOX_TOKEN,
    payload: token
  };
};

export const PUT_DROPBOX_ARCHIVE = 'PUT_DROPBOX_ARCHIVE';

export const putDropboxArchive = () => {
  return (dispatch, getState) => {
    const { dropboxToken } = getState();

    putArchiveContents(ARCHIVE_FILE_PATH, `bla bla ${new Date()}`, dropboxToken).then(() => {
      console.log('Archive uploaded');
      dispatch({
        type: PUT_DROPBOX_ARCHIVE
      })
    })
  };
};
