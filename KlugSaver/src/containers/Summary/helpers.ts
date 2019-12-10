import moment from 'moment';

import { toddMMMForHumans, toddMMM, sum, uniq } from '../../util';
import { PeriodFilterType } from './Root';
import { IExpense, ICategory } from '../../typings';
import { IBreakdownTotal } from './Components/Breakdown';

export const getPeriodLabel = (periodFilterType: PeriodFilterType, offset: number) => {
  const date = moment().add(offset, periodFilterType);

  if (periodFilterType === 'day') {
    return toddMMMForHumans(date.valueOf());
  } else if (periodFilterType === 'week') {
    const startDate = moment().add(offset, periodFilterType).startOf(periodFilterType);
    const endDate = moment().add(offset, periodFilterType).endOf(periodFilterType);
    return `${toddMMM(startDate.valueOf())} - ${toddMMM(endDate.valueOf())}`;
  } else if (periodFilterType === 'month') {
    return date.format('MMMM YYYY');
  } else if (periodFilterType === 'year') {
    return date.format('YYYY');
  }

  return 'Something went wrong ?!?';
};

export const getFilteredExpenses = (
  expenses: IExpense[],
  periodFilterType: PeriodFilterType,
  offset: number,
  filter?: string
): IExpense[] => {
  const startDate = moment().add(offset, periodFilterType).startOf(periodFilterType);
  const endDate = moment().add(offset, periodFilterType).endOf(periodFilterType);

  return expenses.filter(e =>
    e.createdAt >= startDate.valueOf() &&
    e.createdAt < endDate.valueOf() &&
    (!filter || e.category === filter)
  );
};

export const getTotals = (expenses: IExpense[]): IBreakdownTotal[] => {
  const categories = uniq(expenses.map(e => e.category));

  return categories.map(title => {
    const filteredExpenses = expenses.filter((e: IExpense) => e.category === title);
    return {
      title,
      color: filteredExpenses[0].color,
      total: sum(filteredExpenses, (e: IExpense) => e.amount)
    }
  }).sort((a, b) => b.total - a.total);
};

export const getTotalsForCategory = (expenses: IExpense[], category: string): IBreakdownTotal[] => {
  const subCategories = uniq(expenses.filter(e => e.category === category).map(e => e.subCategory));

  return subCategories.map(title => {
    const filteredExpenses = expenses.filter((e: IExpense) => e.subCategory === title);
    return {
      title,
      color: filteredExpenses[0].color,
      total: sum(filteredExpenses, (e: IExpense) => e.amount)
    }
  }).sort((a, b) => b.total - a.total);
};
