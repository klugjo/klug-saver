import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import ThemeContext from '../theme/ThemeContext';
import { IThemeConstants } from '../typings';

interface IKSButtonProps {
  onPress: () => void;
  text: string;
  containerStyle?: any;
  textStyle?: any;
}

export const KSButton = ({ onPress, text, textStyle, containerStyle }: IKSButtonProps, context: IThemeConstants) => {
  return <TouchableHighlight
    style={[styles(context).root, containerStyle]}
    onPress={onPress}
    underlayColor={context.underlayColor}
  >
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableHighlight>
};

KSButton.contextType = ThemeContext;

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