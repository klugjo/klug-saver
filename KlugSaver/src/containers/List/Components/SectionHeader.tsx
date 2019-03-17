import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KSAmountText } from '../../../components/KSAmountText';
import { textStyleBase } from '../../../theme/styles';
import { withTheme } from '../../../theme/withTheme';
import { IExpense, IThemeConstants } from '../../../typings';
import { sum } from '../../../util';

export interface ISectionHeaderProps {
  section: {
    title: string;
    data: any[];
  };
  theme: IThemeConstants;
}

const SectionHeader = ({ section, theme }: ISectionHeaderProps) => (
  <View style={styles(theme).headerRowView}>
    <Text style={styles(theme).headerRowText}>
      {section.title}
    </Text>
    <KSAmountText
      textStyle={styles(theme).headerAmountText}
      amount={sum(section.data, (d: IExpense) => d.amount)}
    />
  </View>
);

export default withTheme(SectionHeader);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  headerRowView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.backgroundMainColor,
    paddingBottom: 3,
    paddingRight: 16,
    paddingTop: 15
  },
  headerRowText: {
    ...textStyleBase(theme),
    marginLeft: 23
  },
  headerAmountText: {
    ...textStyleBase(theme),
    flexGrow: 1,
    textAlign: 'right'
  }
});

