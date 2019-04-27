import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { CURRENCIES_ARRAY } from '../constants/currencies';
import { flags } from '../constants/flags';
import { withTheme } from '../containers/ThemeProvider/withTheme';
import { ICurrency, IThemeConstants } from '../typings';
import { KSModal } from './KSModal';

export interface IKSCurrencyPickerProps {
  open: boolean;
  currency: ICurrency;
  close: (currency: ICurrency) => void;
  theme: IThemeConstants;
}

class KSCurrencyPicker extends React.Component<IKSCurrencyPickerProps, {}> {
  public render() {
    const { open, currency, theme } = this.props;

    if (!open) {
      return null;
    }

    return (
      <KSModal
        open={open}
        title="Currency Change"
        close={this.pickCurrency(currency)}
        containerStyle={styles(theme).modalContainerOverride}
      >
        <View style={styles(theme).container}>
          <FlatList
            data={CURRENCIES_ARRAY}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.code}
          />
        </View>
      </KSModal>
    );
  }

  private renderItem = ({ item }: { item: ICurrency }) => {
    const { currency, theme } = this.props;
    const selectedStyle = currency && currency.code === item.code && styles(theme).selected;

    return <TouchableHighlight key={item.code} onPress={this.pickCurrency(item)}>
      <View style={[styles(theme).item, selectedStyle]}>
        <Image
          style={styles(theme).flag}
          source={{ uri: `data:image/png;base64,${flags[item.code]}` }}
        />
        <Text style={[styles(theme).itemCodeText, selectedStyle]}>{item.code}</Text>
        <Text style={[styles(theme).itemNameText, selectedStyle]}>{item.name}</Text>
      </View>
    </TouchableHighlight>;
  }

  private pickCurrency = (item: ICurrency) => () => {
    this.props.close(item);
  }
}

export default withTheme(KSCurrencyPicker);


const styles = (theme: IThemeConstants) => StyleSheet.create({
  modalContainerOverride: {
    paddingHorizontal: 0
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.underlayColor
  },
  selected: {
    backgroundColor: theme.accentMainColor,
    color: theme.accentTextColor
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 25
  },
  itemCodeText: {
    fontSize: 16,
    width: 60,
    fontFamily: theme.fontThin,
    color: theme.textMainColor
  },
  itemNameText: {
    fontSize: 16,
    fontFamily: theme.fontThin,
    color: theme.textMainColor
  }
});
