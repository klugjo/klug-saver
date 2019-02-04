import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import { ICategory } from '../../../../typings';
import { getTheme } from '../../../../theme/utils';
import { dropShadow } from '../../../../theme/styles';

export interface IMainCategoriesPicker {
  selectedCategory?: ICategory;
  onPickCategory: (category?: ICategory) => void;
  categories: ICategory[];
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
        <View style={[
          styles.buttonStyle, {
            borderColor: cat.color,
            backgroundColor: isSelected ? getTheme().backgroundMainColor : cat.color
          }
        ]}>
          <Text style={{ color: isSelected ? cat.color : getTheme().backgroundMainColor }}>{cat.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  pickCategory = (cat?: ICategory) => () => {
    this.props.onPickCategory(cat);
  }

  render() {
    const { categories } = this.props;
    return (
      <View style={styles.categoriesRoot}>
        <View style={styles.categoriesLine}>
          {categories.slice(0, 4).map(this.renderButton)}
        </View>
        <View style={styles.categoriesLine}>
          {categories.slice(4, 8).map(this.renderButton)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoriesRoot: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingTop: 20
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
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: getTheme().backgroundMainColor,
    borderRadius: 5
  }
});
