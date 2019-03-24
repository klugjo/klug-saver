import { ADD_EXPENSE, CHANGE_THEME, CLOSE_DELETE_MODAL, DELETE_EXPENSE, GET_DROPBOX_ARCHIVE, GET_EXPENSE_LIST, OPEN_DELETE_MODAL, SAVE_BACKUP_STRATEGY, SAVE_CATEGORY, SAVE_DROPBOX_ARCHIVE, SAVE_DROPBOX_TOKEN, SET_LOADING } from './actions';
import { categoryList, DEFAULT_CATEGORY_COLOR } from './constants/categories';
import { MODALS, ThemeType } from './constants/common';
import { CURRENCIES } from './constants/currencies';
import { getCategoryMapFromList } from './selectors';
import { CloudBackup, IAction, IExpense, IMainState } from './typings';

const DEFAULT_STATE: IMainState = {
  expenses: [],
  openModal: '',
  expenseToDelete: undefined,
  baseCurrency: CURRENCIES.SGD,
  categories: categoryList,
  cloudBackup: CloudBackup.Phone,
  theme: ThemeType.Light,
  loading: false
};

const getExpenseList = (action: IAction, state: IMainState) => {
  const expensesRaw = [...action.payload] as any[];
  const categoryMap = getCategoryMapFromList(state.categories);

  expensesRaw.sort((a, b) => b.createdAt - a.createdAt);

  const expenses = expensesRaw.map(e => ({
    ...e,
    color: (e.color && e.color !== DEFAULT_CATEGORY_COLOR)
      || (categoryMap[e.category] ? categoryMap[e.category].color : DEFAULT_CATEGORY_COLOR)
  })) as IExpense[];

  return { ...state, expenses };
};

const saveCategory = (action: IAction, state: IMainState): IMainState => {
  const index = state.categories.findIndex(c => c.title === action.payload.oldTitle);
  const categories = [...state.categories];
  categories[index] = action.payload.categoryToSave;

  return { ...state, categories };
};

const deleteExpense = (action: IAction, state: IMainState): IMainState => {
  return {
    ...state,
    expenses: state.expenses.filter(e => e.id !== action.payload)
  };
};

export default function reducer(state: IMainState = DEFAULT_STATE, action: IAction): IMainState {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case ADD_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case DELETE_EXPENSE:
      return deleteExpense(action, state);
    case GET_EXPENSE_LIST:
      return getExpenseList(action, state);
    case OPEN_DELETE_MODAL:
      return { ...state, openModal: MODALS.DELETE, expenseToDelete: action.payload };
    case CLOSE_DELETE_MODAL:
      return { ...state, openModal: '', expenseToDelete: undefined };
    case SAVE_DROPBOX_TOKEN:
      return { ...state, dropboxToken: action.payload };
    case SAVE_CATEGORY:
      return saveCategory(action, state);
    case SAVE_BACKUP_STRATEGY:
      return { ...state, cloudBackup: action.payload };
    case GET_DROPBOX_ARCHIVE:
      return { ...state, ...action.payload, loading: false };
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case SAVE_DROPBOX_ARCHIVE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
