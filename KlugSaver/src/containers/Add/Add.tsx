import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import numeral from 'numeral';

import VirtualKeyboard from './Components/VirtualKeyboard';
import Categories from './Components/Categories';
import AmountDisplay from './Components/AmountDisplay';
import { SubCategoryModal } from './Components/SubCategoryModal';
import { getTheme } from '../../theme/utils';
import { IExpense, ICategory } from '../../typings';

export interface IAddProps {
  addExpense: (expense: IExpense) => void;
}

interface IAddState {
  amount: string;
  selectedCategory?: ICategory;
  selectedSubCategory: string;
}

export default class Add extends React.Component<IAddProps, IAddState> {
  constructor(props: IAddProps) {
    super(props);

    this.state = {
      amount: '',
      selectedCategory: undefined,
      selectedSubCategory: ''
    };
  }

  render() {
    const { amount, selectedCategory, selectedSubCategory } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.categories}>
          <Categories
            onPickCategory={this.onSelectedCategoryChange}
            selectedCategory={selectedCategory}
          />
        </View>
        <View style={styles.amount}>
          <AmountDisplay amount={amount} />
        </View>
        <View style={styles.keyboard}>
          <VirtualKeyboard
            addChar={this.addChar}
            deleteChar={this.deleteChar}
            addDecimal={this.addDecimal}
          />
        </View>
        <TouchableHighlight onPress={this.onSave} style={styles.saveButton} underlayColor={getTheme().underlayColor}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableHighlight>
        <SubCategoryModal
          category={selectedCategory}
          open={!!selectedCategory && !selectedSubCategory}
          onPickSubCategory={this.onSelectedSubCategoryChange}
          onClose={this.onSubCategoryModalClose}
        />
      </View>
    );
  }

  addChar = (character: string) => () => {
    const amount = this.state.amount + character;
    this.setState({ amount });
  };

  deleteChar = () => {
    const amount = this.state.amount.slice(0, -1);
    this.setState({ amount });
  };

  addDecimal = () => {
    const amount = this.state.amount.replace('.', '') + '.';
    this.setState({ amount });
  };

  onSelectedCategoryChange = (newCategory?: ICategory) => {
    const selectedCategory = newCategory === this.state.selectedCategory ? undefined : newCategory;
    this.setState({ selectedCategory, selectedSubCategory: '' });
  };

  onSelectedSubCategoryChange = (selectedSubCategory: string) => {
    this.setState({ selectedSubCategory });
  };

  onSubCategoryModalClose = () => {
    this.setState({ selectedCategory: undefined, selectedSubCategory: '' });
  }

  onSave = () => {
    const { amount, selectedCategory, selectedSubCategory } = this.state;

    if (!amount) {
      alert('Enter an amount');
      return;
    }

    if (!selectedCategory || !selectedCategory.title || !selectedSubCategory) {
      alert('Enter a category before saving');
      return;
    }

    this.props.addExpense({
      id: `${new Date().getTime()}`,
      amount: numeral(amount).value(),
      category: selectedCategory.title,
      subCategory: selectedSubCategory,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    });

    this.setState({ amount: '', selectedCategory: undefined, selectedSubCategory: '' });
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  categories: {
    flex: 0.25
  },
  amount: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  keyboard: {
    flex: 0.35
  },
  saveButton: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 30,
    marginBottom: 10
  },
  saveButtonText: {
    fontFamily: getTheme().fontThin,
    fontSize: 20
  }
});
