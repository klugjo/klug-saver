import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IExpense } from '../../../typings';
import { sum, formatAmount } from '../../../util';
import { getTheme } from '../../../theme/utils';
import { textStyleHeader, textStyleBase } from '../../../theme/styles';

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
    backgroundColor: getTheme().backgroundMainColor,
    paddingBottom: 3,
    paddingRight: 16,
    paddingTop: 15
  },
  headerRowText: {
    ...textStyleBase,
    marginLeft: 23
  },
  headerAmountText: {
    ...textStyleBase,
    flexGrow: 1,
    textAlign: 'right'
  }
});

