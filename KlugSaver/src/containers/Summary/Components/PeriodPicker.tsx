import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import { PeriodFilterType } from '../Root';
import { getTheme } from '../../../theme/utils';
import { unitOfTime } from 'moment';

export interface IPeriodPickerProps {
  currentFilterType: unitOfTime.StartOf;
  onCurrentFilterChange: (filter: PeriodFilterType) => void;
};

const getFilterStyles = (selected: boolean) => [
  styles.period,
  {
    borderColor: selected ?
      theme.accentMainColor :
      theme.backgroundMainColor
  }
];

export const PeriodPicker = ({ currentFilterType, onCurrentFilterChange }: IPeriodPickerProps) => {
  return <View style={styles.root}>
    <TouchableHighlight
      style={getFilterStyles(currentFilterType === 'year')}
      onPress={() => onCurrentFilterChange('year')}
    >
      <Text style={styles.text}>Year</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={getFilterStyles(currentFilterType === 'month')}
      onPress={() => onCurrentFilterChange('month')}
    >
      <Text style={styles.text}>Month</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={getFilterStyles(currentFilterType === 'week')}
      onPress={() => onCurrentFilterChange('week')}
    >
      <Text style={styles.text}>Week</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={getFilterStyles(currentFilterType === 'day')}
      onPress={() => onCurrentFilterChange('day')}
    >
      <Text style={styles.text}>Day</Text>
    </TouchableHighlight>
  </View>;
};

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: theme.underlayColor,
    borderBottomWidth: 1,
    marginVertical: 20
  },
  period: {
    paddingVertical: 10,
    borderBottomWidth: 2
  },
  text: {
    color: theme.textMainColor
  }
});
