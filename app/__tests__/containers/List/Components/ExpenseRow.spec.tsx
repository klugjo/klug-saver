import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import 'react-native';
import { Text, View } from 'react-native';
import { KSAmountText } from '../../../../src/components/KSAmountText';
import { ThemeType } from '../../../../src/constants/common';
import { ExpenseRow, IExpenseRowProps } from '../../../../src/containers/List/Components/ExpenseRow';
import { getTheme } from '../../../../src/theme/utils';
import { expense20TransportTaxiJan01 } from '../../../mocks/expenses';


const props: IExpenseRowProps = {
  item: expense20TransportTaxiJan01,
  openDeleteModal: jest.fn(),
  theme: getTheme(ThemeType.Dark)
};

describe('ExpenseRow', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ExpenseRow {...props} />);
  });

  it('renders the right category color', () => {
    expect(wrapper.find(View).at(1)).toHaveStyle('backgroundColor', 'color');
  });

  it('renders the category', () => {
    expect(wrapper.find(Text).at(0).prop('children')).toBe('Transport');
  });

  it('renders the sub category', () => {
    expect(wrapper.find(Text).at(1).prop('children')).toBe('Taxi');
  });

  it('renders the formatted amount', () => {
    expect(wrapper.find(KSAmountText).at(0).prop('amount')).toBe(20);
  });

  it('should open the modal on press', () => {
    wrapper.simulate('press');

    expect(props.openDeleteModal).toHaveBeenCalled();
  });
});
