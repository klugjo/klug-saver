import { ADD_EXPENSE, GET_EXPENSE_LIST, SAVE_DROPBOX_TOKEN } from './actions';

const DEFAULT_STATE = {
  expenses: []
};

const getExpenseList = (action: any, state: any) => {
  const expenses = [...action.payload];

  expenses.sort((a, b) => b.createdAt - a.createdAt);

  return { ...state, expenses };
};

export default function reducer(state = DEFAULT_STATE, action: any) {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case GET_EXPENSE_LIST:
      return getExpenseList(action, state);
    case SAVE_DROPBOX_TOKEN:
      return { ...state, dropboxToken: action.payload };
    default:
      return state;
  }
};
