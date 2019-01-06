import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IExpense } from '../../../typings';
import { sum, formatAmount } from '../../../util';
import { getTheme } from '../../../theme/utils';
import { textStyleHeader } from '../../../theme/styles';

export interface ISectionHeaderProps {
  section: {
    title: string;
    data: any[];
  }
}

const SectionHeader = ({ section }: ISectionHeaderProps) => (
  <View style={styles.headerRowView}>
    <Text style={styles.headerRowText}>
      {section.title}
    </Text>
    <Text style={styles.headerAmountText}>
      {formatAmount(sum(section.data, (d: IExpense) => d.amount))}
    </Text>
  </View>
);

export default SectionHeader;

const styles = StyleSheet.create({
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
  }
});

