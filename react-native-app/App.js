import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Icon } from 'react-native-elements'

import { store, persistor } from './src/configureStore';
import { PAGES } from './src/constants';
import Root from './src/containers/Add';
import List from './src/containers/List';
import Summary from './src/containers/Summary';

const Tabs = createBottomTabNavigator({
  [PAGES.ADD]: {
    screen: Root
  },
  [PAGES.LIST]: {
    screen: List
  },
  [PAGES.SUMMARY]: {
    screen: Summary
  }
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === PAGES.ADD) {
          iconName = 'add-circle-outline';
        } else if (routeName === PAGES.LIST) {
          iconName = 'list';
        } else if (routeName === PAGES.SUMMARY) {
          iconName = 'assessment';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
  });

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'lato-thin': require('./assets/fonts/Lato-Light.ttf'),
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf')
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <StatusBar
              hidden={true}
            />
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
    backgroundColor: '#F1F5F5'
  }
});
