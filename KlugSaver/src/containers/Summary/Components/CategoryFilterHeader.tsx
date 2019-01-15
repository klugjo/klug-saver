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

  return <View style={styles.root}>
    <TouchableHighlight onPress={onReset}>
      <View style={[styles.tag, { backgroundColor: filter.color }]}>
        <View>
          <Icon name="close" size={20} color={getTheme().backgroundMainColor} />
        </View>
        <Text style={styles.text}>{filter.title}</Text>
      </View>
    </TouchableHighlight>
  </View>;
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginLeft: 15,
    borderRadius: 10
  },
  text: {
    fontSize: 17,
    fontFamily: getTheme().fontMain,
    color: getTheme().backgroundMainColor,
    marginLeft: 15
  }
});