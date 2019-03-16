import React from 'react';
import { IThemeConstants } from '../typings';
import lightTheme from './light';

export interface IKSContext {
  theme: IThemeConstants;
  setTheme: (theme: IThemeConstants) => void;
}

const KSContext = React.createContext<IKSContext>({
  theme: lightTheme,
  setTheme: () => { }
});

export default KSContext;