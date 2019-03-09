import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ICategory } from '../../../../typings';
import { getTheme } from '../../../../theme/utils';

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
        underlayColor={theme.underlayColor}
      >
        <View style={[
          styles.buttonStyle,
          { borderColor: isSelected ? cat.color : theme.underlayColor }
        ]}>
          <Icon name={cat.icon} size={20} color={cat.color} />
          <Text style={[styles.text, { color: isSelected ? cat.color : theme.textMainColor }]}>{cat.title}</Text>
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

const styles = (theme: IThemeConstants) => StyleSheet.create({
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
    height: 55,
    flex: 0.23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonStyle: {
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 5,
    backgroundColor: theme.backgroundMainColor
  },
  text: {
    color: '#000',
    fontSize: 13,
    marginTop: 3,
    fontFamily: theme.fontThin
  }
});
