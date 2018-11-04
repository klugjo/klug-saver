import React from 'react';
import numeral from 'numeral';
import { View, StyleSheet } from 'react-native';
import { FormInput, Button } from 'react-native-elements'

import VirtualKeyboard from './VirtualKeyboard';
import { PAGES } from '../../constants';
import Categories from '../Categories';

export default class Add extends React.Component {
  static navigationOptions = {
    title: PAGES.ADD
  };

  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      selectedCategory: '',
      selectedSubCategory: ''
    };
  }

  render() {
    const { amount, selectedCategory, selectedSubCategory } = this.state;

    return (
      <View style={styles.container}>
        <View style={{flex: 0.25}}>
          <Categories
            onPickCategory={this.onSelectedCategoryChange}
            onPickSubCategory={this.onSelectedSubCategoryChange}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
          />
        </View>
        <View style={{flex: 0.3, flexDirection: 'column', justifyContent: 'center'}}>
          <FormInput
            inputStyle={styles.input}
            editable={false}
            value={numeral(amount || 0).format('0,0.00')}
          />
        </View>
        <View style={{flex: 0.35}}>
          <VirtualKeyboard
            addChar={this.addChar}
            deleteChar={this.deleteChar}
            addDecimal={this.addDecimal}
          />
        </View>
        <View style={{flex: 0.1}}>
          <Button
            buttonStyle={styles.saveButton}
            title="Save"
            icon={{ name: 'save' }}
            onPress={this.onSave}
          />
        </View>
      </View>
    );
  }

  addChar = (character) => () => {
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

  onSelectedCategoryChange = (selectedCategory) => {
    this.setState({ selectedCategory });
  }

  onSelectedSubCategoryChange = (selectedSubCategory) => {
    this.setState({ selectedSubCategory });
  }

  onSave = () => {
    const { amount, selectedCategory, selectedSubCategory } = this.state;

    if (!amount) {
      return;
    }

    console.log(selectedCategory.title);

    this.props.addExpense({ amount, description: `${selectedCategory.title} - ${selectedSubCategory}` });

    this.setState({ amount: '', selectedCategory: null, selectedSubCategory: '' });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  label: {
    color: '#003249'
  },
  input: {
    color: '#003249',
    fontSize: 60
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#003249'
  }
});
