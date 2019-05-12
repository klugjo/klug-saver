import React from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import { IExpense, IThemeConstants } from '../../typings';
import { toddMMMForHumans } from '../../util';
import { withTheme } from '../ThemeProvider/withTheme';
import ExpenseRow from './Components/ExpenseRow';
import SectionHeader from './Components/SectionHeader';

export interface IListProps {
  expenses: IExpense[];
  openDeleteModal: (expense: IExpense) => any;
  theme: IThemeConstants;
}

class List extends React.Component<IListProps, {}> {
  public render() {
    const theme = this.context;

    return (
      <View style={styles(theme).rootView}>
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

  private renderHeader = (props: any) => <SectionHeader {...props} />;

  private renderExpense = (props: { item: IExpense }) => <ExpenseRow {...{
    ...props,
    openDeleteModal: this.props.openDeleteModal
  }} />
}

export default withTheme(List);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  rootView: {
    paddingBottom: 40
  },
  refreshButton: {
    backgroundColor: '#003249'
  }
});
