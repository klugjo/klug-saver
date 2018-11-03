import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

const categories = {
  col1: [
    { title: 'Dining' },
    { title: 'Transport' },
    { title: 'Shopping' },
    { title: 'Fun' }
  ],
  col2: [
    { title: 'Travel' },
    { title: 'Bills' },
    { title: 'Health' },
    { title: 'Misc' }
  ]
}

export default class MainCategoriesPicker extends React.Component {

  renderButton = (cat) => {
    return (
      <View
        key={cat.title}
        style={{
          backgroundColor: '#003249',
          height: 50,
          flex: 0.23,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <Text style={{color: '#D1EAEB'}}>{cat.title}</Text>
      </View>
      // <Button
      //   key={cat.title}
      //   color="#D1EAEB"
      //   buttonStyle={styles.categoriesButton}
      //   containerViewStyle={{flex: 1, margin: 0}}
      //   title={cat.title}
      //   onPress={() => console.log(cat.title)}
      // />
    );
  }

  render() {
    return (
      <View style={styles.categoriesRoot}>
        <View style={styles.categoriesLine}>
          {categories.col1.map(this.renderButton)}
        </View>
        <View style={styles.categoriesLine}>
          {categories.col2.map(this.renderButton)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoriesRoot: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around'
  },
  categoriesLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  categoriesButton: {
    backgroundColor: `#003249`
  }
});

