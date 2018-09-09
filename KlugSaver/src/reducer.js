import { ADD_EXPENSE } from "./actions";

const DEFAULT_STATE = {
  expenses: []
}

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [...expenses, action.payload] };
    default:
      return state;
  }
};
