import React from 'React';
import { View, StyleSheet } from 'react-native';

import { IExpense, ICategory } from '../../typings';
import Breakdown from './Components/Breakdown';
import { GrandTotal } from './Components/GrandTotal';
import { PeriodPicker } from './Components/PeriodPicker';
import { CategoryFilterHeader } from './Components/CategoryFilterHeader';
import { getPeriodLabel, getFilteredExpenses } from './helpers';

export type PeriodFilterType = 'year' | 'month' | 'week' | 'day';

interface IRootProps {
  expenses: IExpense[];
}

interface IRootState {
  periodFilterType: PeriodFilterType;
  offset: number;
  filter?: ICategory;
}

export default class Root extends React.Component<IRootProps, IRootState> {
  constructor(props: IRootProps) {
    super(props);
    this.state = {
      periodFilterType: 'month',
      offset: 0,
      filter: undefined
    };
  }

  public render() {
    const { periodFilterType, offset, filter } = this.state;
    const expenses = getFilteredExpenses(this.props.expenses, periodFilterType, offset, filter);

    return <View style={styles.breakdownContainer}>
      <PeriodPicker
        currentFilterType={periodFilterType}
        onCurrentFilterChange={this.onCurrentFilterChange}
      />
      <GrandTotal
        expenses={expenses}
        label={getPeriodLabel(periodFilterType, offset)}
        isBeforeHidden={offset < -365}
        isNextHidden={offset >= 0}
        onBefore={this.onOffsetChange(-1)}
        onNext={this.onOffsetChange(1)}
      />
      <CategoryFilterHeader filter={filter} onReset={this.onResetFilter} />
      <Breakdown
        expenses={expenses}
        filter={filter}
        onFilterChange={this.onFilterChange}
      />
    </View>
  }

  private onFilterChange = (filter: ICategory) => {
    this.setState({ filter });
  }

  private onResetFilter = () => {
    this.setState({ filter: undefined });
  }

  private onOffsetChange = (amount: number) => () => {
    this.setState({ offset: this.state.offset + amount });
  }

  private onCurrentFilterChange = (periodFilterType: PeriodFilterType) => {
    this.setState({ periodFilterType, offset: 0 });
  }
}

const styles = StyleSheet.create({
  breakdownContainer: {
    flex: 1
  }
});
