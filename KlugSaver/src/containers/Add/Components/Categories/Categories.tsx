import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import { categories } from '../../../../constants/categories';
import { ICategory } from '../../../../typings';
import { getTheme } from '../../../../theme/utils';

export interface IMainCategoriesPicker {
  selectedCategory?: ICategory;
  onPickCategory: (category?: ICategory) => void;
}

export default class MainCategoriesPicker extends React.Component<IMainCategoriesPicker, {}> {

  renderButton = (cat: ICategory) => {
    const { selectedCategory } = this.props;
    const isSelected = selectedCategory && selectedCategory.title === cat.title;

    return (
      <TouchableHighlight
        onPress={this.pickCategory(cat)}
        key={cat.title}
        style={styles.buttonContainer}
        underlayColor={getTheme().backgroundMainColor}
      >
        <View style={[styles.buttonStyle, {
          backgroundColor: isSelected ? getTheme().backgroundMainColor : cat.color,
          borderWidth: isSelected ? 1 : 0 }
        ]}>
          <Text style={{ color: isSelected ? getTheme().textMainColor : getTheme().backgroundMainColor }}>{cat.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  pickCategory = (cat?: ICategory) => () => {
    this.props.onPickCategory(cat);
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
  buttonContainer: {
    height: 50,
    flex: 0.23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonStyle: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: getTheme().textSecondaryColor
  }
});
