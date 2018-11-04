import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableHighlight } from 'react-native';

export const SubCategoryModal = ({ items, onPickSubCategory, open }) => {
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
        {
          items.map((item, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => onPickSubCategory(item)}
              style={{
                height: 60
              }}
            >
              <Text
                style={{
                  backgroundColor: '#003249',
                  height: 50,
                  paddingTop: 15,
                  color: 'white',
                  paddingLeft: 30
                }}
              >{item}
              </Text>
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 60
  }
});
