import { shallow } from 'enzyme';
import React from 'react';
import { FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IKSIconPickerProps, KSIconPicker } from '../../src/components/KSIconPicker';
import { ThemeType } from '../../src/constants/common';
import { ICONS } from '../../src/constants/icons';
import { getTheme } from '../../src/theme/utils';

const props: IKSIconPickerProps = {
  theme: getTheme(ThemeType.Dark),
  open: true,
  icon: '',
  close: jest.fn()
};

describe('KSIconPicker', () => {
  it('renders null when open is false', () => {
    const wrapper = shallow(<KSIconPicker {...props} open={false} />);
    expect(wrapper.type()).toBe(null);
  });

  it('Flatlist data contains all icons', () => {
    const wrapper = shallow(<KSIconPicker {...props} />);
    expect(wrapper.find(FlatList).at(0).props().data).toBe(ICONS);
  });

  it('Flatlist data contains filtered icons when search term entered', () => {
    const wrapper = shallow(<KSIconPicker {...props} />);
    wrapper.setState({ searchText: 'burger' });

    expect(wrapper.find(FlatList).at(0).props().data).toBe(['backburger', 'forwardburger', 'hamburger']);
  });

  it('Flatlist items represent currencies', () => {
    const wrapper = shallow(<KSIconPicker {...props} />);
    const result = shallow((wrapper.instance() as any).renderItem({ item: 'backburger' }));

    expect(result.find(Icon).at(0).prop('name')).toBe('backburger');
    expect(result.find(Text).at(0).prop('children')).toBe('backburger');
  });
});
