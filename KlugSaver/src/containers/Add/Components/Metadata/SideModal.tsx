import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { KSModal } from '../../../../components/KSModal';
import { SideEnum } from '../../../../typings';
import { getTheme } from '../../../../theme/utils';
import { textStyleHeader } from '../../../../theme/styles';


export interface ISideModalProps {
  open: boolean;
  close: () => void;
  onSideChange: (side: SideEnum) => void;
  side: SideEnum;
};

export const SideModal = ({ open, close, side, onSideChange }: ISideModalProps) => {
  const isCredit = side === SideEnum.Credit;
  const isDebit = side === SideEnum.Debit;

  return (
    <KSModal
      open={open}
      close={close}
      title="Change Expense Side"
    >
      <View style={styles.root}>
        <View style={styles.buttonGroup}>
          <TouchableHighlight
            style={[styles.button, styles.buttonLeft, isDebit && styles.selectedView]}
            onPress={() => onSideChange(SideEnum.Debit)}
            underlayColor={getTheme().accentMainColor}
          >
            <View style={styles.textContainer}>
              <Icon
                name="arrow-bottom-right-bold-outline"
                size={25}
                color={isDebit ? getTheme().backgroundMainColor : getTheme().textMainColor}
              />
              <Text style={[styles.text, isDebit && styles.selectedText]}>Expense</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.buttonRight, isCredit && styles.selectedView]}
            onPress={() => onSideChange(SideEnum.Credit)}
            underlayColor={getTheme().accentMainColor}
          >
            <View style={styles.textContainer}>
              <Icon
                name="arrow-top-right-bold-outline"
                size={25}
                color={isCredit ? getTheme().backgroundMainColor : getTheme().textMainColor}
              />
              <Text style={[styles.text, isCredit && styles.selectedText]}>Income</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </KSModal>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: 20
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
    height: 60
  },
  button: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLeft: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  buttonRight: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  selectedView: {
    backgroundColor: getTheme().accentMainColor
  },
  selectedText: {
    color: getTheme().backgroundMainColor
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginLeft: 15,
    ...textStyleHeader
  }
});
