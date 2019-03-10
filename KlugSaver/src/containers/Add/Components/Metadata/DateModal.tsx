import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAlt from 'react-native-vector-icons/MaterialIcons';
import { KSButton } from '../../../../components';
import { KSModal } from '../../../../components/KSModal';
import { textStyleHeader } from '../../../../theme/styles';
import { IThemeConstants } from '../../../../typings';
import { toddMMMForHumans } from '../../../../util';



export interface IDateModalProps {
  open: boolean;
  close: () => void;
  onDateChange: (date: moment.Moment) => void;
  date: moment.Moment;
};

export const DateModal = ({ open, close, onDateChange, date }: IDateModalProps, theme: IThemeConstants) => {
  const dateToDisplay = date || moment();
  const onChangeDays = (daysOffset: number) => () => {
    const newDate = dateToDisplay.clone();
    newDate.add(daysOffset, 'days');
    onDateChange(newDate);
  };

  return (
    <KSModal
      open={open}
      close={close}
      title="Change Expense Date"
    >
      <View style={styles(theme).root}>
        <Icon name="calendar-text" size={40} color={theme.accentMainColor} />
        <View style={styles(theme).datePicker}>
          <TouchableHighlight
            style={styles(theme).arrowButton}
            onPress={onChangeDays(-1)}
            underlayColor={theme.underlayColor}
          >
            <IconAlt name="navigate-before" size={30} color={theme.textSecondaryColor} />
          </TouchableHighlight>
          <Text style={styles(theme).dateText}>{toddMMMForHumans(dateToDisplay)}</Text>
          <TouchableHighlight
            style={styles(theme).arrowButton}
            onPress={onChangeDays(1)}
            underlayColor={theme.underlayColor}
          >
            <IconAlt name="navigate-next" size={30} color={theme.textSecondaryColor} />
          </TouchableHighlight>
        </View>
        <KSButton
          onPress={close}
          text="Done"
          containerStyle={styles(theme).button}
        />
      </View>
    </KSModal>
  );
};

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: 20
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  dateText: {
    ...textStyleHeader(theme),
    flex: 0.6,
    textAlign: 'center'
  },
  button: {
    marginTop: 40
  }
});
