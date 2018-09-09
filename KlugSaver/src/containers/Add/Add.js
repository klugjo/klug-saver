import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class Add extends React.Component {
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
          icon={{name: 'save'}}
        />
      </View>
    );
  }

  onAmountChange = (amount) => this.setState({ amount });
  onDescriptionChange = (description) => this.setState({ description });
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  saveButton: {
    marginTop: 30 
  }
});
