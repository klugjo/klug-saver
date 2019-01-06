import React from 'react';
import { View, StyleSheet, Text, Button, SectionList } from 'react-native';

import { IExpense } from '../../typings';
import { getCategoryColor, getTheme } from '../../theme/utils';
import { textStyleBase, textStyleThin, textStyleHeader } from '../../theme/styles';
import { sum, formatAmount, toddMMMForHumans } from '../../util';

export interface IListProps {
  expenses: IExpense[];
  getExpenses: (args?: any) => any;
}

interface IListState {
  itemToDelete: any;
}

export default class List extends React.Component<IListProps, IListState> {
  public render() {
    return (
      <View style={styles.rootView}>
        <Button
          title="Refresh"
          onPress={this.onRefresh}
        />
        {this.renderList()}
      </View>
    );
  }

  private renderList = () => {
    const sections = this.getExpenseSections();

    return <SectionList
      sections={sections}
      renderSectionHeader={this.renderHeader}
      renderItem={this.renderExpense}
      keyExtractor={(item, index) => item + index}
    />;
  }

  private getExpenseSections = () => {
    const { expenses } = this.props;
    const results: { [key: string]: IExpense[] } = {};

    expenses.forEach((e: IExpense) => {
      const formattedDate = toddMMMForHumans(e.createdAt);
      results[formattedDate] = [...results[formattedDate] || [], e];
    });

    return Object.keys(results).map((title: string) => ({
      title,
      data: results[title]
    }));
  }

  private renderHeader = ({ section }: any) => {
    return <View style={styles.headerRowView}>
      <Text style={styles.headerRowText}>
        {section.title}
      </Text>
      <Text style={styles.headerAmountText}>
        {formatAmount(sum(section.data, (d: IExpense) => d.amount))}
      </Text>
    </View>;
  }

  private renderExpense = ({ item }: { item: IExpense }) => {
    return <View style={styles.expenseRowView}>
      <View style={[styles.rowColorView, { backgroundColor: getCategoryColor(item.category) }]} />
      <Text style={styles.descriptionText}>{item.category}</Text>
      <Text style={styles.subDescriptionText}>{item.subCategory}</Text>
      <Text style={styles.amountText}>{formatAmount(item.amount)}</Text>
    </View>
  };

  getRefreshDate = () => {
    const dateOffset = (24 * 60 * 60 * 1000) * 30; // 30 days
    const from = new Date();

    from.setTime(from.getTime() - dateOffset);

    return from;
  }

  onRefresh = () => {
    this.props.getExpenses({ from: this.getRefreshDate() });
  }
}

const styles = StyleSheet.create({
  rootView: {
    paddingBottom: 40
  },
  containerView: {
    flex: 1,
    backgroundColor: getTheme().backgroundMain,
  },
  headerRowView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: getTheme().backgroundMain,
    paddingBottom: 3,
    paddingRight: 16,
    paddingTop: 10
  },
  headerRowText: {
    ...textStyleHeader,
    marginLeft: 23
  },
  headerAmountText: {
    ...textStyleHeader,
    color: getTheme().textSecondary,
    flexGrow: 1,
    textAlign: 'right'
  },
  expenseRowView: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingRight: 16
  },
  rowColorView: {
    width: 8,
    marginRight: 15
  },
  amountText: {
    ...textStyleBase,
    width: 60,
    textAlign: 'right'
  },
  descriptionText: {
    ...textStyleThin,
    width: 100
  },
  subDescriptionText: {
    ...textStyleThin,
    color: getTheme().textSecondary,
    flexGrow: 1
  },
  refreshButton: {
    backgroundColor: '#003249'
  }
});
