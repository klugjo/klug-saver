import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IExpense, IThemeConstants } from '../../typings';
import { toddMMMForHumans } from '../../util';
import { withTheme } from '../ThemeProvider/withTheme';
import ExpenseRow from './Components/ExpenseRow';
import SectionHeader from './Components/SectionHeader';
import { textStyleBase } from '../../theme/styles';

export interface IListProps {
  expenses: IExpense[];
  openDeleteModal: (expense: IExpense) => any;
  theme: IThemeConstants;
}

export class List extends React.Component<IListProps, {}> {
  public render() {
    const { theme } = this.props;
    const { expenses } = this.props;

    if (!expenses || !expenses.length) {
      return <View style={styles(theme).rootViewEmpty}>
        <Text style={styles(theme).textEmpty}>The expense list is empty.</Text>
        <Text style={styles(theme).textEmpty}>Swipe left to add your first expense.</Text>
        <View style={styles(theme).iconEmpty}>
          <Icon name="not-interested" size={30} color={theme.textMainColor} />
        </View>
      </View>
    }

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
      keyExtractor={(item, index) => item.id + index}
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
    paddingTop: 20
  },
  rootViewEmpty: {
    paddingTop: 40,
    paddingHorizontal: 30,
    width: '100%'
  },
  textEmpty: {
    ...textStyleBase(theme),
    textAlign: 'center',
    marginBottom: 20
  },
  iconEmpty: {
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
