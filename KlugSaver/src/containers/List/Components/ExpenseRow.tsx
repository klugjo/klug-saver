import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { IExpense } from '../../../typings';
import { formatAmount } from '../../../util';
import { getTheme } from '../../../theme/utils';
import { textStyleBase, textStyleThin } from '../../../theme/styles';

export interface IExpenseRowProps {
  item: IExpense;
  openDeleteModal: (expense: IExpense) => any;
}

const ExpenseRow = ({ item, openDeleteModal }: IExpenseRowProps) => (
  <TouchableHighlight
    onPress={() => openDeleteModal(item)}
    underlayColor={getTheme().underlayColor}
  >
    <View style={styles.expenseRowView}>
      <View style={[styles.rowColorView, { backgroundColor: item.color }]} />
      <Text style={styles.descriptionText}>{item.category}</Text>
      <Text style={styles.subDescriptionText}>{item.subCategory}</Text>
      <Text style={styles.amountText}>{formatAmount(item.amount)}</Text>
    </View>
  </TouchableHighlight>
);

export default ExpenseRow;

const styles = StyleSheet.create({
  expenseRowView: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingRight: 16
  },
  rowColorView: {
    width: 8,
    marginRight: 15
  },
  amountText: {
    ...textStyleThin,
    width: 60,
    textAlign: 'right'
  },
  descriptionText: {
    ...textStyleThin,
    width: 100
  },
  subDescriptionText: {
    ...textStyleThin,
    flexGrow: 1
  }
});

