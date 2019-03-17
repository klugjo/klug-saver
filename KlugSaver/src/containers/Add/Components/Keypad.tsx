import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KSButton } from '../../../components';
import { IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';
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
  theme: IThemeConstants
};

const renderButton = (digit: string, onPress: () => void, theme: IThemeConstants) => (
  <KSButton
    onPress={onPress}
    text={digit}
    containerStyle={styles(theme).keyboardKey}
    textStyle={styles(theme).keyboardKeyText}
  />
);

const renderIcon = (icon: string, color: string, onPress: () => void, theme: IThemeConstants) => (
  <TouchableHighlight onPress={onPress} style={styles(theme).iconButton} underlayColor={theme.underlayColor}>
    <Icon name={icon} size={20} color={color} />
  </TouchableHighlight>
);

const VirtualKeyboardBase = ({
  addChar,
  deleteChar,
  addDecimal,
  openModal,
  reset,
  isDateSet,
  isCommentSet,
  isSideExpense,
  theme
}: IVirtualKeyboardProps) => {
  const dateIconColor = isDateSet ? theme.accentMainColor : theme.textMainColor;
  const commentIconColor = isCommentSet ? theme.accentMainColor : theme.textMainColor;
  const sideIcon = isSideExpense ? 'arrow-bottom-right-bold-outline' : 'arrow-top-right-bold-outline';
  const sideIconColor = isSideExpense ? theme.textMainColor : theme.accentMainColor;

  return (
    <View style={styles(theme).keyboardRoot}>
      <View style={styles(theme).keyboardLine}>
        {renderButton('1', addChar('1'), theme)}
        {renderButton('2', addChar('2'), theme)}
        {renderButton('3', addChar('3'), theme)}
        {renderButton('AC', reset, theme)}
      </View>
      <View style={styles(theme).keyboardLine}>
        {renderButton('4', addChar('4'), theme)}
        {renderButton('5', addChar('5'), theme)}
        {renderButton('6', addChar('6'), theme)}
        {renderIcon('calendar-text', dateIconColor, openModal(openModalEnum.date), theme)}
      </View>
      <View style={styles(theme).keyboardLine}>
        {renderButton('7', addChar('7'), theme)}
        {renderButton('8', addChar('8'), theme)}
        {renderButton('9', addChar('9'), theme)}
        {renderIcon('comment-text-outline', commentIconColor, openModal(openModalEnum.comments), theme)}
      </View>
      <View style={styles(theme).keyboardLine}>
        {renderButton('.', addDecimal, theme)}
        {renderButton('0', addChar('0'), theme)}
        {renderIcon('backspace', theme.textMainColor, deleteChar, theme)}
        {renderIcon(sideIcon, sideIconColor, openModal(openModalEnum.side), theme)}
      </View>
    </View>
  )
};

export const VirtualKeyboard = withTheme(VirtualKeyboardBase);

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
