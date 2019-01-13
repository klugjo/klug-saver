import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTheme } from '../../../theme/utils';
import { ICategory } from '../../../typings';

export interface ICategoryFilterHeaderProps {
  filter?: ICategory;
  onReset: () => void
};

export const CategoryFilterHeader = ({ filter, onReset }: ICategoryFilterHeaderProps) => {
  if (!filter) {
    return null;
  }

  return <View style={[styles.root, { backgroundColor: filter.color }]}>
    <TouchableHighlight onPress={onReset}>
      <Icon name="close" size={20} color={getTheme().backgroundMainColor} />
    </TouchableHighlight>
    <Text style={styles.text}>{filter.title}</Text>
  </View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 6
  },
  text: {
    fontSize: 17,
    fontFamily: getTheme().fontMain,
    color: getTheme().backgroundMainColor,
    marginLeft: 15
  }
});