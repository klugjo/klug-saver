import React from 'react';
import numeral from 'numeral';
import { View, StyleSheet, FlatList, Text, Button, TouchableHighlight } from 'react-native';

import { IExpense } from '../../typings';
import { getCategoryColor, getTheme } from '../../theme/utils';
import { textStyleBase, textStyleThin } from '../../theme/styles';

interface IListProps {
  expenses: IExpense[];
  getExpenses: (args?: any) => any;
}

interface IListState {
  itemToDelete: any;
}

export default class List extends React.Component<IListProps, IListState> {
  public render() {
    return (
      <View style={styles.root}>
        <Button
          title="Refresh"
          onPress={this.onRefresh}
        />
        {this.renderList()}
      </View>
    );
  }

  private renderList = () => {
    const { expenses } = this.props;

    return <FlatList
      data={expenses.map((e: IExpense, index: number) => ({ ...e, key: `${index}` }))}
      renderItem={this.renderExpense}
    />;
  }

  private renderExpense = ({ item }: { item: IExpense }) => {
    return <View style={styles.expenseRow}>
      <View style={[styles.rowColor, { backgroundColor: getCategoryColor(item.category) }]} />
      <Text style={styles.description}>{item.category}</Text>
      <Text style={styles.subDescription}>{item.subCategory}</Text>
      <Text style={styles.amount}>{numeral(item.amount || 0).format('0,0.00')}</Text>
    </View>
  };

  getRefreshDate = () => {
    const dateOffset = (24 * 60 * 60 * 1000) * 30; // 30 days
    const from = new Date();

    from.setTime(from.getTime() - dateOffset);

    return from;
  }

  onRefresh = () => {
    this.props.getExpenses({ from: this.getRefreshDate() });
  }
}

const styles = StyleSheet.create({
  root: {
    paddingBottom: 40
  },
  container: {
    flex: 1,
    backgroundColor: getTheme().backgroundMain,
  },
  expenseRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingRight: 16,
    fontFamily: 'Helvetica'
  },
  totalItem: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingRight: 16,
    backgroundColor: '#E1E3E3'
  },
  rowColor: {
    width: 8,
    marginRight: 10
  },
  amount: {
    ...textStyleBase,
    width: 60,
    textAlign: 'right'
  },
  description: {
    ...textStyleThin,
    width: 100,
  },
  subDescription: {
    ...textStyleThin,
    color: getTheme().textSecondary,
    flexGrow: 1,
  },
  date: {
    width: 90,
    color: '#003249',
    fontFamily: 'Cochin'
  },
  refreshButton: {
    backgroundColor: '#003249'
  }
});
