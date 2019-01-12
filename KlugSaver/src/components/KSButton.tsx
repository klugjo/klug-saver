import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { getTheme } from '../theme/utils';

interface IKSButtonProps {
  onPress: () => void;
  text: string;
  containerStyle?: any;
  textStyle?: any;
}

export const KSButton = ({ onPress, text, textStyle, containerStyle }: IKSButtonProps) => {
  return <TouchableHighlight
    style={[styles.root, containerStyle]}
    onPress={onPress}
    underlayColor={getTheme().underlayColor}
  >
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableHighlight>
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  text: {
    fontFamily: getTheme().fontThin,
    fontSize: 18
  }
});