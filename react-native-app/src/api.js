import axios from 'axios';

export const postExpense = (data) => axios({
  method: 'post',
  url: 'https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense',
  data
});

export const getExpenses = () => axios({
  method: 'get',
  url: 'https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense'
});

export const removeExpense = (id) => axios({
  method: 'delete',
  url: `https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense/${id}`
});
