import React from 'react';
import moment from 'moment';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAlt from 'react-native-vector-icons/MaterialIcons';

import { getTheme } from '../../../../theme/utils';
import { KSModal } from '../../../../components/KSModal';
import { KSButton } from '../../../../components';
import { toddMMMForHumans } from '../../../../util';
import { textStyleHeader } from '../../../../theme/styles';


export interface IDateModalProps {
  open: boolean;
  close: () => void;
  onDateChange: (date: moment.Moment) => void;
  date: moment.Moment;
};

export const DateModal = ({ open, close, onDateChange, date }: IDateModalProps) => {
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
      <View style={styles.root}>
        <Icon name="calendar-text" size={40} color={getTheme().accentMainColor} />
        <View style={styles.datePicker}>
          <TouchableHighlight
            style={styles.arrowButton}
            onPress={onChangeDays(-1)}
            underlayColor={getTheme().underlayColor}
          >
            <IconAlt name="navigate-before" size={30} color={getTheme().textSecondaryColor} />
          </TouchableHighlight>
          <Text style={styles.dateText}>{toddMMMForHumans(dateToDisplay)}</Text>
          <TouchableHighlight
            style={styles.arrowButton}
            onPress={onChangeDays(1)}
            underlayColor={getTheme().underlayColor}
          >
            <IconAlt name="navigate-next" size={30} color={getTheme().textSecondaryColor} />
          </TouchableHighlight>
        </View>
        <KSButton
          onPress={close}
          text="Done"
          containerStyle={styles.button}
        />
      </View>
    </KSModal>
  );
};

const styles = StyleSheet.create({
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
    ...textStyleHeader,
    flex: 0.6,
    textAlign: 'center'
  },
  button: {
    marginTop: 40
  }
});
