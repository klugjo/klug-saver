import React from 'react';
import numeral from 'numeral';
import { View, StyleSheet, FlatList, Text, Button, TouchableHighlight } from 'react-native';

import { toddMMM } from '../../util';
import { DeleteModal } from './DeleteModal';
import { categoryMap } from '../Categories/constants';

export default class List extends React.Component {
  state = {
    itemToDelete: null
  };

  setItemToDelete = (item) => {
    this.setState({ itemToDelete: item });
  }

  render() {
    const { expenses } = this.props;

    return (
      <View style={styles.root}>
        <Button
          buttonStyle={styles.refreshButton}
          title="Refresh"
          icon={{ name: 'refresh' }}
          onPress={this.onRefresh}
        />
        {expenses && expenses.length && expenses.map && <FlatList
          styles={styles.container}
          data={expenses.map((e, i) => ({ ...e, key: i + '' }))}
          renderItem={this.renderItem}
        />}
        <DeleteModal
          item={this.state.itemToDelete}
          onCancel={this.closeDeletePopup}
          onOK={this.onDelete}
        />
      </View>
    );
  }

  renderItem = ({ item, index }) => {
    const { expenses } = this.props;


    const bgColor = categoryMap[item.category] ? categoryMap[item.category].color : 'transparent';
    const date = index > 0 && toddMMM(item.createdAt) === toddMMM(expenses[index - 1].createdAt) ?
      '' :
      toddMMM(item.createdAt);

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
  };

  onRefresh = () => {
    this.props.getExpenses();
  }

  onOpenDeletePopup = (item) => () => {
    this.setItemToDelete(item);
  }

  onDelete = () => {
    this.props.removeExpense(this.state.itemToDelete.id);
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
  rowColor: {
    width: 8,
    marginRight: 10
  },
  amount: {
    fontWeight: 'bold',
    width: 60,
    color: '#003249',
    textAlign: 'right',
    fontFamily: 'lato-regular'
  },
  description: {
    flexGrow: 1,
    color: '#003249',
    fontFamily: 'lato-thin'
  },
  date: {
    width: 90,
    color: '#003249',
    fontFamily: 'lato-thin'
  },
  refreshButton: {
    backgroundColor: '#003249'
  }
});
