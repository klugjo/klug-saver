import React from 'react';
import { View, StyleSheet } from 'react-native';
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
        <FormLabel>Amount</FormLabel>
        <FormInput
          editable={true}
          value={amount}
          onChangeText={this.onAmountChange}
          keyboardType="number-pad"
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
    );
  }

  onAmountChange = (amount) => this.setState({ amount });
  onDescriptionChange = (description) => this.setState({ description });

  onSave = () => {
    const { amount, description } = this.state;

    if (!amount) {
      return;
    }

    this.props.addExpense({ amount, description });

    this.setState({amount: '', description: ''});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  saveButton: {
    marginTop: 30
  }
});
