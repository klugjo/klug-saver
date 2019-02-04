import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Swiper from './src/containers/Swiper';
import { store, persistor } from './src/configureStore';
import { getTheme } from './src/theme/utils';
import DeleteModal from './src/containers/DeleteModal';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
            />
            <Swiper />
            <DeleteModal />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: getTheme().backgroundMainColor
  }
});
