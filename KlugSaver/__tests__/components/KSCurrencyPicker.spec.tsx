import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';
import { FlatList, Text } from 'react-native';
import { IKSCurrencyPickerProps, KSCurrencyPicker } from '../../src/components/KSCurrencyPicker';
import { ThemeType } from '../../src/constants/common';
import { CURRENCIES, CURRENCIES_ARRAY } from '../../src/constants/currencies';
import { getTheme } from '../../src/theme/utils';

const props: IKSCurrencyPickerProps = {
  theme: getTheme(ThemeType.Dark),
  open: true,
  currency: CURRENCIES['USD'],
  close: jest.fn()
};

describe('KSCurrencyPicker', () => {
  it('renders null when open is false', () => {
    const wrapper = shallow(<KSCurrencyPicker {...props} open={false} />);
    expect(wrapper.type()).toBe(null);
  });

  it('Flatlist data contains all currencies', () => {
    const wrapper = shallow(<KSCurrencyPicker {...props} />);
    expect(wrapper.find(FlatList).at(0).props().data).toBe(CURRENCIES_ARRAY);
  });

  it('Flatlist items represent currencies', () => {
    const wrapper = shallow(<KSCurrencyPicker {...props} />);
    const result = shallow((wrapper.instance() as any).renderItem({ item: CURRENCIES['KRW'] }));

    expect(result.find(Text).at(0).prop('children')).toBe('KRW');
    expect(result.find(Text).at(1).prop('children')).toBe('South Korean Won');
  });
});
