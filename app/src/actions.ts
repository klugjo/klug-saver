import { getArchiveContents, getExpenses, putArchiveContents } from './api';
import { ARCHIVE_FILE_PATH, ThemeType } from './constants/common';
import { CloudBackup, IAction, ICategory, ICurrency, IExpense, IMainState } from './typings';
import { getArchiveFromState } from './util';

const uuid = require('uuid/v4');

export const SET_LOADING = 'SET_LOADING';

export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';

export const setBaseCurrency = (currency: ICurrency) => ({
  type: SET_BASE_CURRENCY,
  payload: currency
});

export const COMPLETE_TUTORIAL = 'COMPLETE_TUTORIAL';

export const completeTutorial = {
  type: COMPLETE_TUTORIAL
};

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload: any) => ({
  type: ADD_EXPENSE,
  payload: {
    ...payload,
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

export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = (theme: ThemeType): IAction => {
  return {
    type: CHANGE_THEME,
    payload: theme
  };
};

export const SAVE_DROPBOX_ARCHIVE = 'SAVE_DROPBOX_ARCHIVE';

export const saveDropboxArchive = () => {
  return (dispatch: any, getState: () => IMainState) => {
    const state = getState();
    const { dropboxToken } = state;

    dispatch({ type: SET_LOADING });

    putArchiveContents(ARCHIVE_FILE_PATH, JSON.stringify(getArchiveFromState(state)), dropboxToken!).then(() => {
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

    dispatch({ type: SET_LOADING });

    getArchiveContents(ARCHIVE_FILE_PATH, dropboxToken).then((response: any) => {
      dispatch({
        type: GET_DROPBOX_ARCHIVE,
        payload: response.data
      });
    });
  };
};
