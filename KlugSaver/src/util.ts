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

export const toddMMMForHumans = (date: number | moment.Moment) => {
  const result = moment(date).format(DD_MMM_YYYY_FORMAT);

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

export const getRefreshDate = () => {
  const dateOffset = (24 * 60 * 60 * 1000) * 30; // 30 days
  const from = new Date();

  from.setTime(from.getTime() - dateOffset);

  return from;
};

export const uniq = <T extends {}>(arr: T[]): T[] => {
  return arr.filter((v: T, i: number, a: T[]) => a.indexOf(v) === i);
};
