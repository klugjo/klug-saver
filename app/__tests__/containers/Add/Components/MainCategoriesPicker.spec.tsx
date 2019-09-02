import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { categoryList } from '../../../../src/constants/categories';
import { ThemeType } from '../../../../src/constants/common';
import { IMainCategoriesPicker, MainCategoriesPicker } from '../../../../src/containers/Add/Components/Categories/MainCategoriesPicker';
import { getTheme } from '../../../../src/theme/utils';

const props: IMainCategoriesPicker = {
  theme: getTheme(ThemeType.Dark),
  onPickCategory: jest.fn(),
  selectedCategory: categoryList[2],
  categories: categoryList
};

describe('MainCategoriesPicker', () => {
  it('renders all categories', () => {
    const wrapper = shallow(<MainCategoriesPicker {...props} />);
    expect(wrapper.find(Text).length).toBe(8);
    for (let i = 0; i < 8; i++) {
      expect(wrapper.find(Text).at(i).prop('children')).toBe(categoryList[i].title);
      expect(wrapper.find(Icon).at(i).prop('name')).toBe(categoryList[i].icon);
    }
  });
});
