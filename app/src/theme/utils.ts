import lightTheme from './light';
import darkTheme from './dark';
import { ThemeType } from '../constants/common';

export const getTheme = (theme: ThemeType) => {
  return theme === ThemeType.Dark ?
    darkTheme :
    lightTheme;
}
