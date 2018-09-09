
const DEFAULT_STATE = {
  expenses: [
    {name: 'test1'},
    {name: 'test2'},
    {name: 'test3'},
    {name: 'test4'},
    {name: 'test5'},
    {name: 'test6'},
    {name: 'test7'},
    {name: 'test8'},
    {name: 'test9'}
  ]
}

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    // case GET_REPOS:
    //   return { ...state, loading: true };
    // case GET_REPOS_SUCCESS:
    //   return { ...state, loading: false, repos: action.payload.data };
    // case GET_REPOS_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: 'Error while fetching repositories'
    //   };
    default:
      return state;
  }
};
