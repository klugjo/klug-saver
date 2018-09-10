import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from 'react-navigation';

import reducer from './src/reducer';
import Add from './src/containers/Add';
import List from './src/containers/List';
import { PAGES } from './src/constants';

const store = createStore(reducer);

const Tabs = createBottomTabNavigator({
  [PAGES.ADD]: {
    screen: Add
  },
  [PAGES.LIST]: {
    screen: List
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
