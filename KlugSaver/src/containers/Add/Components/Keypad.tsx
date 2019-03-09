import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { KSButton } from '../../../components';
import { getTheme } from '../../../theme/utils';
import { openModalEnum } from '../Add';

export interface IVirtualKeyboardProps {
  addChar: (char: string) => () => void;
  deleteChar: () => void;
  addDecimal: () => void;
  reset: () => void;
  openModal: (modal: openModalEnum) => () => void;
  isDateSet: boolean;
  isSideExpense: boolean;
  isCommentSet: boolean;
};

const renderButton = (digit: string, onPress: () => void) => (
  <KSButton
    onPress={onPress}
    text={digit}
    containerStyle={styles.keyboardKey}
    textStyle={styles.keyboardKeyText}
  />
);

const renderIcon = (icon: string, color: string, onPress: () => void) => (
  <TouchableHighlight onPress={onPress} style={styles.iconButton} underlayColor={theme.underlayColor}>
    <Icon name={icon} size={20} color={color} />
  </TouchableHighlight>
);

const VirtualKeyboard = ({
  addChar,
  deleteChar,
  addDecimal,
  openModal,
  reset,
  isDateSet,
  isCommentSet,
  isSideExpense
}: IVirtualKeyboardProps) => {
  const dateIconColor = isDateSet ? theme.accentMainColor : theme.textMainColor;
  const commentIconColor = isCommentSet ? theme.accentMainColor : theme.textMainColor;
  const sideIcon = isSideExpense ? 'arrow-bottom-right-bold-outline' : 'arrow-top-right-bold-outline';
  const sideIconColor = isSideExpense ? theme.textMainColor : theme.accentMainColor;
  
  return (
    <View style={styles.keyboardRoot}>
      <View style={styles.keyboardLine}>
        {renderButton('1', addChar('1'))}
        {renderButton('2', addChar('2'))}
        {renderButton('3', addChar('3'))}
        {renderButton('AC', reset)}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('4', addChar('4'))}
        {renderButton('5', addChar('5'))}
        {renderButton('6', addChar('6'))}
        {renderIcon('calendar-text', dateIconColor, openModal(openModalEnum.date))}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('7', addChar('7'))}
        {renderButton('8', addChar('8'))}
        {renderButton('9', addChar('9'))}
        {renderIcon('comment-text-outline', commentIconColor, openModal(openModalEnum.comments))}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('.', addDecimal)}
        {renderButton('0', addChar('0'))}
        {renderIcon('backspace', theme.textMainColor, deleteChar)}
        {renderIcon(sideIcon, sideIconColor, openModal(openModalEnum.side))}
      </View>
    </View>
  )
};

const styles = (theme: IThemeConstants) => StyleSheet.create({
  keyboardRoot: {
    flexDirection: 'column',
    flex: 1
  },
  keyboardLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  keyboardKey: {
    flexGrow: 0.25,
    marginHorizontal: 10,
    minWidth: 30
  },
  keyboardKeyText: {
    color: theme.textMainColor
  },
  iconButton: {
    flex: 0.25,
    minWidth: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10
  }
});

export default VirtualKeyboard;
