import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTheme } from '../../../theme/utils';

export interface ICategoryFilterHeaderProps {
  filter?: string;
  onReset: () => void;
};

export const CategoryFilterHeader = ({ filter, onReset }: ICategoryFilterHeaderProps) => {
  if (!filter) {
    return null;
  }

  return <View style={styles.root}>
    <TouchableHighlight onPress={onReset}>
      <View style={styles.tag}>
        <Icon name="close" size={20} color={getTheme().textMainColor} />
        <Text style={styles.text}>{filter}</Text>
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
    paddingLeft: 15,
    paddingRight: 20,
    paddingVertical: 6,
    marginLeft: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: getTheme().underlayColor
  },
  text: {
    fontSize: 17,
    fontFamily: getTheme().fontMain,
    color: getTheme().textMainColor,
    marginLeft: 15
  }
});