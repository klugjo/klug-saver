import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatAmount } from '../../../util';
import { getTheme } from '../../../theme/utils';
import { IExpense } from '../../../typings';
import { getTotalsForCategory, getTotals } from '../helpers';
import { textStyleBase } from '../../../theme/styles';

export interface IBreakdownTotal {
  title: string;
  total: number;
  color: string;
}

interface IBreakdownProps {
  expenses: IExpense[];
  filter?: string;
  onFilterChange: (categoryTitle: string) => void;
}

const renderLabels = (onFilterChange: (categoryTitle: string) => void) => (t: IBreakdownTotal, index: number) => (
  <TouchableHighlight
    style={styles.row}
    key={index}
    onPress={() => onFilterChange(t.title)}
    underlayColor={getTheme().backgroundMainColor}
  >
    <Text style={styles.labelText}>{t.title}</Text>
  </TouchableHighlight>
);

const renderBars = (max: number, onFilterChange: (categoryTitle: string) => void) => (t: IBreakdownTotal, index: number) => (
  <TouchableHighlight
    style={styles.row}
    key={index}
    onPress={() => onFilterChange(t.title)}
    underlayColor={getTheme().backgroundMainColor}
  >
    <View style={styles.barBackground}>
      <View style={[styles.bar, { backgroundColor: t.color, flexGrow: t.total / max }]}></View>
    </View>
  </TouchableHighlight>
);

const renderTotals = (onFilterChange: (categoryTitle: string) => void) => (t: IBreakdownTotal, index: number) => (
  <TouchableHighlight
    style={styles.row}
    key={index}
    onPress={() => onFilterChange(t.title)}
    underlayColor={getTheme().backgroundMainColor}
  >
    <Text style={styles.totalText}>{formatAmount(t.total)}</Text>
  </TouchableHighlight>
);

const Breakdown = ({ expenses, filter, onFilterChange }: IBreakdownProps) => {
  const totals = !!filter ? getTotalsForCategory(expenses, filter) : getTotals(expenses);
  const max = Math.max(...totals.map(t => t.total));

  if (!expenses || !expenses.length) {
    return <View style={styles.root}>
      <Icon name="not-interested" size={30} color={getTheme().underlayColor} />
    </View>;
  }

  return <View style={styles.root}>
    <View>
      {totals.map(renderLabels(onFilterChange))}
    </View>
    <View style={styles.barContainer}>
      {totals.map(renderBars(max, onFilterChange))}
    </View>
    <View>
      {totals.map(renderTotals(onFilterChange))}
    </View>
  </View>;
};

export default Breakdown;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 20,
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
    ...textStyleBase
  },
  totalText: {
    
    marginHorizontal: 15,
    ...textStyleBase,
    textAlign: 'right'
  }
});
