import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { formatAmount, sum } from '../../../util';
import { getTheme } from '../../../theme/utils';
import { IExpense } from '../../../typings';
import { categoryList } from '../../Categories/constants';

export interface IBreakdownTotal {
  title: string;
  total: number;
  color: string;
}

interface IBreakdownProps {
  expenses: IExpense[];
}

const getTotals = (expenses: IExpense[]): IBreakdownTotal[] => {
  return categoryList.map(c => ({
    ...c, 
    total: sum(expenses.filter((e: IExpense) => e.category === c.title), (e: IExpense) => e.amount)})
  ).sort((a, b) => b.total - a.total);
}

const renderLabels = (t: IBreakdownTotal, index: number) => (
  <View style={styles.row} key={index}>
    <Text style={styles.labelText}>{t.title}</Text>
  </View>
);

const renderBars = (max: number) => (t: IBreakdownTotal, index: number) => (
  <View style={styles.row} key={index}>
    <View style={styles.barBackground}>
      <View style={[styles.bar, { backgroundColor: t.color, flexGrow: t.total / max }]}></View>
    </View>
  </View>
);

const renderTotals = (t: IBreakdownTotal, index: number) => (
  <View style={styles.row} key={index}>
    <Text style={styles.totalText}>{formatAmount(t.total)}</Text>
  </View>
);

const Breakdown = ({ expenses }: IBreakdownProps) => {
  const totals = getTotals(expenses);
  const max = Math.max(...totals.map(t => t.total));

  return <View style={styles.root}>
    <View>
      {totals.map(renderLabels)}
    </View>
    <View style={styles.barContainer}>
      {totals.map(renderBars(max))}
    </View>
    <View>
      {totals.map(renderTotals)}
    </View>
  </View>;
};

export default Breakdown;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  barContainer: {
    flexGrow: 1
  },
  row: {
    flex: 1,
    maxHeight: 40,
    justifyContent: 'center'
  },
  barBackground: {
    height: 10,
    backgroundColor: getTheme().underlayColor,
    flexDirection: 'row',
    borderRadius: 5
  },
  bar: {
    borderRadius: 5
  },
  labelText: {
    marginHorizontal: 15,
    fontSize: 17,
    fontFamily: getTheme().fontThin
  },
  totalText: {
    fontSize: 17,
    marginHorizontal: 15,
    fontFamily: getTheme().fontThin,
    textAlign: 'right'
  }
});
