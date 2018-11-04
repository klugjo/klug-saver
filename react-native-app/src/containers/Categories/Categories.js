import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

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
};

export default class MainCategoriesPicker extends React.Component {

  renderButton = (cat) => {
    const { onPickCategory, selectedCategory } = this.props;

    return (
      <TouchableHighlight
        onPress={() => onPickCategory(cat.title)}
        key={cat.title}
        style={{
          height: 50,
          flex: 0.23,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <View
          style={{
            backgroundColor: selectedCategory === cat.title ? 'orange' : '#003249',
            flex: 1,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <Text style={{ color: '#D1EAEB' }}>{cat.title}</Text>
        </View>
      </TouchableHighlight>
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

