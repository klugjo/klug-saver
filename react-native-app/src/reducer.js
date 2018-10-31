import { ADD_EXPENSE, GET_EXPENSE_LIST } from "./actions";

const DEFAULT_STATE = {
  expenses: []
};

const getExpenseList = (action, state) => {
  const expenses = [...action.payload];

  expenses.sort((a, b) => b.createdAt - a.createdAt);

  return { ...state, expenses };
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case GET_EXPENSE_LIST:
      return getExpenseList(action, state);
    default:
      return state;
  }
};
