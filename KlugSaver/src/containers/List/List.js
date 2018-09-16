import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { PAGES } from '../../constants';

export default class List extends React.Component {
  static navigationOptions = {
    title: PAGES.LIST
  };

  render() {
    const { expenses } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={expenses.map((e, i) => ({ ...e, key: i + '' }))}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.textStyle}>
        <Text style={styles.amount}>{`${item.amount}`}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{this.formatDate(item.date)}</Text>
      </Text>
    </View>
  );

  formatDate = (date) => {
    if (!date) return '';

    const d = new Date(date);

    return `${d.getDate()}-${d.getMonth()}`;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1EAEB'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#003249'
  },
  textStyle: {
    color: '#003249'
  },
  amount: {
    fontWeight: 'bold',
    width: 90
  },
  description: {
    flexGrow: 1
  },
  date: {
    width: 50
  }
});
