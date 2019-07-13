import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import 'react-native';
import { Text } from 'react-native';
import { KSAmountText } from '../../../../src/components/KSAmountText';
import { ThemeType } from '../../../../src/constants/common';
import { ISectionHeaderProps, SectionHeader } from '../../../../src/containers/List/Components/SectionHeader';
import { getTheme } from '../../../../src/theme/utils';
import { expense12FoodLunchJan01, expense20TransportTaxiJan01, expense30TransportTaxiJan02 } from '../../../mocks/expenses';

const props: ISectionHeaderProps = {
  section: {
    title: 'fake title',
    data: [
      expense12FoodLunchJan01,
      expense20TransportTaxiJan01,
      expense30TransportTaxiJan02
    ]
  },
  theme: getTheme(ThemeType.Dark)
};

describe('SectionHeader', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<SectionHeader {...props} />);
  });

  it('renders the title', () => {
    expect(wrapper.find(Text).at(0).prop('children')).toBe('fake title');
  });

  it('renders the total', () => {
    expect(wrapper.find(KSAmountText).at(0).prop('amount')).toBe(62);
  });
});
