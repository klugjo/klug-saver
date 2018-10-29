import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

import VirtualKeyboard from './VirtualKeyboard';
import { PAGES } from '../../constants';

export default class Add extends React.Component {
  static navigationOptions = {
    title: PAGES.ADD
  };

  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      description: ''
    };
  }

  render() {
    const { amount, description } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <FormLabel labelStyle={styles.label}>Amount</FormLabel>
          <FormInput
            inputStyle={styles.input}
            editable={false}
            value={amount}
          />
          <FormLabel labelStyle={styles.label}>Description</FormLabel>
          <FormInput
            inputStyle={styles.input}
            editable={true}
            value={description}
            onChangeText={this.onDescriptionChange}
          />
          <Button
            buttonStyle={styles.saveButton}
            title="Save"
            icon={{ name: 'save' }}
            onPress={this.onSave}
          />
        </View>
        <VirtualKeyboard
          addChar={this.addChar}
          deleteChar={this.deleteChar}
          addDecimal={this.addDecimal}
        />
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

  onDescriptionChange = (description) => this.setState({ description });

  onSave = () => {
    const { amount, description } = this.state;

    if (!amount) {
      return;
    }

    this.props.addExpense({ amount, description });

    this.setState({ amount: '', description: '' });

    Keyboard.dismiss();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  label: {
    color: '#003249'
  },
  input: {
    color: '#003249'
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: '#003249'
  }
});
