import 'react-native';
import React from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

import SectionHeader, { ISectionHeaderProps } from '../../../../src/containers/List/Components/SectionHeader';
import { expense30TransportTaxiJan02, expense20TransportTaxiJan01, expense12FoodLunchJan01 } from '../../../mocks/expenses';

const props: ISectionHeaderProps = {
  section: {
    title: 'fake title',
    data: [
      expense12FoodLunchJan01,
      expense20TransportTaxiJan01,
      expense30TransportTaxiJan02
    ]
  }
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
    expect(wrapper.find(Text).at(1).prop('children')).toBe('62.00');
  });
});
