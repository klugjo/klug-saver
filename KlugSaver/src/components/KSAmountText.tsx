import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { withTheme } from '../containers/ThemeProvider/withTheme';
import { IThemeConstants } from '../typings';
import { formatAmount } from '../util';

export interface IKSAmountTextProps {
  amount: number;
  textStyle?: any;
  theme: IThemeConstants;
};

export const KSAmountTextBase = ({ amount, textStyle, theme }: IKSAmountTextProps) => {
  let amountToDisplay: string = formatAmount(amount);
  const style = [textStyle];

  if (amount < 0) {
    amountToDisplay = `+ ${formatAmount(amount * (-1))}`;
    style.push(styles(theme).incomeText);
  }

  return <Text style={style}>
    {amountToDisplay}
  </Text>;
};

export const KSAmountText = withTheme(KSAmountTextBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  incomeText: {
    color: theme.accentMainColor
  }
});
