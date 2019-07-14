import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';
import { Text } from 'react-native';
import { IKSCardProps, KSCardBase } from '../../src/components/KSCard';
import { ThemeType } from '../../src/constants/common';
import { getTheme } from '../../src/theme/utils';


const props: IKSCardProps = {
  theme: getTheme(ThemeType.Dark),
  text: 'Some title',
  children: <Text>Some Orphan</Text>
};

describe('KSCard', () => {
  it('renders the text', () => {
    const wrapper = shallow(<KSCardBase {...props} />);
    expect(wrapper.find(Text).at(0).prop('children')).toBe('Some title');
  });

  it('renders the children properly', () => {
    const wrapper = shallow(<KSCardBase {...props} />);
    expect(wrapper.find(Text).at(1).prop('children')).toBe('Some Orphan');
  });
});
