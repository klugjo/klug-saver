import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

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
          <FormLabel>Amount</FormLabel>
          <FormInput
            editable={false}
            value={amount}
          />
          <FormLabel>Description</FormLabel>
          <FormInput
            editable={true}
            value={description}
            onChangeText={this.onDescriptionChange}
          />
          <Button
            style={styles.saveButton}
            title="Save"
            icon={{ name: 'save' }}
            onPress={this.onSave}
          />
        </View>
        <View style={styles.keyboardRoot}>
          <View style={styles.keyboardLine}>
            <Button
              style={styles.keyboardButton}
              title="1"
              onPress={this.addChar('1')}
            />
            <Button
              style={styles.keyboardButton}
              title="2"
              onPress={this.addChar('2')}
            />
            <Button
              style={styles.keyboardButton}
              title="3"
              onPress={this.addChar('3')}
            />
          </View>
          <View style={styles.keyboardLine}>
            <Button
              style={styles.keyboardButton}
              title="4"
              onPress={this.addChar('4')}
            />
            <Button
              style={styles.keyboardButton}
              title="5"
              onPress={this.addChar('5')}
            />
            <Button
              style={styles.keyboardButton}
              title="6"
              onPress={this.addChar('6')}
            />
          </View>
          <View style={styles.keyboardLine}>
            <Button
              style={styles.keyboardButton}
              title="7"
              onPress={this.addChar('7')}
            />
            <Button
              style={styles.keyboardButton}
              title="8"
              onPress={this.addChar('8')}
            />
            <Button
              style={styles.keyboardButton}
              title="9"
              onPress={this.addChar('9')}
            />
          </View>
          <View style={styles.keyboardLine}>
            <Button
              style={styles.keyboardButton}
              title="."
              onPress={this.addDecimal}
            />
            <Button
              style={styles.keyboardButton}
              title="0"
              onPress={this.addChar('0')}
            />
            <Button
              style={styles.keyboardButton}
              title="<"
              onPress={this.deleteChar}
            />
          </View>
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
  onAmountChange = (amount) => this.setState({ amount });
  onDescriptionChange = (description) => this.setState({ description });

  onSave = () => {
    const { amount, description } = this.state;

    if (!amount) {
      return;
    }

    this.props.addExpense({ amount, description, date: new Date() });

    this.setState({ amount: '', description: '' });

    Keyboard.dismiss();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  saveButton: {
    marginTop: 30
  },
  keyboardRoot: {
    flexDirection: 'column',
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: '#7AC36A'
  },
  keyboardLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F3D1B0'
  },
  keyboardButton: {
    width: 100,
    height: 80
  }
});
