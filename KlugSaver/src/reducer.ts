import { ADD_EXPENSE, GET_EXPENSE_LIST, SAVE_DROPBOX_TOKEN, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL, OPEN_CURRENCY_MODAL, CLOSE_CURRENCY_MODAL } from './actions';
import { IMainState, IExpense, IAction } from './typings';
import { MODALS } from './constants/common';
import { CURRENCIES } from './constants/currencies';
import { categoryList, DEFAULT_CATEGORY_COLOR } from './constants/categories';
import { getCategoryMapFromList } from './selectors';

const DEFAULT_STATE: IMainState = {
  expenses: [],
  openModal: '',
  expenseToDelete: undefined,
  baseCurrency: CURRENCIES.SGD,
  categories: categoryList
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

export default function reducer(state: IMainState = DEFAULT_STATE, action: IAction): IMainState {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case GET_EXPENSE_LIST:
      return getExpenseList(action, state);
    case OPEN_DELETE_MODAL:
      return { ...state, openModal: MODALS.DELETE, expenseToDelete: action.payload };
    case CLOSE_DELETE_MODAL:
      return { ...state, openModal: '', expenseToDelete: undefined };
    case SAVE_DROPBOX_TOKEN:
      return { ...state, dropboxToken: action.payload };
    case OPEN_CURRENCY_MODAL:
      return { ...state, openModal: MODALS.CURRENCY };
    case CLOSE_CURRENCY_MODAL:
      return { ...state, openModal: '', customCurrency: action.payload };
    default:
      return state;
  }
};
