import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withTheme } from '../containers/ThemeProvider/withTheme';
import { textStyleBase } from '../theme/styles';
import { IThemeConstants } from '../typings';

interface IKSRadioButtonsItem {
  selected: boolean;
  icon?: string;
  text: string;
  onPress: () => void;
}

export interface IKSRadioButtonsProps {
  items: IKSRadioButtonsItem[];
  theme: IThemeConstants;
};

export const KSRadioButtonsBase = ({ items, theme }: IKSRadioButtonsProps) => {
  return <View style={styles(theme).radioButtons}>
    {items.map((item: IKSRadioButtonsItem, index: number) => (
      <TouchableHighlight
        key={index}
        style={[styles(theme).radioButton, item.selected ? styles(theme).buttonSelected : null]}
        onPress={item.onPress}
        underlayColor={theme.accentMainColor}
      >
        <React.Fragment>
          {item.icon && <Icon name={item.icon} size={30} color={item.selected ? theme.backgroundMainColor : theme.textMainColor} />}
          <Text style={[styles(theme).radioText, item.selected ? styles(theme).textSelected : null]}>{item.text}</Text>
        </React.Fragment>
      </TouchableHighlight>
    ))}
  </View>;
};

export const KSRadioButtons = withTheme(KSRadioButtonsBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: theme.underlayColor
  },
  radioButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 1
  },
  buttonSelected: {
    backgroundColor: theme.accentMainColor
  },
  textSelected: {
    color: theme.backgroundMainColor
  },
  radioText: {
    ...textStyleBase(theme),
    color: theme.textMainColor
  },
});