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
          <Text style={styles.messageText}>{`
Are you sure you want to delete that item ?

${item.category} - ${item.subCategory} - ${item.amount}
          `}</Text>
        </View>

        <View style={styles.buttons}>
          <Button
            buttonStyle={styles.button}
            title="OK"
            onPress={onOK}
          />
          <Button
            buttonStyle={styles.button}
            title="Cancel"
            onPress={onCancel}
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
    alignItems: 'stretch'
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30
  },
  buttons: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: '#003249'
  }
});
