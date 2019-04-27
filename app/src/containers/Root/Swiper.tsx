import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Add from '../Add';
import List from '../List';
import Settings from '../Settings';
import Summary from '../Summary';
import Welcome from '../Welcome';

interface IRootProps {
  tutorialDone: boolean;
}

export default class Root extends React.Component<IRootProps, {}> {
  render() {
    const { tutorialDone } = this.props;

    if (!tutorialDone) {
      return <Welcome />;
    }

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
