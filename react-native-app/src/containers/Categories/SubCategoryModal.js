import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const SubCategoryModal = ({ category, onPickSubCategory, open, onClose }) => {
  const items = (category || {}).subCategories;

  if (!items || !items.length || !open) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={!!items && open}
    >
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <TouchableHighlight onPress={onClose}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={36}
              color="#666"
            />
          </TouchableHighlight>
        </View>
        {
          items.map((item, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => onPickSubCategory(item)}
              style={styles.buttonContainer}
            >
              <View style={getButtonStyle(category.color)}>
                <Text style={styles.buttonText}>{item}</Text>
              </View>
            </TouchableHighlight>
          ))
        }
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 30,
    flexWrap: 'wrap',
    backgroundColor: '#F1F5F5'
  },
  backButtonContainer: {
    width: '90%',
    paddingBottom: 15,
    marginHorizontal: 15
  },
  buttonContainer: {
    height: 90,
    width: '50%'
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'lato-regular'
  }
});

const getButtonStyle = (bgColor) => ({
  flex: 1,
  height: 90,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  margin: 15,
  borderRadius: 10,
  backgroundColor: bgColor
});
