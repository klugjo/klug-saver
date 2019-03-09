import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Swiper from './src/containers/Swiper';
import { store, persistor } from './src/configureStore';
import { getTheme } from './src/theme/utils';
import DeleteModal from './src/containers/DeleteModal';
import { ThemeType } from './src/constants/common';
import ThemeContext from './src/theme/ThemeContext';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={getTheme(store.getState().theme)}>
          <PersistGate loading={null} persistor={persistor}>
            <View style={styles(store.getState().theme).container}>
              <StatusBar
                barStyle="dark-content"
              />
              <Swiper />
              <DeleteModal />
            </View>
          </PersistGate>
        </ThemeContext.Provider>
      </Provider>
    );
  }
}

const styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: getTheme(theme).backgroundMainColor
  }
});
