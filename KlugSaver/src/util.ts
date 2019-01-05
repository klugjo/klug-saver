import numeral from 'numeral';

export const toddMMM = (date: number) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (!date) return '';

  const d = new Date(date);

  const text = `${d.getDate()} ${months[d.getMonth()]}`;
  
  return text.length === 5 ? `0${text}` : text;
};

export const getArchiveFromState = ({ expenses }: any) => {
  return {
    expenses
  };
};

export const sum = (arr: any[], selector: (obj: any) => number): number => {
  return arr.reduce((acc, item) => {
    return acc + selector(item);
  }, 0);
};

export const formatAmount = (amount: any) => numeral(amount || 0).format('0,0.00');
