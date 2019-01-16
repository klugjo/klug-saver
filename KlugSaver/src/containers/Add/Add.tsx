import React from 'react';
import { View, StyleSheet } from 'react-native';
import numeral from 'numeral';

import VirtualKeyboard from './Components/VirtualKeyboard';
import Categories from './Components/Categories';
import AmountDisplay from './Components/AmountDisplay';
import { SubCategoryModal } from './Components/SubCategoryModal';
import { IExpense, ICategory } from '../../typings';
import { KSButton } from '../../components';
import Metadata from './Components/Metadata';
import { CURRENCIES } from '../../constants/currencies';

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
        <View style={styles.metadata}>
          <Metadata
            currency={CURRENCIES.AUD}
            isCustomCurrency={true}
            isCredit={false}
            hasComment={true}
            hasCustomDate={false}
          />
          <AmountDisplay amount={amount} />
        </View>
        <View style={styles.keyboard}>
          <VirtualKeyboard
            addChar={this.addChar}
            deleteChar={this.deleteChar}
            addDecimal={this.addDecimal}
          />
        </View>
        <KSButton
          onPress={this.onSave}
          text="SAVE"
          containerStyle={styles.saveButton}
          textStyle={styles.saveButtonText}
        />
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
  metadata: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  keyboard: {
    flex: 0.35
  },
  saveButton: {
    flex: 0.1,
    marginHorizontal: 30,
    marginBottom: 10
  },
  saveButtonText: {
    fontSize: 20
  }
});
