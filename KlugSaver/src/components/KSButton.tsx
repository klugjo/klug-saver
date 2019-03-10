import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { IThemeConstants } from '../typings';

interface IKSButtonProps {
  onPress: () => void;
  text: string;
  containerStyle?: any;
  textStyle?: any;
}

export const KSButton = ({ onPress, text, textStyle, containerStyle }: IKSButtonProps, theme: IThemeConstants) => {
  return <TouchableHighlight
    style={[styles(theme).root, containerStyle]}
    onPress={onPress}
    underlayColor={theme.underlayColor}
  >
    <Text style={[styles(theme).text, textStyle]}>{text}</Text>
  </TouchableHighlight>
};

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