import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { ICurrency } from '../../../typings';

export interface IMetatdataProps {
  Currency: ICurrency;
};

export const Metatdata = ({ prop }: IMetatdataProps) => {
  return <TouchableHighlight style={styles.root}>
    <View>
      
    </View>
  </TouchableHighlight>;
};

const styles = StyleSheet.create({
  root: {
    
  }
});
