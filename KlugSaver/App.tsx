import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/configureStore';
import { ThemeType } from './src/constants/common';
import DeleteModal from './src/containers/DeleteModal';
import Swiper from './src/containers/Swiper';
import theme from './src/theme/light';
import ThemeContext from './src/theme/ThemeContext';
import { getTheme } from './src/theme/utils';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={theme}>
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
