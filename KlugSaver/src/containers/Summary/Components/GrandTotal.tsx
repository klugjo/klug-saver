import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IExpense } from '../../../typings';
import { sum, formatAmount, toddMMM } from '../../../util';
import { textStyleHeader } from '../../../theme/styles';
import { getTheme } from '../../../theme/utils';

export interface IGrandTotalProps {
  expenses: IExpense[];
  label: string;
};

export const GrandTotal = ({ expenses, label }: IGrandTotalProps) => {
  const total = sum(expenses, (t: IExpense) => t.amount);

  return <View style={styles.root}>
    <Text style={styles.amountText}>
      {formatAmount(total)}
    </Text>
    <Text style={styles.datesText}>
      {label}
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
