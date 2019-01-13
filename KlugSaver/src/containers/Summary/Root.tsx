import React from 'React';
import { View, StyleSheet } from 'react-native';

import { IExpense } from '../../typings';
import Breakdown from './Components/Breakdown';
import { GrandTotal } from './Components/GrandTotal';
import { PeriodPicker } from './Components/PeriodPicker';

export type PeriodFilterType = 'year' | 'month' | 'week' | 'day';

interface IRootProps {
  expenses: IExpense[];
}

interface IRootState {
  periodFilterType: PeriodFilterType;
  offset: number;
}

export default class Root extends React.Component<IRootProps, IRootState> {
  constructor(props: IRootProps) {
    super(props);
    this.state = {
      periodFilterType: 'month',
      offset: 0
    };
  }

  public render() {
    const { expenses } = this.props;
    const { periodFilterType } = this.state;

    return <View style={styles.breakdownContainer}>
      <PeriodPicker
        currentFilterType={periodFilterType}
        onCurrentFilterChange={this.onCurrentFilterChange}
      />
      <GrandTotal expenses={expenses} />
      <Breakdown expenses={expenses} />
    </View>
  }

  private onCurrentFilterChange = (periodFilterType: PeriodFilterType) => {
    this.setState({periodFilterType});
  }
}

const styles = StyleSheet.create({
  breakdownContainer: {
    flex: 1
  }
});
