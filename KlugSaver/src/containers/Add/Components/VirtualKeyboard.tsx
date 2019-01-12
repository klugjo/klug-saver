import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { getTheme } from '../../../theme/utils';
import { KSButton } from '../../../components';

export interface IVirtualKeyboardProps {
  addChar: (char: string) => () => void;
  deleteChar: () => void;
  addDecimal: () => void;
}

const renderButton = (digit: string, onPress: () => void) => (
  <KSButton
    onPress={onPress}
    text={digit}
    containerStyle={styles.keyboardKey}
  />
);

const VirtualKeyboard = ({
  addChar,
  deleteChar,
  addDecimal
}: IVirtualKeyboardProps) => (
    <View style={styles.keyboardRoot}>
      <View style={styles.keyboardLine}>
        {renderButton('1', addChar('1'))}
        {renderButton('2', addChar('2'))}
        {renderButton('3', addChar('3'))}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('4', addChar('4'))}
        {renderButton('5', addChar('5'))}
        {renderButton('6', addChar('6'))}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('7', addChar('7'))}
        {renderButton('8', addChar('8'))}
        {renderButton('9', addChar('9'))}
      </View>
      <View style={styles.keyboardLine}>
        {renderButton('.', addDecimal)}
        {renderButton('0', addChar('0'))}
        {renderButton('<', deleteChar)}
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
    flexGrow: 1,
    marginHorizontal: 10
  }
});

export default VirtualKeyboard;
