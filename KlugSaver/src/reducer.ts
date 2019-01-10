import { ADD_EXPENSE, GET_EXPENSE_LIST, SAVE_DROPBOX_TOKEN, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL } from './actions';
import { IMainState, IExpense, IAction } from './typings';
import { MODALS } from './constants';

const DEFAULT_STATE: IMainState = {
  expenses: [],
  openModal: '',
  expenseToDelete: undefined
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
      return {...state, openModal: '', expenseToDelete: undefined};
    case SAVE_DROPBOX_TOKEN:
      return { ...state, dropboxToken: action.payload };
    default:
      return state;
  }
};
