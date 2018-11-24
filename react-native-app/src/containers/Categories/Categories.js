import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import { categories } from './constants';
import { SubCategoryModal } from './SubCategoryModal';

export default class MainCategoriesPicker extends React.Component {

  renderButton = (cat) => {
    const { selectedCategory } = this.props;
    const isSelected = selectedCategory && selectedCategory.title === cat.title;

    return (
      <TouchableHighlight
        onPress={this.pickCategory(cat)}
        key={cat.title}
        style={styles.buttonContainer}
        underlayColor="#DDD"
      >
        <View style={getButtonStyle(isSelected, cat.color)}>
          <Text style={{ color: isSelected ? '#000' : '#FFF', fontFamily: 'lato-regular' }}>{cat.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  pickCategory = (cat) => () => {
    const { onPickCategory } = this.props;

    onPickCategory(cat);
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
          category={selectedCategory}
          open={selectedCategory && !selectedSubCategory}
          onPickSubCategory={onPickSubCategory}
          onClose={this.pickCategory(null)}
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
  buttonContainer: {
    height: 50,
    flex: 0.23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

const getButtonStyle = (isSelected, bgColor) => ({
  flex: 1,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 10,
  borderColor: '#000',
  backgroundColor: isSelected ? '#FFF' : bgColor,
  borderWidth: isSelected ? 1 : 0
});
