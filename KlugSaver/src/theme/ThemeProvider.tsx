import * as React from 'react';
import { IThemeConstants } from '../typings';
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
      theme: lightTheme
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