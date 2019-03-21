import 'react-native';
import React from 'react';
import { View, Button, SectionList } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

import List, { IListProps } from '../../../src/containers/List/List';
import * as mockExpenses from '../../mocks/expenses';

const props: IListProps = {
  expenses: [
    mockExpenses.expense12FoodLunchJan01,
    mockExpenses.expense20TransportTaxiJan01,
    mockExpenses.expense12TravelCashJan01,
    mockExpenses.expense15FoodBreakfastJan02,
    mockExpenses.expense30TransportTaxiJan02,
    mockExpenses.expense12FoodLunchJan03,
    mockExpenses.expense20TransportTaxiJan03
  ],
  getExpenses: jest.fn(),
  openDeleteModal: jest.fn()
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

  it('should group the expenses by days', () => {
    expect(wrapper.find(SectionList).props().sections).toEqual([
      {
        title: '01 Jan',
        data: [
          mockExpenses.expense12FoodLunchJan01,
          mockExpenses.expense20TransportTaxiJan01,
          mockExpenses.expense12TravelCashJan01
        ]
      },
      {
        title: '02 Jan',
        data: [
          mockExpenses.expense15FoodBreakfastJan02,
          mockExpenses.expense30TransportTaxiJan02
        ]
      },
      {
        title: '03 Jan',
        data: [
          mockExpenses.expense12FoodLunchJan03,
          mockExpenses.expense20TransportTaxiJan03
        ]
      }
    ]);
  });
});
