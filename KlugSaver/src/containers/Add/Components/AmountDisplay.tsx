import React from 'react';
import numeral from 'numeral';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { formatAmount } from '../../../util';
import { getTheme } from '../../../theme/utils';
import { ICurrency } from '../../../typings';

export interface IAmountDisplayProps {
  amount?: string;
  currency: ICurrency;
  onCurrencyPickerOpen: () => void;
}

const getFontSize = (amountText?: string) => {
  const amount = numeral(amountText).value();

  if (!amount || amount < 10000) {
    return 60;
  } else if (amount < 10000000) {
    return 40;
  } else {
    return 25;
  }
};

const getCurrencyMarginTop = (amountText?: string) => {
  const amount = numeral(amountText).value();

  if (!amount || amount < 10000) {
    return 10;
  } else if (amount < 10000000) {
    return 5;
  } else {
    return 0;
  }
};

const AmountDisplay = ({ amount, currency, onCurrencyPickerOpen }: IAmountDisplayProps) => {
  return <View style={styles.amountContainer}>
    <TouchableHighlight
      style={[styles.currencyButton, { marginTop: getCurrencyMarginTop(amount) }]}
      onPress={onCurrencyPickerOpen}
      underlayColor={getTheme().underlayColor}
    >
      <Text style={styles.currency}>{currency.code}</Text>
    </TouchableHighlight>
    <Text style={[styles.amountText, { fontSize: getFontSize(amount) }]}>
      {formatAmount(amount || 0)}
    </Text>
  </View>;
}

export default AmountDisplay;

const styles = StyleSheet.create({
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    height: 85
  },
  amountText: {
    color: getTheme().textMainColor
  },
  currencyButton: {
    marginRight: 15
  },
  currency: {
    fontSize: 20,
    color: getTheme().textSecondaryColor
  }
});
