import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import 'react-native';
import { Text } from 'react-native';
import { KSButton } from '../../../src/components';
import { ThemeType } from '../../../src/constants/common';
import { CURRENCIES } from '../../../src/constants/currencies';
import { DeleteModal, IDeleteModalProps } from '../../../src/containers/DeleteModal/DeleteModal';
import { getTheme } from '../../../src/theme/utils';
import { expense12FoodLunchJan01 } from '../../mocks/expenses';

const props: IDeleteModalProps = {
  open: true,
  expense: expense12FoodLunchJan01,
  onClose: jest.fn(),
  onDelete: jest.fn(),
  theme: getTheme(ThemeType.Dark),
  baseCurrency: CURRENCIES['SGD']
};

describe('DeleteModal', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<DeleteModal {...props} />);
  });

  it('renders the expense category', () => {
    expect(wrapper.find(Text).at(0).prop('children')).toEqual(['Food', ' - ', 'Lunch']);
  });

  it('renders the amount', () => {
    expect(wrapper.find(Text).at(1).prop('children')).toEqual(['SGD', ' ', 12]);
  });

  it('pressing on delete calls the delete and close functions', () => {
    wrapper.find(KSButton).at(0).simulate('press');

    expect(props.onDelete).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('pressing on close calls the close function', () => {
    wrapper.find(KSButton).at(1).simulate('press');

    expect(props.onClose).toHaveBeenCalled();
  });
});
