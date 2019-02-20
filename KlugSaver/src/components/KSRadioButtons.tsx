import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTheme } from '../theme/utils';
import { textStyleBase } from '../theme/styles';

interface IKSRadioButtonsItem {
  selected: boolean;
  icon?: string;
  text: string;
  onPress: () => void;
}

export interface IKSRadioButtonsProps {
  items: IKSRadioButtonsItem[];
};

export const KSRadioButtons = ({ items }: IKSRadioButtonsProps) => {
  return <View style={styles.radioButtons}>
    {items.map((item: IKSRadioButtonsItem, index: number) => (
      <TouchableHighlight
        key={index}
        style={[styles.radioButton, item.selected ? styles.buttonSelected : null]}
        onPress={item.onPress}
        underlayColor={getTheme().accentMainColor}
      >
        <React.Fragment>
          {item.icon && <Icon name={item.icon} size={30} color={item.selected ? getTheme().backgroundMainColor : getTheme().textMainColor} />}
          <Text style={[styles.radioText, item.selected ? styles.textSelected : null]}>{item.text}</Text>
        </React.Fragment>
      </TouchableHighlight>
    ))}
  </View>;
};

const styles = StyleSheet.create({
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: getTheme().underlayColor
  },
  radioButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 1
  },
  buttonSelected: {
    backgroundColor: getTheme().accentMainColor
  },
  textSelected: {
    color: getTheme().backgroundMainColor
  },
  radioText: {
    ...textStyleBase,
    color: getTheme().textMainColor
  },
});