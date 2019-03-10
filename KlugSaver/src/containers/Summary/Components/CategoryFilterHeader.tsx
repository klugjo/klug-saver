import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IThemeConstants } from '../../../typings';

export interface ICategoryFilterHeaderProps {
  filter?: string;
  onReset: () => void;
};

export const CategoryFilterHeader = ({ filter, onReset }: ICategoryFilterHeaderProps, theme: IThemeConstants) => {
  if (!filter) {
    return null;
  }

  return <View style={styles(theme).root}>
    <TouchableHighlight onPress={onReset}>
      <View style={styles(theme).tag}>
        <Icon name="close" size={20} color={theme.textMainColor} />
        <Text style={styles(theme).text}>{filter}</Text>
      </View>
    </TouchableHighlight>
  </View>;
};

const styles = (theme: IThemeConstants) => StyleSheet.create({
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
    borderColor: theme.underlayColor
  },
  text: {
    fontSize: 17,
    fontFamily: theme.fontMain,
    color: theme.textMainColor,
    marginLeft: 15
  }
});