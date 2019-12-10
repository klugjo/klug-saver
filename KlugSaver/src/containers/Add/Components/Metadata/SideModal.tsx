import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KSModal } from '../../../../components/KSModal';
import { textStyleHeader } from '../../../../theme/styles';
import { IThemeConstants, SideEnum } from '../../../../typings';
import { withTheme } from '../../../ThemeProvider/withTheme';

export interface ISideModalProps {
  open: boolean;
  close: () => void;
  onSideChange: (side: SideEnum) => void;
  side: SideEnum;
  theme: IThemeConstants;
};

const SideModalBase = ({ open, close, side, onSideChange, theme }: ISideModalProps) => {
  const isCredit = side === SideEnum.Income;
  const isDebit = side === SideEnum.Expense;

  return (
    <KSModal
      open={open}
      close={close}
      title="Change Expense Side"
    >
      <View style={styles(theme).root}>
        <View style={styles(theme).buttonGroup}>
          <TouchableHighlight
            style={[styles(theme).button, styles(theme).buttonLeft, isDebit && styles(theme).selectedView]}
            onPress={() => onSideChange(SideEnum.Expense)}
            underlayColor={theme.accentMainColor}
          >
            <View style={styles(theme).textContainer}>
              <Icon
                name="arrow-bottom-right-bold-outline"
                size={25}
                color={isDebit ? theme.accentTextColor : theme.textMainColor}
              />
              <Text style={[styles(theme).text, isDebit && styles(theme).selectedText]}>Expense</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles(theme).button, styles(theme).buttonRight, isCredit && styles(theme).selectedView]}
            onPress={() => onSideChange(SideEnum.Income)}
            underlayColor={theme.accentMainColor}
          >
            <View style={styles(theme).textContainer}>
              <Icon
                name="arrow-top-right-bold-outline"
                size={25}
                color={isCredit ? theme.accentTextColor : theme.textMainColor}
              />
              <Text style={[styles(theme).text, isCredit && styles(theme).selectedText]}>Income</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </KSModal>
  );
};

export const SideModal = withTheme(SideModalBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: 20
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: theme.underlayColor,
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
    backgroundColor: theme.accentMainColor
  },
  selectedText: {
    color: theme.accentTextColor
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginLeft: 15,
    color: theme.accentTextColor,
    ...textStyleHeader(theme)
  }
});
