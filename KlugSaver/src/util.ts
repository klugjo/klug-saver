import numeral from 'numeral';
import moment from 'moment';

const DD_MMM_FORMAT = 'DD MMM';
const DD_MMM_YYYY_FORMAT = 'DD MMM YYYY';

export const toddMMM = (date: number) => {
  return moment(date).format(DD_MMM_FORMAT);
};

const today = moment();
const dateLabelsMap = {
  [today.format(DD_MMM_YYYY_FORMAT)]: 'Today',
  [today.subtract(1, 'days').format(DD_MMM_YYYY_FORMAT)]: 'Yesterday',
  [today.subtract(1, 'days').format(DD_MMM_YYYY_FORMAT)]: today.format('dddd'),
  [today.subtract(1, 'days').format(DD_MMM_YYYY_FORMAT)]: today.format('dddd'),
  [today.subtract(1, 'days').format(DD_MMM_YYYY_FORMAT)]: today.format('dddd'),
  [today.subtract(1, 'days').format(DD_MMM_YYYY_FORMAT)]: today.format('dddd')
};

export const toddMMMForHumans = (date: number) => {
  const result = moment(date).format(DD_MMM_FORMAT);

  return dateLabelsMap[result] || result;
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
