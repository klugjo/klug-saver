import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/configureStore';
import Add from './src/containers/Add';
import List from './src/containers/List';
import { PAGES } from './src/constants';

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
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Tabs />
          </View>
        </PersistGate>
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
