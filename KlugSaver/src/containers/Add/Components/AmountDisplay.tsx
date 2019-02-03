import React from 'react';
import numeral from 'numeral';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { formatAmount } from '../../../util';
import { getTheme } from '../../../theme/utils';
import { ICurrency } from '../../../typings';
import { dropShadow } from '../../../theme/styles';

export interface IAmountDisplayProps {
  amount?: string;
  currency: ICurrency;
  onCurrencyPickerOpen: () => void;
}

const getFontSize = (amountText?: string) => {
  const amount = numeral(amountText).value();

  if (amount < 10000000) {
    return 40;
  } else {
    return 25;
  }
};

const AmountDisplay = ({ amount, currency, onCurrencyPickerOpen }: IAmountDisplayProps) => {
  return <View style={styles.amountContainer}>
    <TouchableHighlight
      style={styles.currencyButton}
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
    alignItems: 'center',
    height: 80,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    marginHorizontal: 15
  },
  amountText: {
    color: getTheme().textMainColor
  },
  currencyButton: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20
  },
  currency: {
    fontSize: 20,
    color: getTheme().textSecondaryColor
  }
});
