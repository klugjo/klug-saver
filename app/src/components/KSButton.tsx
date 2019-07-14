import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { withTheme } from '../containers/ThemeProvider/withTheme';
import { IThemeConstants } from '../typings';

export interface IKSButtonProps {
  onPress: () => void;
  text: string;
  containerStyle?: any;
  textStyle?: any;
  theme: IThemeConstants;
}

export const KSButtonBase = ({ onPress, text, textStyle, containerStyle, theme }: IKSButtonProps) => {
  return <TouchableHighlight
    style={[styles(theme).root, containerStyle]}
    onPress={onPress}
    underlayColor={theme.underlayColor}
  >
    <Text style={[styles(theme).text, textStyle]}>{text}</Text>
  </TouchableHighlight>
};

export const KSButton = withTheme(KSButtonBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  text: {
    fontFamily: theme.fontThin,
    fontSize: 20,
    color: theme.textMainColor
  }
});