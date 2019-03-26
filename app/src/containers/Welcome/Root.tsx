import React from 'react';
import { withTheme } from '../ThemeProvider/withTheme';
import Hello from './screens/Hello';
import Tutorial from './screens/Tutorial';

const SCREENS = {
  HELLO: 'HELLO',
  TUTORIAL: 'TUTORIAL'
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
  [SCREENS.TUTORIAL]: Tutorial
};

const screenOrder = [
  SCREENS.HELLO,
  SCREENS.TUTORIAL
];

class Root extends React.Component<IRootProps, IRootState>{
  constructor(props: IRootProps) {
    super(props);
    this.state = {
      currentScreenIndex: 0
    }
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
