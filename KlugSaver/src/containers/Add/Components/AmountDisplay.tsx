import React from 'react';
import numeral from 'numeral';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { formatAmount } from '../../../util';
import { ICurrency, IThemeConstants } from '../../../typings';

export interface IAmountDisplayProps {
  amount?: string;
  currency: ICurrency;
  onCurrencyPickerOpen: () => void;
}

const getFontSize = (amountText?: string) => {
  const amount = numeral(amountText).value();

  if (amount < 10000000) {
    return 45;
  } else {
    return 25;
  }
};

const AmountDisplay = ({ amount, currency, onCurrencyPickerOpen }: IAmountDisplayProps, theme: IThemeConstants) => {
  return <View style={styles(theme).amountContainer}>
    <TouchableHighlight
      style={styles(theme).currencyButton}
      onPress={onCurrencyPickerOpen}
      underlayColor={theme.underlayColor}
    >
      <Text style={styles(theme).currency}>{currency.code}</Text>
    </TouchableHighlight>
    <Text style={[styles(theme).amountText, { fontSize: getFontSize(amount) }]}>
      {formatAmount(amount || 0)}
    </Text>
  </View>;
}

export default AmountDisplay;

const styles = (theme: IThemeConstants) => StyleSheet.create({
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    backgroundColor: theme.backgroundMainColor,
    marginHorizontal: 15
  },
  amountText: {
    color: theme.textMainColor,
    fontFamily: theme.fontMain
  },
  currencyButton: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20
  },
  currency: {
    fontSize: 20,
    color: theme.textSecondaryColor,
    fontFamily: theme.fontMain
  }
});
