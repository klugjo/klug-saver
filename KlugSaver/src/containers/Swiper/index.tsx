import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View } from 'react-native';

import Add from '../Add';
import List from '../List';
import Summary from '../Summary';
import Settings from '../Settings';

export default class Root extends React.Component {
  render() {
    return <Swiper
    showsButtons={false}
    loop={false}
    showsPagination={false}
  >
    <View style={styles.screen}>
      <Add />
    </View>
    <View style={styles.screen}>
      <List />
    </View>
    <View style={styles.screen}>
      <Summary />
    </View>
    <View style={styles.screen}>
      <Settings />
    </View>
  </Swiper>;
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
