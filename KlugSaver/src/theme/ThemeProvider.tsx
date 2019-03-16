import * as React from 'react';
import { store } from '../configureStore';
import { ThemeType } from '../constants/common';
import { IThemeConstants } from '../typings';
import darkTheme from './dark';
import KSContext from './KSContext';
import lightTheme from './light';

interface IThemeProviderState {
  theme: IThemeConstants;
  setTheme: (theme: IThemeConstants) => void;
}

export default class ThemeProvider extends React.Component<{}, IThemeProviderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      setTheme: this.setTheme,
      theme: store.getState().theme === ThemeType.Light ? lightTheme : darkTheme
    };
  }

  setTheme = (theme: IThemeConstants) => {
    this.setState({ theme });
  }

  render() {
    return (
      <KSContext.Provider value={this.state}>
        {this.props.children}
      </KSContext.Provider>
    )
  }
}