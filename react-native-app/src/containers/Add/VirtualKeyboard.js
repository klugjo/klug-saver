import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const renderButton = (digit, onPress) => (
  <Button
    color="#D1EAEB"
    buttonStyle={styles.keyboardButton}
    title={digit}
    onPress={onPress}
  />
);

const VirtualKeyboard = ({
  addChar,
  deleteChar,
  addDecimal
}) => (
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
  keyboardButton: {
    width: 100,
    backgroundColor: `#003249`,
  }
});

export default VirtualKeyboard;
