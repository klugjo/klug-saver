import axios from 'axios';

export const postExpense = (data) => axios({
  method: 'post',
  url: 'https://zue5intaae.execute-api.ap-southeast-1.amazonaws.com/prod/expense',
  data
});

export const getExpenses = () => axios({
  method: 'get',
  url: 'https://zue5intaae.execute-api.ap-southeast-1.amazonaws.com/prod/expense'
});
