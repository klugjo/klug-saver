import _ from 'lodash';
import {
  ADD_EXPENSE,
  CHANGE_THEME,
  CLOSE_DELETE_MODAL,
  COMPLETE_TUTORIAL,
  CREATE_NEW_ACCOUNT,
  DELETE_CURRENT_ACCOUNT,
  DELETE_EXPENSE,
  GET_DROPBOX_ARCHIVE,
  GET_EXPENSE_LIST,
  OPEN_DELETE_MODAL,
  SAVE_BACKUP_STRATEGY,
  SAVE_CATEGORY,
  SAVE_DROPBOX_ARCHIVE,
  SAVE_DROPBOX_TOKEN,
  SET_BASE_CURRENCY,
  SET_LOADING,
  STOP_LOADING,
  SWITCH_ACCOUNT,
} from './actions';
import {categoryList, DEFAULT_CATEGORY_COLOR} from './constants/categories';
import {MODALS, ThemeType} from './constants/common';
import {CURRENCIES} from './constants/currencies';
import {getCategoryMapFromList} from './selectors';
import {CloudBackup, IAction, ICurrency, IExpense, IMainState} from './typings';

export const DEFAULT_STATE: IMainState = {
  expenses: [],
  openModal: '',
  expenseToDelete: undefined,
  baseCurrency: CURRENCIES.EUR,
  categories: categoryList,
  cloudBackup: CloudBackup.Phone,
  theme: ThemeType.Light,
  loading: false,
  tutorialDone: false,
  accounts: [],
};

const getExpenseList = (action: IAction, state: IMainState) => {
  const expensesRaw = [...action.payload] as any[];
  const categoryMap = getCategoryMapFromList(state.categories);

  expensesRaw.sort((a, b) => b.createdAt - a.createdAt);

  const expenses = expensesRaw.map(e => ({
    ...e,
    color:
      (e.color && e.color !== DEFAULT_CATEGORY_COLOR) ||
      (categoryMap[e.category]
        ? categoryMap[e.category].color
        : DEFAULT_CATEGORY_COLOR),
  })) as IExpense[];

  return {...state, expenses};
};

const saveCategory = (action: IAction, state: IMainState): IMainState => {
  const index = state.categories.findIndex(
    c => c.title === action.payload.oldTitle,
  );
  const categories = [...state.categories];
  categories[index] = action.payload.categoryToSave;

  return {...state, categories};
};

const deleteExpense = (action: IAction, state: IMainState): IMainState => {
  return {
    ...state,
    expenses: state.expenses.filter(e => e.id !== action.payload),
  };
};

const createNewAccount = (action: IAction, state: IMainState) => {
  const currency = action.payload as ICurrency;

  if (
    state.accounts.find(a => a.baseCurrency.code === currency.code) ||
    state.baseCurrency.code === currency.code
  ) {
    return state;
  }

  return {
    ...state,
    accounts: [...state.accounts, {baseCurrency: currency, expenses: []}],
  };
};

const deleteCurentAccount = (action: IAction, state: IMainState) => {
  if (state.accounts.length < 1) {
    return state;
  }

  const currentAccount = _.cloneDeep(state.accounts[0]);
  state.accounts.shift();
  const accounts = _.cloneDeep(state.accounts);

  return {
    ...state,
    baseCurrency: currentAccount.baseCurrency,
    expenses: currentAccount.expenses,
    accounts,
  };
};

const switchAccount = (action: IAction, state: IMainState) => {
  const currency = action.payload as ICurrency;
  const index = _.findIndex(
    state.accounts,
    a => a.baseCurrency.code === currency.code,
  );

  if (index < 0) {
    return state;
  }

  const currentAccount = _.cloneDeep(state.accounts[index]);

  const accounts = [
    {
      baseCurrency: CURRENCIES[state.baseCurrency.code],
      expenses: _.cloneDeep(state.expenses),
    },
    ...state.accounts.slice(0, index),
    ...state.accounts.slice(index + 1),
  ];

  return {
    ...state,
    baseCurrency: currentAccount.baseCurrency,
    expenses: currentAccount.expenses,
    accounts,
  };
};

export default function reducer(
  state: IMainState = DEFAULT_STATE,
  action: IAction,
): IMainState {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};
    case STOP_LOADING:
      return {...state, loading: false};
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses].sort(
          (a, b) => b.createdAt - a.createdAt,
        ),
      };
    case DELETE_EXPENSE:
      return deleteExpense(action, state);
    case GET_EXPENSE_LIST:
      return getExpenseList(action, state);
    case OPEN_DELETE_MODAL:
      return {
        ...state,
        openModal: MODALS.DELETE,
        expenseToDelete: action.payload,
      };
    case CLOSE_DELETE_MODAL:
      return {...state, openModal: '', expenseToDelete: undefined};
    case SAVE_DROPBOX_TOKEN:
      return {...state, dropboxToken: action.payload};
    case SAVE_CATEGORY:
      return saveCategory(action, state);
    case SAVE_BACKUP_STRATEGY:
      return {...state, cloudBackup: action.payload};
    case GET_DROPBOX_ARCHIVE:
      return {...state, ...action.payload, loading: false};
    case CHANGE_THEME:
      return {...state, theme: action.payload};
    case SAVE_DROPBOX_ARCHIVE:
      return {...state, loading: false};
    case SET_BASE_CURRENCY:
      return {...state, baseCurrency: action.payload};
    case COMPLETE_TUTORIAL:
      return {...state, tutorialDone: true};
    case CREATE_NEW_ACCOUNT:
      return createNewAccount(action, state);
    case DELETE_CURRENT_ACCOUNT:
      return deleteCurentAccount(action, state);
    case SWITCH_ACCOUNT:
      return switchAccount(action, state);
    default:
      return state;
  }
}
