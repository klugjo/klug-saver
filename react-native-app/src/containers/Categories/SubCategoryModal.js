import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableHighlight } from 'react-native';

export const SubCategoryModal = ({ category, onPickSubCategory, open }) => {
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
        {
          items.map((item, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => onPickSubCategory(item)}
              style={{
                height: 90,
                width: '50%'
              }}
            >
            <View
              style={{
                backgroundColor: category.color,
                flex: 1,
                height: 90,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                margin: 15,
                borderRadius: 10
              }}
            >
              <Text style={{ color: '#FFF', fontFamily: 'lato-regular' }}>{item}</Text>
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
    paddingTop: 60,
    flexWrap: 'wrap',
    backgroundColor: '#F1F5F5'
  }
});
