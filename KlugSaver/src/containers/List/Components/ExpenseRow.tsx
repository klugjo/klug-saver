import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { textStyleThin } from '../../../theme/styles';
import { withTheme } from '../../../theme/withTheme';
import { IExpense, IThemeConstants } from '../../../typings';
import { formatAmount } from '../../../util';

export interface IExpenseRowProps {
  item: IExpense;
  openDeleteModal: (expense: IExpense) => any;
  theme: IThemeConstants;
}

const ExpenseRow = ({ item, openDeleteModal, theme }: IExpenseRowProps) => (
  <TouchableHighlight
    onPress={() => openDeleteModal(item)}
    underlayColor={theme.underlayColor}
  >
    <View style={styles(theme).expenseRowView}>
      <View style={[styles(theme).rowColorView, { backgroundColor: item.color }]} />
      <Text style={styles(theme).descriptionText}>{item.category}</Text>
      <Text style={styles(theme).subDescriptionText}>{item.subCategory}</Text>
      <Text style={styles(theme).amountText}>{formatAmount(item.amount)}</Text>
    </View>
  </TouchableHighlight>
);

export default withTheme(ExpenseRow);

const styles = (theme: IThemeConstants) => StyleSheet.create({
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
    ...textStyleThin(theme),
    width: 60,
    textAlign: 'right'
  },
  descriptionText: {
    ...textStyleThin(theme),
    width: 100
  },
  subDescriptionText: {
    ...textStyleThin(theme),
    flexGrow: 1
  }
});

