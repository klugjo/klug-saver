import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { textStyleBase } from '../theme/styles';
import { IThemeConstants } from '../typings';

export interface IKSCardProps {
  text: string;
  children?: ReactNode;
};

export const KSCard = ({ text, children }: IKSCardProps, theme: IThemeConstants) => {
  return <View style={styles(theme).card}>
    <Text style={styles(theme).title}>{text}</Text>
    {children}
  </View>;
};

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