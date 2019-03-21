import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/configureStore';
import DeleteModal from './src/containers/DeleteModal';
import Swiper from './src/containers/Swiper';
import ThemeProvider from './src/containers/ThemeProvider';
import { withTheme } from './src/containers/ThemeProvider/withTheme';
import { IThemeConstants } from './src/typings';

const MainView = withTheme(({ theme }: { theme: IThemeConstants }) =>
  <SafeAreaView style={styles(theme).container}>
    <StatusBar
      barStyle={theme.barStyle}
    />
    <Swiper />
    <DeleteModal />
  </SafeAreaView>
);

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <MainView />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    );
  }
}

const styles = (theme: IThemeConstants) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundMainColor
  }
});
