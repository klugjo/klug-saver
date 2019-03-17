import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KSAmountText } from '../../../components/KSAmountText';
import { textStyleBase } from '../../../theme/styles';
import { IExpense, IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';
import { getTotals, getTotalsForCategory } from '../helpers';


export interface IBreakdownTotal {
  title: string;
  total: number;
  color: string;
}

interface IBreakdownProps {
  expenses: IExpense[];
  filter?: string;
  onFilterChange: (categoryTitle: string) => void;
  theme: IThemeConstants;
}

const renderLabels = (onFilterChange: (categoryTitle: string) => void, theme: IThemeConstants) => (t: IBreakdownTotal, index: number) => (
  <TouchableHighlight
    style={styles(theme).row}
    key={index}
    onPress={() => onFilterChange(t.title)}
    underlayColor={theme.backgroundMainColor}
  >
    <Text style={styles(theme).labelText}>{t.title}</Text>
  </TouchableHighlight>
);

const renderBars = (max: number, onFilterChange: (categoryTitle: string) => void, theme: IThemeConstants) => (t: IBreakdownTotal, index: number) => (
  <TouchableHighlight
    style={styles(theme).row}
    key={index}
    onPress={() => onFilterChange(t.title)}
    underlayColor={theme.backgroundMainColor}
  >
    <View style={styles(theme).barBackground}>
      <View style={[styles(theme).bar, { backgroundColor: t.color, flexGrow: t.total / max }]}></View>
    </View>
  </TouchableHighlight>
);

const renderTotals = (onFilterChange: (categoryTitle: string) => void, theme: IThemeConstants) => (t: IBreakdownTotal, index: number) => (
  <TouchableHighlight
    style={styles(theme).row}
    key={index}
    onPress={() => onFilterChange(t.title)}
    underlayColor={theme.backgroundMainColor}
  >
    <KSAmountText
      textStyle={styles(theme).totalText}
      amount={t.total}
    />
  </TouchableHighlight>
);

const Breakdown = ({ expenses, filter, onFilterChange, theme }: IBreakdownProps) => {
  const totals = !!filter ? getTotalsForCategory(expenses, filter) : getTotals(expenses);
  const max = Math.max(...totals.map(t => t.total));

  if (!expenses || !expenses.length) {
    return <View style={styles(theme).root}>
      <Icon name="not-interested" size={30} color={theme.underlayColor} />
    </View>;
  }

  return <View style={styles(theme).root}>
    <View>
      {totals.map(renderLabels(onFilterChange, theme))}
    </View>
    <View style={styles(theme).barContainer}>
      {totals.map(renderBars(max, onFilterChange, theme))}
    </View>
    <View>
      {totals.map(renderTotals(onFilterChange, theme))}
    </View>
  </View>;
};

export default withTheme(Breakdown);

const styles = (theme: IThemeConstants) => StyleSheet.create({
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
    backgroundColor: theme.underlayColor,
    flexDirection: 'row',
    borderRadius: 5
  },
  bar: {
    borderRadius: 5
  },
  labelText: {
    marginHorizontal: 15,
    ...textStyleBase(theme)
  },
  totalText: {

    marginHorizontal: 15,
    ...textStyleBase(theme),
    textAlign: 'right'
  }
});
