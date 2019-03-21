import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from '../containers/ThemeProvider/withTheme';
import { textStyleBase } from '../theme/styles';
import { IThemeConstants } from '../typings';

export interface IKSCardProps {
  text: string;
  children?: ReactNode;
  theme: IThemeConstants;
};

const KSCardBase = ({ text, children, theme }: IKSCardProps) => {
  return <View style={styles(theme).card}>
    <Text style={styles(theme).title}>{text}</Text>
    {children}
  </View>;
};

export const KSCard = withTheme(KSCardBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: theme.backgroundMainColor,
  },
  title: {
    ...textStyleBase(theme),
    fontSize: 16
  }
});