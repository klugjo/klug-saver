import { ADD_EXPENSE, GET_EXPENSE_LIST } from "./actions";

const DEFAULT_STATE = {
  expenses: []
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case GET_EXPENSE_LIST:
      return { ...state, expenses: [...action.payload] };
    default:
      return state;
  }
};
