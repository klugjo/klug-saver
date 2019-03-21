import React from 'react';
import lightTheme from '../../theme/light';
import { IThemeConstants } from '../../typings';

export interface IKSContext {
  theme: IThemeConstants;
  setTheme: (theme: IThemeConstants) => void;
}

const KSContext = React.createContext<IKSContext>({
  theme: lightTheme,
  setTheme: () => { }
});

export default KSContext;
