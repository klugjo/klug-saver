import { ADD_EXPENSE } from "./actions";

const DEFAULT_STATE = {
  expenses: []
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, action.payload] };
    default:
      return state;
  }
};
