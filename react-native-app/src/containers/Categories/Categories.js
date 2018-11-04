import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import { categories } from './constants';
import { SubCategoryModal } from './SubCategoryModal';

export default class MainCategoriesPicker extends React.Component {

  renderButton = (cat) => {
    const { onPickCategory, selectedCategory } = this.props;

    return (
      <TouchableHighlight
        onPress={() => onPickCategory(cat)}
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
            backgroundColor: selectedCategory && selectedCategory.title === cat.title ? 'orange' : '#003249',
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
    const { selectedSubCategory, selectedCategory, onPickSubCategory } = this.props;

    return (
      <View style={styles.categoriesRoot}>
        <View style={styles.categoriesLine}>
          {categories.col1.map(this.renderButton)}
        </View>
        <View style={styles.categoriesLine}>
          {categories.col2.map(this.renderButton)}
        </View>
        <SubCategoryModal
          items={selectedCategory && selectedCategory.subCategories}
          open={selectedCategory && !selectedSubCategory}
          onPickSubCategory={onPickSubCategory}
        />
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
