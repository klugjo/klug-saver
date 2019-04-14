import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KSButton } from '../../../components';
import KSCurrencyPicker from '../../../components/KSCurrencyPicker';
import { ICurrency, IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';
import Base from './Base';

export interface ISetCurrencyProps {
  goNext: () => {};
  theme: IThemeConstants;
  currency?: ICurrency;
};

export interface ISetCurrencyState {
  isPickerOpen: boolean;
}

class SetCurrency extends React.Component<ISetCurrencyProps, ISetCurrencyState> {
  render() {
    const { currency } = this.props;
    const { isPickerOpen } = this.state;

    return <Base goNext={this.goNext} title="Currency" >
      <View>
        <Text>This is the main currency.</Text>
        <Text>You won't be able change later on.</Text>
        <KSButton
          onPress={this.openPicker}
          title={currency}
        />
      </View>
      <KSCurrencyPicker open={isPickerOpen} />
    </Base >;
  }

  openPicker = () => {

  }

  goNext = () => {
    const { goNext } = this.props;

  }
}

export default withTheme(SetCurrency);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgroundMainColor
  }
});