import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { KSAmountText } from '../../../components/KSAmountText';
import { textStyleThin } from '../../../theme/styles';
import { IExpense, IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';

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
      <KSAmountText textStyle={styles(theme).amountText} amount={item.amount} />
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
    width: 80,
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

