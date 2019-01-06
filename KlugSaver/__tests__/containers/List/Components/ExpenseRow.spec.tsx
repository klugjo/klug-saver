import 'react-native';
import React from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

import ExpenseRow, { IExpenseRowProps } from '../../../../src/containers/List/Components/ExpenseRow';
import { expense20TransportTaxiJan01 } from '../../../mocks/expenses';

const props: IExpenseRowProps = {
  item: expense20TransportTaxiJan01
};

describe('ExpenseRow', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ExpenseRow {...props} />);
  });

  it('renders the right category color', () => {
    expect(wrapper.find(View).at(1)).toHaveStyle('backgroundColor', '#F67280');
  });

  it('renders the category', () => {
    expect(wrapper.find(Text).at(0).prop('children')).toBe('Transport');
  });

  it('renders the sub category', () => {
    expect(wrapper.find(Text).at(1).prop('children')).toBe('Taxi');
  });

  it('renders the formatted amount', () => {
    expect(wrapper.find(Text).at(2).prop('children')).toBe('1,350.00');
  });
});
