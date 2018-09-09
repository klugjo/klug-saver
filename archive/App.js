import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Loading from './Components/Loading';
import Add from './Components/AddContainer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Add />
      </PersistGate>
    </Provider>
  );
};

export default App;
