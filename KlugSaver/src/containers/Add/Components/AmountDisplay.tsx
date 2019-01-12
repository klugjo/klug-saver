import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { formatAmount } from '../../../util';
import { getTheme } from '../../../theme/utils';

export interface IAmountDisplayProps {
  amount?: string;
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

const AmountDisplay = ({ amount }: IAmountDisplayProps) => {
  return <View style={styles.amountContainer}>
    <Text style={styles.currency}>SGD</Text>
    <View style={styles.amountInput}>
      <Text style={[styles.amountText, { fontSize: getFontSize(amount) }]}>
        {formatAmount(amount || 0)}
      </Text>
    </View>
  </View>;
}

export default AmountDisplay;

const styles = StyleSheet.create({
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10
  },
  amountText: {
    color: getTheme().textMain
  },
  currency: {
    fontSize: 20,
    marginTop: 10,
    marginRight: 15,
    color: getTheme().textSecondary
  },
  amountInput: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  }
});
