import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IExpense } from '../../../typings';
import { sum, formatAmount, toddMMM } from '../../../util';
import { textStyleHeader } from '../../../theme/styles';
import { getTheme } from '../../../theme/utils';

export interface IGrandTotalProps {
  expenses: IExpense[];
};

export const GrandTotal = ({ expenses }: IGrandTotalProps) => {
  const total = sum(expenses, (t: IExpense) => t.amount);
  const startDate = Math.min(...expenses.map(t => t.createdAt));
  const endDate = Math.max(...expenses.map(t => t.createdAt));

  return <View style={styles.root}>
    <Text style={styles.amountText}>
      {formatAmount(total)}
    </Text>
    <Text style={styles.datesText}>
      {`${toddMMM(startDate)} - ${toddMMM(endDate)}`}
    </Text>
  </View>;
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 20
  },
  amountText: {
    ...textStyleHeader,
    textAlign: 'center',
    marginBottom: 10
  },
  datesText: {
    fontFamily: getTheme().fontThin,
    color: getTheme().textSecondaryColor,
    textAlign: 'center'
  }
});