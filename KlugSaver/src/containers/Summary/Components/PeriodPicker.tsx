import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PeriodFilterType } from '../Root';
import { getTheme } from '../../../theme/utils';

export interface IPeriodPickerProps {
  currentFilterType: PeriodFilterType;
  onCurrentFilterChange: (filter: PeriodFilterType) => void;
};

const getFilterStyles = (selected: boolean) => [
  styles.period,
  {
    borderColor: selected ?
      getTheme().accentMainColor :
      getTheme().backgroundMainColor
  }
];

export const PeriodPicker = ({ currentFilterType, onCurrentFilterChange }: IPeriodPickerProps) => {
  return <View style={styles.root}>
    <View style={getFilterStyles(currentFilterType === 'year')}>
      <Text>Year</Text>
    </View>
    <View style={getFilterStyles(currentFilterType === 'month')}>
      <Text>Month</Text>
    </View>
    <View style={getFilterStyles(currentFilterType === 'week')}>
      <Text>Week</Text>
    </View>
    <View style={getFilterStyles(currentFilterType === 'day')}>
      <Text>Day</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: getTheme().underlayColor,
    borderBottomWidth: 1,
    marginVertical: 20
  },
  period: {
    paddingVertical: 10,
    borderBottomWidth: 2
  }
});