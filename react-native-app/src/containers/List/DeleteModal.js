import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

export const DeleteModal = ({ item, onCancel, onOK }) => {
  if (!item) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={!!item}
      onRequestClose={onCancel}>
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.messageText}>
            {item.category} - {item.subCategory}
          </Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.messageText}>
            SGD {item.amount}
          </Text>
        </View>

        <View style={styles.buttons}>
          <Button
            title="Delete"
            fontFamily="lato-thin"
            color="#000"
            underlayColor="#666"
            buttonStyle={styles.button}
            onPress={onOK}
          />
          <Button
            buttonStyle={styles.button}
            title="Cancel"
            onPress={onCancel}
            fontFamily="lato-thin"
            color="#000"
            underlayColor="#666"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F1F5F5'
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'lato-thin'
  },
  buttons: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: '#F1F5F5'  
  }
});
