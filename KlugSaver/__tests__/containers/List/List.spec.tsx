import 'react-native';
import React from 'react';
import { View, Button } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

import List, { IListProps } from '../../../src/containers/List/List';
import { expense12FoodLunchJan01, expense20TransportTaxiJan01, expense30TransportTaxiJan02 } from '../../mocks/expenses';

const props: IListProps = {
  expenses: [
    expense12FoodLunchJan01,
    expense20TransportTaxiJan01,
    expense30TransportTaxiJan02
  ],
  getExpenses: jest.fn()
};

describe('List Containers', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<List {...props} />);
  });

  it('should render the root View', () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });

  it('should call getExpenses on Refresh Button Press', () => {
    wrapper.find(Button).simulate('press');

    expect(props.getExpenses).toHaveBeenCalled();
  });
});
