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
