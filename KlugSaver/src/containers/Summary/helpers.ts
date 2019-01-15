import moment from 'moment';

import { toddMMMForHumans, toddMMM, sum } from '../../util';
import { PeriodFilterType } from './Root';
import { IExpense, ICategory } from '../../typings';
import { IBreakdownTotal } from './Components/Breakdown';
import { categoryList } from '../../constants/categories';

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
  filter?: ICategory
): IExpense[] => {
  const startDate = moment().add(offset, periodFilterType).startOf(periodFilterType);
  const endDate = moment().add(offset, periodFilterType).endOf(periodFilterType);

  return expenses.filter(e =>
    e.createdAt >= startDate.valueOf() &&
    e.createdAt < endDate.valueOf() &&
    (!filter || e.category === filter.title)
  );
};

export const getTotals = (expenses: IExpense[]): IBreakdownTotal[] => {
  return categoryList.map(c => ({
    ...c, 
    total: sum(expenses.filter((e: IExpense) => e.category === c.title), (e: IExpense) => e.amount)})
  ).sort((a, b) => b.total - a.total);
};

export const getTotalsForCategory = (expenses: IExpense[], category: ICategory): IBreakdownTotal[] => {
  const filteredExpenses = expenses.filter(e => e.category === category.title);

  return category.subCategories.map(subCategory => ({
    title: subCategory,
    total: sum(filteredExpenses.filter((e: IExpense) => e.subCategory === subCategory), (e: IExpense) => e.amount),
    color: category.color
  })).sort((a, b) => b.total - a.total);
};
