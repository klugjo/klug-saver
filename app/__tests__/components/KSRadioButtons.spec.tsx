import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IKSRadioButtonsProps, KSRadioButtonsBase } from '../../src/components/KSRadioButtons';
import { ThemeType } from '../../src/constants/common';
import { getTheme } from '../../src/theme/utils';

const props: IKSRadioButtonsProps = {
  theme: getTheme(ThemeType.Dark),
  items: [
    {
      selected: true,
      icon: 'ethereum',
      text: 'ETH',
      onPress: jest.fn()
    },
    {
      selected: false,
      icon: 'bitcoin',
      text: 'BTC',
      onPress: jest.fn()
    }
  ]
};

describe('KSRadioButtons', () => {
  it('renders both the items texts and icons', () => {
    const wrapper = shallow(<KSRadioButtonsBase {...props} />);
    expect(wrapper.find(Text).at(0).prop('children')).toBe('ETH');
    expect(wrapper.find(Text).at(1).prop('children')).toBe('BTC');
    expect(wrapper.find(Icon).at(0).prop('name')).toBe('ethereum');
    expect(wrapper.find(Icon).at(1).prop('name')).toBe('bitcoin');
  });
});
