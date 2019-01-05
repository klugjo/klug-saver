import { categoryMap } from '../containers/Categories/constants';
import lightTheme from './light';

export const getCategoryColor = (name: string): string => {
  return categoryMap[name].color;
}

export const getTheme = () => {
  return lightTheme;
}
