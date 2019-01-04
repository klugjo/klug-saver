import React from 'react';
import numeral from 'numeral';
import { View, StyleSheet, FlatList, Text, Button, TouchableHighlight } from 'react-native';

import { toddMMM } from '../../util';
import { DeleteModal } from './DeleteModal';
import { categoryMap } from '../Categories/constants';

const TOTAL = 'TOTAL';
const ENTRY = 'ENTRY';

interface IListProps {
  expenses: any[];
  getExpenses: (args?: any) => any;
  removeExpense: (id: any, date: any) => any;
}

interface IListState {
  itemToDelete: any;
}

export default class List extends React.Component<IListProps, IListState> {
  state = {
    itemToDelete: null
  };

  setItemToDelete = (item: any) => {
    this.setState({ itemToDelete: item });
  }

  getExpensesWithTotals = () => {
    const { expenses } = this.props;
    const result = [] as any[];
    let total = 0;

    expenses.forEach((exp, index, arr) => {
      if (index > 0 && toddMMM(exp.createdAt) !== toddMMM(arr[index - 1].createdAt)) {
        result.push({ type: TOTAL, amount: total });
        total = 0;
      }

      result.push({ ...exp, type: ENTRY });
      total = total + exp.amount;
    });

    return result
  }

  renderList = () => {
    const expenses = this.getExpensesWithTotals();
    if (expenses && expenses.length && expenses.map) {
      return <FlatList
        style={styles.container}
        data={expenses.map((e, i) => ({ ...e, key: i + '' }))}
        renderItem={this.renderItem}
      />;
    }

    return null;
  }

  render() {
    return (
      <View style={styles.root}>
        <Button
          title="Refresh"
          onPress={this.onRefresh}
        />
        {this.renderList()}
        <DeleteModal
          item={this.state.itemToDelete}
          onCancel={this.closeDeletePopup}
          onOK={this.onDelete}
        />
      </View>
    );
  }

  renderItem = ({ item, index }: any) => {
    return item.type === ENTRY ?
      this.renderExpense({ item, index }) :
      this.renderTotal(item);
  };

  renderExpense = ({ item, index }: any) => {
    const expenses = this.getExpensesWithTotals();

    const bgColor = categoryMap[item.category] ? categoryMap[item.category].color : 'transparent';
    const date = index > 0 && expenses[index - 1].type === TOTAL || index === 0 ?
      toddMMM(item.createdAt) :
      '';

    return (
      <TouchableHighlight
        onPress={this.onOpenDeletePopup(item)}
        underlayColor="#CCC"
      >
        <View style={styles.item}>
          <View style={[styles.rowColor, { backgroundColor: bgColor }]} />
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.description}>{item.category} {item.subCategory}</Text>
          <Text style={styles.amount}>{numeral(item.amount || 0).format('0,0.00')}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderTotal = (item: any) => {
    return <View style={styles.totalItem}>
      <View style={[styles.rowColor, { backgroundColor: 'transparent' }]} />
      <Text style={styles.date}></Text>
      <Text style={styles.description}></Text>
      <Text style={styles.amount}>{numeral(item.amount || 0).format('0,0.00')}</Text>
    </View>;
  }

  getRefreshDate = () => {
    const dateOffset = (24 * 60 * 60 * 1000) * 30; // 30 days
    const from = new Date();

    from.setTime(from.getTime() - dateOffset);

    return from;
  }

  onRefresh = () => {
    this.props.getExpenses({ from: this.getRefreshDate() });
  }

  onOpenDeletePopup = (item: any) => () => {
    this.setItemToDelete(item);
  }

  onDelete = () => {
    this.props.removeExpense((this.state.itemToDelete as any).id, this.getRefreshDate());
    this.closeDeletePopup();
  }

  closeDeletePopup = () => {
    this.setItemToDelete(null);
  }
}

const styles = StyleSheet.create({
  root: {
    paddingBottom: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#D1EAEB',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingRight: 16
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
    fontWeight: 'bold',
    width: 60,
    color: '#003249',
    textAlign: 'right',
    fontFamily: 'Cochin'
  },
  description: {
    flexGrow: 1,
    color: '#003249',
    fontFamily: 'Cochin'
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
