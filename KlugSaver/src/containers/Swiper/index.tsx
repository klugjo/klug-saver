import React from 'react';
import { StyleSheet, View } from 'react-native';

import List from '../List';

export default class Root extends React.Component {
  render() {
    return <View style={styles.screen}>
      <List />
    </View>;
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
