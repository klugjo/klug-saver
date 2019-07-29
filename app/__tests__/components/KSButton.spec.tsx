import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';
import { Text, TouchableHighlight } from 'react-native';
import { IKSButtonProps, KSButtonBase } from '../../src/components/KSButton';
import { ThemeType } from '../../src/constants/common';
import { getTheme } from '../../src/theme/utils';

const props: IKSButtonProps = {
  theme: getTheme(ThemeType.Dark),
  onPress: jest.fn(),
  text: 'Press Me',
  containerStyle: { width: 10 },
  textStyle: { color: '#000' }
};

describe('KSButton', () => {
  it('renders the text', () => {
    const wrapper = shallow(<KSButtonBase {...props} />);
    expect(wrapper.find(Text).at(0).prop('children')).toBe('Press Me');
  });

  it('renders the Buttons styles properly', () => {
    const wrapper = shallow(<KSButtonBase {...props} />);
    expect(wrapper.find(TouchableHighlight).at(0).prop('style')).toEqual([
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
      },
      { width: 10 }
    ]);
  });

  it('renders the Text styles properly', () => {
    const wrapper = shallow(<KSButtonBase {...props} />);
    expect(wrapper.find(Text).at(0).prop('style')).toEqual([
      {
        fontFamily: getTheme(ThemeType.Dark).fontThin,
        fontSize: 20,
        color: getTheme(ThemeType.Dark).textMainColor
      },
      { color: '#000' }
    ]);
  });
});
