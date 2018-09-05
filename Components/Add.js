import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      description: ''
    };
  }

  render() {
    const { amount, description } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          value={amount}
          style={{ height: 40 }}
          caretHidden={true}
          placeholder="Amount"
          keyboardType="decimal-pad"
          onChangeText={(amount) => this.setState({ amount })}
        />
        <TextInput
          value={description}
          style={{ height: 40 }}
          caretHidden={true}
          placeholder="Description"
          onChangeText={(description) => this.setState({ description })}
        />
        <Button
          onPress={this.addExpense}
          title="Add"
          color="#841584"
        />
        <Text>{this.props.expenses.map(e => `${e.amount} ${e.description}`).join(', ')}</Text>
      </View>
    );
  }

  addExpense = () => {
    this.props.addExpense({amount, description});
    this.setState({
      amount: 0,
      description: ''
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
