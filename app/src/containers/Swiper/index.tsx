import React from 'react';
import { StyleSheet } from 'react-native';
import Welcome from '../Welcome';

export default class Root extends React.Component {
  render() {
    return <Welcome />;

    // return <Swiper
    //   showsButtons={false}
    //   loop={false}
    //   showsPagination={false}
    // >
    //   <View style={styles.screen}>
    //     <Add />
    //   </View>
    //   <View style={styles.screen}>
    //     <List />
    //   </View>
    //   <View style={styles.screen}>
    //     <Summary />
    //   </View>
    //   <View style={styles.screen}>
    //     <Settings />
    //   </View>
    // </Swiper>;
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
