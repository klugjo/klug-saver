import React, { useState } from 'react';
import _ from 'lodash';
import { StyleSheet, View, Alert } from 'react-native';
import { KSCard } from '../../../components/KSCard';
import { KSRadioButtons } from '../../../components/KSRadioButtons';
import { IAccount, ICurrency, IThemeConstants } from '../../../typings';
import { KSButton } from '../../../components/KSButton';
import KSCurrencyPicker from '../../../components/KSCurrencyPicker';
import { withTheme } from '../../ThemeProvider/withTheme';
import { CURRENCIES } from '../../../constants/currencies';

export interface IAccountSwitchProps {
  accounts: IAccount[];
  createNewAccount: (ccy: ICurrency) => void;
  switchAccount: (ccy: ICurrency) => void;
  deleteCurrentAccount: () => void;
  baseCurrency: ICurrency;
  theme: IThemeConstants;
};

const AccountSwitchBase = ({
  accounts,
  createNewAccount,
  switchAccount,
  deleteCurrentAccount,
  baseCurrency,
  theme
}: IAccountSwitchProps) => {
  const items = accounts.map(a => ({
    text: a.baseCurrency.code,
    onPress: () => switchAccount(a.baseCurrency),
    selected: false
  }));
  items.push({
    text: baseCurrency.code,
    onPress: () => {},
    selected: true
  });

  const [isOpen, setOpen] = useState<boolean>(false);

  return <KSCard text="MULTI CURRENCY ACCOUNTS">
    <View>
      <KSRadioButtons
        items={_.sortBy(items, i => i.text)}
      />
      <View style={styles(theme).buttons}>
        {accounts.length < 4 && <KSButton 
          text="Add"
          containerStyle={styles(theme).buttonContainer}
          textStyle={styles(theme).buttonText}
          onPress={() => setOpen(true)}
        />}
        {accounts.length > 0 && <KSButton 
          text={`Delete Current (${baseCurrency.code})`}
          containerStyle={styles(theme).buttonContainer}
          textStyle={styles(theme).buttonText}
          onPress={() => {
            Alert.alert(
              'Warning !',
              `Delete the account for ${baseCurrency.code} (${baseCurrency.name})? \n\nThis operation is irreversible!`,
              [
                { text: 'DELETE', onPress: () => deleteCurrentAccount(), style: 'destructive' },
                { text: 'Cancel', onPress: () => { }, style: 'cancel' }
              ],
              { cancelable: false }
            );
          }}
        />}
      </View>
      <KSCurrencyPicker
        open={isOpen}
        currency={CURRENCIES.USD}
        close={(ccy: ICurrency) => {
          setOpen(false);
          if (!accounts.find(a => a.baseCurrency.code === ccy.code)) {
            createNewAccount(ccy);
          } else {
            Alert.alert(`An account for ${ccy.code} already exists`);
          }
        }}
      />
    </View>
  </KSCard>
};

export const AccountSwitch = withTheme(AccountSwitchBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.underlayColor,
    padding: 10,
    marginTop: 15,
    marginHorizontal: 5
  },
  buttonText: {
    fontSize: 16,
    color: theme.textMainColor
  }
});
