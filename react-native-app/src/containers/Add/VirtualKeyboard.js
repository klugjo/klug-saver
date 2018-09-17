import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

const VirtualKeyboard = ({
  addChar,
  deleteChar,
  addDecimal
}) => (
    <View style={styles.keyboardRoot}>
      <View style={styles.keyboardLine}>
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="1"
          onPress={addChar('1')}
        />
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="2"
          onPress={addChar('2')}
        />
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="3"
          onPress={addChar('3')}
        />
      </View>
      <View style={styles.keyboardLine}>
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="4"
          onPress={addChar('4')}
        />
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="5"
          onPress={addChar('5')}
        />
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="6"
          onPress={addChar('6')}
        />
      </View>
      <View style={styles.keyboardLine}>
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="7"
          onPress={addChar('7')}
        />
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="8"
          onPress={addChar('8')}
        />
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="9"
          onPress={addChar('9')}
        />
      </View>
      <View style={styles.keyboardLine}>
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="."
          onPress={addDecimal}
        />
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="0"
          onPress={addChar('0')}
        />
        <Button
          color="#D1EAEB"
          buttonStyle={styles.keyboardButton}
          title="<"
          onPress={deleteChar}
        />
      </View>
    </View>
  );

const styles = StyleSheet.create({
  keyboardRoot: {
    flexDirection: 'column',
    flex: 0.6
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
