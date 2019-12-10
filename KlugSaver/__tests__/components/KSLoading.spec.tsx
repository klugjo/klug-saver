import { shallow } from 'enzyme';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { IKSLoadingProps, KSLoadingBase } from '../../src/components/KSLoading';
import { ThemeType } from '../../src/constants/common';
import { getTheme } from '../../src/theme/utils';

const props: IKSLoadingProps = {
  theme: getTheme(ThemeType.Dark),
  isLoading: true
};

describe('KSLoading', () => {

  it('renders null when isLoading is false', () => {
    const wrapper = shallow(<KSLoadingBase {...props} isLoading={false} />);
    expect(wrapper.type()).toBe(null);
  });

  it('occupies the whole screen', () => {
    const wrapper = shallow(<KSLoadingBase {...props} />);

    expect(wrapper.find(View).at(0).prop('style')).toMatchObject({
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height
    });
  });
});
