import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import VirtualKeyboard from './VirtualKeyboard';
import { PAGES } from '../../constants';
import Categories from './Categories';
import { formatAmount } from '../../util';
import { IExpense } from '../../typings';

export interface IAddProps {
  addExpense: (expense: IExpense) => void;
}

interface IAddState {
  amount: string;
  selectedCategory?: { title: string };
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
            onPickSubCategory={this.onSelectedSubCategoryChange}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
          />
        </View>
        <View style={styles.amountRoot}>
          <View style={styles.amountContainer}>
            <Text style={styles.currency}>SGD</Text>
            <View style={styles.amountInput}>
              <Text style={{
                color: '#003249',
                fontSize: this.getFontSize()
              }}>
                {formatAmount(amount || 0)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.keyboard}>
          <VirtualKeyboard
            addChar={this.addChar}
            deleteChar={this.deleteChar}
            addDecimal={this.addDecimal}
          />
        </View>
        <View style={styles.saveButton}>
          <Button
            title="SAVE"
            onPress={this.onSave}
            color="#000"
          />
        </View>
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

  onSelectedCategoryChange = (newCategory: { title: string }) => {
    const selectedCategory = newCategory === this.state.selectedCategory ? undefined : newCategory;
    this.setState({ selectedCategory, selectedSubCategory: '' });
  };

  onSelectedSubCategoryChange = (selectedSubCategory: string) => {
    this.setState({ selectedSubCategory });
  };

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


  getFontSize = () => {
    const amount = numeral(this.state.amount).value();

    if (!amount || amount < 10000) {
      return 60;
    } else if (amount < 10000000) {
      return 40;
    } else {
      return 25;
    }
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
  amountRoot: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10
  },
  amountText: {

  },
  currency: {
    fontFamily: 'lato-thin',
    fontSize: 20,
    marginTop: 10,
    color: '#999'
  },
  amountInput: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  },
  keyboard: {
    flex: 0.35
  },
  saveButton: {
    flex: 0.1,
    backgroundColor: '#FFF'
  },
  label: {
    color: '#003249'
  },
});
