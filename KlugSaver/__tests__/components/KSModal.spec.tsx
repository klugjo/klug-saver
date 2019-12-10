import { shallow } from 'enzyme';
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { IKSModalProps, KSModalBase } from '../../src/components/KSModal';
import { ThemeType } from '../../src/constants/common';
import { getTheme } from '../../src/theme/utils';

const props: IKSModalProps = {
  theme: getTheme(ThemeType.Dark),
  open: true,
  title: 'fake-title',
  close: jest.fn(),
  children: <Text>Child</Text>
};

describe('KSModal', () => {

  it('renders null when open is false', () => {
    const wrapper = shallow(<KSModalBase {...props} open={false} />);
    expect(wrapper.type()).toBe(null);
  });

  it('render the title', () => {
    const wrapper = shallow(<KSModalBase {...props} />);
    expect(wrapper.find(Text).at(0).prop('children')).toBe('fake-title');
  });

  it('render the children', () => {
    const wrapper = shallow(<KSModalBase {...props} />);
    expect(wrapper.find(Text).at(1).prop('children')).toBe('Child');
  });

  it('calls close on chevron click', () => {
    const wrapper = shallow(<KSModalBase {...props} />);
    wrapper.find(TouchableHighlight).at(0).simulate('press');

    expect(props.close).toHaveBeenCalled();
  })
});
