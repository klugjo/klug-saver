import { ADD_EXPENSE, GET_EXPENSE_LIST, SAVE_DROPBOX_TOKEN, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL, OPEN_CURRENCY_MODAL, CLOSE_CURRENCY_MODAL } from './actions';
import { IMainState, IExpense, IAction } from './typings';
import { MODALS } from './constants/common';
import { CURRENCIES } from './constants/currencies';

const DEFAULT_STATE: IMainState = {
  expenses: [],
  openModal: '',
  expenseToDelete: undefined,
  baseCurrency: CURRENCIES.SGD
};

const getExpenseList = (action: IAction, state: IMainState) => {
  const expenses = [...action.payload] as Array<IExpense>;

  expenses.sort((a, b) => b.createdAt - a.createdAt);

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
