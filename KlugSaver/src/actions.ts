import { getExpenses, putArchiveContents, getArchiveContents } from './api';
import { ARCHIVE_FILE_PATH } from './constants/common';
import { getArchiveFromState } from './util';
import { IExpense, ICategory, IMainState, CloudBackup, IAction } from './typings';

const uuid = require('uuid/v4');

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload: any) => ({
  type: ADD_EXPENSE,
  payload: {
    ...payload,
    createdAt: new Date().getTime(),
    id: uuid()
  }
});

export const GET_EXPENSE_LIST = 'GET_EXPENSE_LIST';

export const getExpenseList = (from?: Date) => {
  console.log('getExpenseList');
  return (dispatch: any) => {
    getExpenses({ from }).then((response: any) => {
      dispatch({
        type: GET_EXPENSE_LIST,
        payload: response.data
      });
    });
  }
}

export const CLOSE_DELETE_MODAL = 'CLOSE_DELETE_MODAL';

export const closeDeleteModal = {
  type: CLOSE_DELETE_MODAL
};

export const OPEN_DELETE_MODAL = 'OPEN_DELETE_MODAL';

export const openDeleteModal = (expense: IExpense): IAction => ({
  type: OPEN_DELETE_MODAL,
  payload: expense
});

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const deleteExpense = (id: string) => ({
  type: DELETE_EXPENSE,
  payload: id
});

export const SAVE_CATEGORY = 'SAVE_CATEGORY';

export const saveCategory = (oldTitle: string, categoryToSave: ICategory): IAction => ({
  type: SAVE_CATEGORY,
  payload: {
    oldTitle,
    categoryToSave
  }
});

export const SAVE_BACKUP_STRATEGY = 'SAVE_BACKUP_STRATEGY';

export const saveBackupStrategy = (backupStrategy: CloudBackup): IAction => ({
  type: SAVE_BACKUP_STRATEGY,
  payload: backupStrategy
});

export const SAVE_DROPBOX_TOKEN = 'SAVE_DROPBOX_TOKEN';

export const saveDropboxToken = (token: string): IAction => {
  return {
    type: SAVE_DROPBOX_TOKEN,
    payload: token
  };
};

export const SAVE_DROPBOX_ARCHIVE = 'SAVE_DROPBOX_ARCHIVE';

export const saveDropboxArchive = () => {
  return (dispatch: any, getState: () => IMainState) => {
    const state = getState();
    const { dropboxToken } = state;
    console.log('Saving Archive');

    putArchiveContents(ARCHIVE_FILE_PATH, JSON.stringify(getArchiveFromState(state)), dropboxToken!).then(() => {
      console.log('Archive saved');
      dispatch({
        type: SAVE_DROPBOX_ARCHIVE
      });
    });
  };
};

export const GET_DROPBOX_ARCHIVE = 'GET_DROPBOX_ARCHIVE';

export const restoreDropboxArchive = () => {
  return (dispatch: any, getState: () => any) => {
    const { dropboxToken } = getState();

    getArchiveContents(ARCHIVE_FILE_PATH, dropboxToken).then((response: any) => {
      dispatch({
        type: GET_DROPBOX_ARCHIVE,
        payload: response.data
      });
    });
  };
};
