import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { ICurrency } from '../../../../typings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTheme } from '../../../../theme/utils';

export interface IMetatdataProps {
  currency: ICurrency;
  isCustomCurrency: boolean
  isCredit: boolean;
  hasComment: boolean;
  hasCustomDate: boolean;
  openMetadataModal: () => void;
};

const MetadataDisplay = ({
  currency,
  isCustomCurrency,
  isCredit,
  hasComment,
  hasCustomDate,
  openMetadataModal
}: IMetatdataProps) => {
  return <TouchableHighlight onPress={openMetadataModal}>
    <View style={styles.root}>
      <View style={styles.badge}>
        <Text style={[styles.currency, { color: isCustomCurrency ? getTheme().accentMainColor : getTheme().underlayColor }]}>
          {currency.symbol}
        </Text>
      </View>
      <View style={styles.badge}>
        <Icon
          name="cash-usd"
          size={20}
          color={isCredit ? getTheme().accentMainColor : getTheme().underlayColor}
        />
      </View>
      <View style={styles.badge}>
        <Icon
          name={hasCustomDate ? 'calendar-text' : 'calendar-blank'}
          size={20}
          color={hasCustomDate ? getTheme().accentMainColor : getTheme().underlayColor}
        />
      </View>
      <View style={styles.badge}>
        <Icon
          name={hasComment ? 'comment-check-outline' : 'comment-outline'}
          size={20}
          color={hasComment ? getTheme().accentMainColor : getTheme().underlayColor}
        />
      </View>
    </View>
  </TouchableHighlight>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  currency: {
    fontSize: 17,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3F3F3'
  }
});

export default MetadataDisplay;
