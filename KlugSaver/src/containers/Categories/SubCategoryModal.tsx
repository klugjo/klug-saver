import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableHighlight } from 'react-native';
import { ICategory } from '../../typings';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface ISubCategoryModal {
  category?: ICategory;
  onPickSubCategory: (item: string) => void;
  open: boolean;
  onClose: () => void;
}

export const SubCategoryModal = ({ category, onPickSubCategory, open, onClose }: ISubCategoryModal) => {
  const items = !!category ? category.subCategories : [];

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
          <TouchableHighlight onPress={onClose} underlayColor="#666" style={{}}>
            <Text>X</Text>
          </TouchableHighlight>
          <Text style={{ marginLeft: 30, fontSize: 18, color: '#888', marginBottom: 2 }}>{category!.title}</Text>
        </View>
        {
          items.map((item, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => onPickSubCategory(item)}
              style={styles.buttonContainer}
              underlayColor="#DDD"
            >
              <View style={[styles.buttonStyle, { backgroundColor: category!.color }]}>
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
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1
  },
  buttonContainer: {
    height: 90,
    width: '50%'
  },
  buttonText: {
    color: '#FFF'
  },
  buttonStyle: {
    flex: 1,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    padding: 10
  }
});
