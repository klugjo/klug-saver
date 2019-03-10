import { unitOfTime } from 'moment';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { IThemeConstants } from '../../../typings';
import { PeriodFilterType } from '../Root';


export interface IPeriodPickerProps {
  currentFilterType: unitOfTime.StartOf;
  onCurrentFilterChange: (filter: PeriodFilterType) => void;
};

const getFilterStyles = (selected: boolean, theme: IThemeConstants) => [
  styles(theme).period,
  {
    borderColor: selected ?
      theme.accentMainColor :
      theme.backgroundMainColor
  }
];

export const PeriodPicker = ({ currentFilterType, onCurrentFilterChange }: IPeriodPickerProps, theme: IThemeConstants) => {
  return <View style={styles(theme).root}>
    <TouchableHighlight
      style={getFilterStyles(currentFilterType === 'year', theme)}
      onPress={() => onCurrentFilterChange('year')}
    >
      <Text style={styles(theme).text}>Year</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={getFilterStyles(currentFilterType === 'month', theme)}
      onPress={() => onCurrentFilterChange('month')}
    >
      <Text style={styles(theme).text}>Month</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={getFilterStyles(currentFilterType === 'week', theme)}
      onPress={() => onCurrentFilterChange('week')}
    >
      <Text style={styles(theme).text}>Week</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={getFilterStyles(currentFilterType === 'day', theme)}
      onPress={() => onCurrentFilterChange('day')}
    >
      <Text style={styles(theme).text}>Day</Text>
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
