import React from 'react';
import numeral from 'numeral';
import { View, StyleSheet, Text, Button, SectionList } from 'react-native';

import { IExpense } from '../../typings';
import { getCategoryColor, getTheme } from '../../theme/utils';
import { textStyleBase, textStyleThin, textStyleHeader } from '../../theme/styles';
import { toddMMM } from '../../util';

interface IListProps {
  expenses: IExpense[];
  getExpenses: (args?: any) => any;
}

interface IListState {
  itemToDelete: any;
}

export default class List extends React.Component<IListProps, IListState> {
  public render() {
    return (
      <View style={styles.root}>
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
      results[toddMMM(e.createdAt)] = [...results[toddMMM(e.createdAt)] || [], e];
    });

    console.log(results);
    return Object.keys(results).map((title: string) => ({
      title,
      data: results[title]
    }));
  }

  private renderHeader = ({ section }: any) => {
    return <View style={styles.headerRow}>
      <Text style={styles.headerRowText}>
        {section.title}
      </Text>
    </View>;
  }

  private renderExpense = ({ item }: { item: IExpense }) => {
    return <View style={styles.expenseRow}>
      <View style={[styles.rowColor, { backgroundColor: getCategoryColor(item.category) }]} />
      <Text style={styles.description}>{item.category}</Text>
      <Text style={styles.subDescription}>{item.subCategory}</Text>
      <Text style={styles.amount}>{numeral(item.amount || 0).format('0,0.00')}</Text>
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
  root: {
    paddingBottom: 40
  },
  container: {
    flex: 1,
    backgroundColor: getTheme().backgroundMain,
  },
  headerRow: {
    flex: 1,
    backgroundColor: getTheme().backgroundMain,
    paddingBottom: 3
  },
  headerRowText: {
    ...textStyleHeader,
    marginLeft: 23,
    marginTop: 10
  },
  expenseRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingRight: 16
  },
  rowColor: {
    width: 8,
    marginRight: 15
  },
  amount: {
    ...textStyleBase,
    width: 60,
    textAlign: 'right'
  },
  description: {
    ...textStyleThin,
    width: 100,
  },
  subDescription: {
    ...textStyleThin,
    color: getTheme().textSecondary,
    flexGrow: 1,
  },
  refreshButton: {
    backgroundColor: '#003249'
  }
});
