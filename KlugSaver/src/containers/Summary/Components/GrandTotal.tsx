import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { IExpense } from '../../../typings';
import { sum, formatAmount, toddMMM } from '../../../util';
import { textStyleHeader, textStyleThin } from '../../../theme/styles';
import { getTheme } from '../../../theme/utils';

export interface IGrandTotalProps {
  expenses: IExpense[];
  label: string;
  isBeforeHidden: boolean;
  isNextHidden: boolean;
  onBefore: () => void;
  onNext: () => void;
};

export const GrandTotal = ({ expenses, label, isBeforeHidden, isNextHidden, onBefore, onNext }: IGrandTotalProps) => {
  const total = sum(expenses, (t: IExpense) => t.amount);

  return <View style={styles.root}>
    {
      isBeforeHidden ?
        <View style={styles.arrowButton} /> :
        <TouchableHighlight style={styles.arrowButton} onPress={onBefore} underlayColor={theme.underlayColor}>
          <Icon name="navigate-before" size={30} color={theme.textSecondaryColor} />
        </TouchableHighlight>
    }
    <View style={styles.amountView}>
      <Text style={styles.amountText}>
        {formatAmount(total)}
      </Text>
      <Text style={styles.datesText}>
        {label}
      </Text>
    </View>
    {
      isNextHidden ?
        <View style={styles.arrowButton} /> :
        <TouchableHighlight style={styles.arrowButton} onPress={onNext} underlayColor={theme.underlayColor}>
          <Icon name="navigate-next" size={30} color={theme.textSecondaryColor} />
        </TouchableHighlight>
    }
  </View>;
};

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  amountView: {
    flex: 0.6
  },
  amountText: {
    ...textStyleHeader,
    textAlign: 'center',
    marginBottom: 10
  },
  datesText: {
    ...textStyleThin,
    textAlign: 'center'
  }
});
