import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/configureStore';
import Root from './src/containers/Root';
import ThemeProvider from './src/containers/ThemeProvider';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Root />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    );
  }
}
