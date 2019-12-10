import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import 'react-native';
import { SectionList, View } from 'react-native';
import { ThemeType } from '../../../src/constants/common';
import { IListProps, List } from '../../../src/containers/List/List';
import { getTheme } from '../../../src/theme/utils';
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
  openDeleteModal: jest.fn(),
  theme: getTheme(ThemeType.Dark)
};

describe('List Containers', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<List {...props} />);
  });

  it('should render the root View', () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });

  it('should group the expenses by days', () => {
    expect(wrapper.find(SectionList).props().sections).toEqual([
      {
        title: '01 Jan 2018',
        data: [
          mockExpenses.expense12FoodLunchJan01,
          mockExpenses.expense20TransportTaxiJan01,
          mockExpenses.expense12TravelCashJan01
        ]
      },
      {
        title: '02 Jan 2018',
        data: [
          mockExpenses.expense15FoodBreakfastJan02,
          mockExpenses.expense30TransportTaxiJan02
        ]
      },
      {
        title: '03 Jan 2018',
        data: [
          mockExpenses.expense12FoodLunchJan03,
          mockExpenses.expense20TransportTaxiJan03
        ]
      }
    ]);
  });
});
