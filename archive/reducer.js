const INITIAL_STATE = {
    expenses: []
};

const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {...state, expenses: [...state.expenses, action.payload]};
        default:
            return state;
    }
};

export default mainReducer;