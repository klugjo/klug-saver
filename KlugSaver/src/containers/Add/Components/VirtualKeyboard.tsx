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
  openModal: (modal: openModalEnum) => () => void;
}

const renderButton = (digit: string, onPress: () => void) => (
  <KSButton
    onPress={onPress}
    text={digit}
    containerStyle={styles.keyboardKey}
  />
);

const renderIcon = (icon: string, onPress: () => void) => (
  <TouchableHighlight onPress={onPress} style={styles.iconButton} underlayColor={getTheme().underlayColor}>
    <Icon name={icon} size={18} color={getTheme().textMainColor} />
  </TouchableHighlight>
);

const VirtualKeyboard = ({
  addChar,
  deleteChar,
  addDecimal,
  openModal
}: IVirtualKeyboardProps) => (
    <View style={styles.keyboardRoot}>
      <View style={styles.keyboardLine}>
        {renderButton('1', addChar('1'))}
        {renderButton('2', addChar('2'))}
        {renderButton('3', addChar('3'))}
        {renderIcon('arrow-bottom-right-bold-outline', openModal(openModalEnum.side))}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('4', addChar('4'))}
        {renderButton('5', addChar('5'))}
        {renderButton('6', addChar('6'))}
        {renderIcon('calendar-text', openModal(openModalEnum.date))}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('7', addChar('7'))}
        {renderButton('8', addChar('8'))}
        {renderButton('9', addChar('9'))}
        {renderIcon('comment-text-outline', openModal(openModalEnum.comments))}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('.', addDecimal)}
        {renderButton('0', addChar('0'))}
        {renderButton('<', deleteChar)}
        {renderButton('$', () => {})}
      </View>
    </View>
  );

const styles = StyleSheet.create({
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
