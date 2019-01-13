import React from 'React';
import { View, StyleSheet } from 'react-native';

import { IExpense } from '../../typings';
import Breakdown from './Components/Breakdown';
import { GrandTotal } from './Components/GrandTotal';

interface IRootProps {
  expenses: IExpense[];
}

export default class Root extends React.Component<IRootProps, {}> {
  public render() {
    const { expenses } = this.props;

    return <View style={styles.breakdownContainer}>
      <GrandTotal expenses={expenses} />
      <Breakdown expenses={expenses} />
    </View>
  }
}

const styles = StyleSheet.create({
  breakdownContainer: {
    flex: 1
  }
});
