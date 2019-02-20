import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getTheme } from '../theme/utils';
import { textStyleBase } from '../theme/styles';

export interface IKSCardProps {
  text: string;
  children?: ReactNode;
};

export const KSCard = ({ text, children }: IKSCardProps) => {
  return <View style={styles.card}>
    <Text style={styles.title}>{text}</Text>
    {children}
  </View>;
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: getTheme().backgroundMainColor,
  },
  title: {
    ...textStyleBase,
    fontSize: 16
  }
});