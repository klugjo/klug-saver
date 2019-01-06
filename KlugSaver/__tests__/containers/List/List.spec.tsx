import 'react-native';
import React from 'react';
import { View, Button } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

import List, { IListProps } from '../../../src/containers/List/List';

const props: IListProps = {
  expenses: [
    {
      category: "Transport",
      createdAt: 1546421635530,
      amount: 13,
      subCategory: "Taxi",
      id: "8617a2a0-0e71-11e9-a82a-15a4b00fb869",
      updatedAt: 1546421635530
    },
    {
      category: "Travel",
      createdAt: 1546687564553,
      amount: 55,
      subCategory: "Transport",
      id: "b0244f90-10dc-11e9-bf40-bb00174c44c0",
      updatedAt: 1546687564553
    },
    {
      category: "Transport",
      createdAt: 1546569977977,
      amount: 16,
      subCategory: "Taxi",
      id: "e914b690-0fca-11e9-af25-792e42360637",
      updatedAt: 1546569977977
    }
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
