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
  baseCurrency: ICurrency;
  setBaseCurrency: (currency: ICurrency) => void;
};

export interface ISetCurrencyState {
  isPickerOpen: boolean;
}

class SetCurrency extends React.Component<ISetCurrencyProps, ISetCurrencyState> {
  constructor(props: ISetCurrencyProps) {
    super(props);

    this.state = {
      isPickerOpen: false
    };
  }

  render() {
    const { baseCurrency, theme, goNext } = this.props;
    const { isPickerOpen } = this.state;

    return <Base goNext={goNext} title="Currency" >
      <View>
        <Text>This is the main currency.</Text>
        <Text>You won't be able change later on.</Text>
        <KSButton
          onPress={this.openPicker}
          text={`${baseCurrency.code} - ${baseCurrency.name}`}
          containerStyle={styles(theme).button}
        />
      </View>
      <KSCurrencyPicker
        open={isPickerOpen}
        close={this.closePicker}
      />
    </Base >;
  }

  openPicker = () => {
    this.setState({ isPickerOpen: true });
  }

  closePicker = () => {
    this.setState({ isPickerOpen: false });
  }
}

export default withTheme(SetCurrency);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgroundMainColor
  },
  button: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.underlayColor,
    padding: 10,
    marginTop: 15
  }
});