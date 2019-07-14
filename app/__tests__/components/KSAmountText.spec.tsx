import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';
import { Text } from 'react-native';
import { IKSAmountTextProps, KSAmountTextBase } from '../../src/components/KSAmountText';
import { ThemeType } from '../../src/constants/common';
import { getTheme } from '../../src/theme/utils';


const props: IKSAmountTextProps = {
  theme: getTheme(ThemeType.Dark),
  amount: 1234.56
};

describe('KSAmountText', () => {
  it('renders the amount', () => {
    const wrapper = shallow(<KSAmountTextBase {...props} />);
    expect(wrapper.find(Text).at(0).prop('children')).toBe('1,234.56');
  });

  it('renders the amount as credit when negative number', () => {
    const wrapper = shallow(<KSAmountTextBase {...props} amount={-6666.66} />);
    expect(wrapper.find(Text).at(0).prop('children')).toBe('+ 6,666.66');
  });

  it('passes on custom styles', () => {
    const wrapper = shallow(<KSAmountTextBase {...props} textStyle={{ width: 123 }} />);
    expect(wrapper.find(Text).at(0).prop('style')).toEqual([{ width: 123 }]);
  });
});
