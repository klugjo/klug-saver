import React from 'react';
import numeral from 'numeral';
import { View, Text, StyleSheet } from 'react-native';

import { formatAmount } from '../../../util';
import { getTheme } from '../../../theme/utils';
import { ICurrency } from '../../../typings';

export interface IAmountDisplayProps {
  amount?: string;
  currency: ICurrency;
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

const AmountDisplay = ({ amount, currency }: IAmountDisplayProps) => {
  return <View style={styles.amountContainer}>
    <Text style={[styles.currency, {marginTop: getCurrencyMarginTop(amount)}]}>{currency.code}</Text>
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
    height: 78
  },
  amountText: {
    color: getTheme().textMainColor
  },
  currency: {
    fontSize: 20,
    marginRight: 15,
    color: getTheme().textSecondaryColor
  }
});
