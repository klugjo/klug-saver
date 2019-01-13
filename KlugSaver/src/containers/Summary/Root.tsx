import React from 'React';
import { View, StyleSheet } from 'react-native';

import { IExpense } from '../../typings';
import Breakdown from './Components/Breakdown';
import { GrandTotal } from './Components/GrandTotal';
import { PeriodPicker } from './Components/PeriodPicker';
import moment from 'moment'
import { toddMMM } from '../../util';

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
    const expenses = this.getFilteredExpenses();
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

  private getFilteredExpenses = (): IExpense[] => {
    const {expenses} = this.props;
    const { periodFilterType, offset } = this.state;
    const startDate = moment().add(offset, periodFilterType).startOf(periodFilterType);
    const endDate = moment().add(offset, periodFilterType).endOf(periodFilterType);

    console.log(toddMMM(startDate.valueOf()));
    console.log(toddMMM(endDate.valueOf()));

    return expenses.filter(e => e.createdAt >= startDate.valueOf() && e.createdAt < endDate.valueOf());
  }
}

const styles = StyleSheet.create({
  breakdownContainer: {
    flex: 1
  }
});
