import { ADD_EXPENSE, GET_EXPENSE_LIST, SAVE_DROPBOX_TOKEN, OPEN_MODAL } from './actions';
import { IMainState, IExpense, IAction } from './typings';

const DEFAULT_STATE: IMainState = {
  expenses: []
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
    case OPEN_MODAL:
      return { ...state, openModal: action.payload };
    case SAVE_DROPBOX_TOKEN:
      return { ...state, dropboxToken: action.payload };
    default:
      return state;
  }
};
