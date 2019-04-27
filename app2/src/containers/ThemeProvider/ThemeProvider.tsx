import * as React from 'react';
import { ThemeType } from '../../constants/common';
import darkTheme from '../../theme/dark';
import lightTheme from '../../theme/light';
import KSContext from './KSContext';

interface IThemeProviderProps {
  theme: ThemeType;
}

export default class ThemeProvider extends React.Component<IThemeProviderProps, {}> {
  render() {
    const { theme } = this.props;

    return (
      <KSContext.Provider value={{ theme: theme === ThemeType.Light ? lightTheme : darkTheme, setTheme: () => { } }}>
        {this.props.children}
      </KSContext.Provider>
    )
  }
}
