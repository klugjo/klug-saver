import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import {PAGES} from '../../constants';

export default class List extends React.Component {
  static navigationOptions = {
    title: PAGES.LIST
  };
  
  render() {
    const { expenses } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={expenses.map((e, i) => ({...e, key: i}))}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.amount}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
