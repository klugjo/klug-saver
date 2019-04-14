import React from 'react';
import { withTheme } from '../ThemeProvider/withTheme';
import GettingStarted from './screens/GettingStarted';
import Hello from './screens/Hello';

const SCREENS = {
  HELLO: 'HELLO',
  GETTING_STARTED: 'GETTING_STARTED'
}

interface IRootProps {

}

interface IRootState {
  currentScreenIndex: number;
}

const screensMap: {
  [key: string]: (props: any) => JSX.Element
} = {
  [SCREENS.HELLO]: Hello,
  [SCREENS.GETTING_STARTED]: GettingStarted
};

const screenOrder = [
  SCREENS.HELLO,
  SCREENS.GETTING_STARTED
];

class Root extends React.Component<IRootProps, IRootState>{
  constructor(props: IRootProps) {
    super(props);
    this.state = {
      currentScreenIndex: 0
    };
  }

  render() {
    const { currentScreenIndex } = this.state;
    const Comp = screensMap[screenOrder[currentScreenIndex]];

    return <Comp goNext={this.goNext} />;
  }

  private goNext = () => {

    this.setState({ currentScreenIndex: this.state.currentScreenIndex + 1 });
  };
}

export default withTheme(Root);
