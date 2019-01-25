import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { ICategory } from '../../../../typings';
import { getTheme } from '../../../../theme/utils';
import { KSModal } from '../../../../components/KSModal';

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
    <KSModal
      open={open}
      title={category!.title}
      close={onClose}
    >
      <View style={styles.root}>
        {
          items.map((item, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => onPickSubCategory(item)}
              style={styles.buttonContainer}
              underlayColor={getTheme().backgroundMainColor}
            >
              <View style={[styles.buttonStyle, { backgroundColor: category!.color }]}>
                <Text style={styles.buttonText}>{item}</Text>
              </View>
            </TouchableHighlight>
          ))
        }
      </View>
    </KSModal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  buttonContainer: {
    height: 90,
    width: '50%'
  },
  buttonText: {
    color: getTheme().backgroundMainColor
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
