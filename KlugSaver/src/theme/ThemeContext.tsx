import React from 'react';
import lightTheme from './light';
import { IThemeConstants } from '../typings';

const ThemeContext = React.createContext<IThemeConstants>(lightTheme);

export default ThemeContext;