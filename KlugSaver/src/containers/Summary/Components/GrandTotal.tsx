import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { textStyleHeader, textStyleThin } from '../../../theme/styles';
import { withTheme } from '../../../theme/withTheme';
import { IExpense, IThemeConstants } from '../../../typings';
import { formatAmount, sum } from '../../../util';


export interface IGrandTotalProps {
  expenses: IExpense[];
  label: string;
  isBeforeHidden: boolean;
  isNextHidden: boolean;
  onBefore: () => void;
  onNext: () => void;
  theme: IThemeConstants;
};

const GrandTotalBase = ({ expenses, label, isBeforeHidden, isNextHidden, onBefore, onNext, theme }: IGrandTotalProps) => {
  const total = sum(expenses, (t: IExpense) => t.amount);

  return <View style={styles(theme).root}>
    {
      isBeforeHidden ?
        <View style={styles(theme).arrowButton} /> :
        <TouchableHighlight style={styles(theme).arrowButton} onPress={onBefore} underlayColor={theme.underlayColor}>
          <Icon name="navigate-before" size={30} color={theme.textSecondaryColor} />
        </TouchableHighlight>
    }
    <View style={styles(theme).amountView}>
      <Text style={styles(theme).amountText}>
        {formatAmount(total)}
      </Text>
      <Text style={styles(theme).datesText}>
        {label}
      </Text>
    </View>
    {
      isNextHidden ?
        <View style={styles(theme).arrowButton} /> :
        <TouchableHighlight style={styles(theme).arrowButton} onPress={onNext} underlayColor={theme.underlayColor}>
          <Icon name="navigate-next" size={30} color={theme.textSecondaryColor} />
        </TouchableHighlight>
    }
  </View>;
};

export const GrandTotal = withTheme(GrandTotalBase);

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
    ...textStyleHeader(theme),
    textAlign: 'center',
    marginBottom: 10
  },
  datesText: {
    ...textStyleThin(theme),
    textAlign: 'center'
  }
});
