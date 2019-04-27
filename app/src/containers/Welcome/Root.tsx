import React from 'react';
import { ICurrency } from '../../typings';
import { withTheme } from '../ThemeProvider/withTheme';
import GettingStarted from './screens/GettingStarted';
import Hello from './screens/Hello';
import SetCurrency from './screens/SetCurrency';

const SCREENS = {
  HELLO: 'HELLO',
  GETTING_STARTED: 'GETTING_STARTED',
  SET_CURRENCY: 'SET_CURRENCY'
}

interface IRootProps {
  baseCurrency: ICurrency;
  setBaseCurrency: (currency: ICurrency) => void;
  completeTutorial: () => void;
}

interface IRootState {
  currentScreen: string;
}

class Root extends React.Component<IRootProps, IRootState>{
  constructor(props: IRootProps) {
    super(props);
    this.state = {
      currentScreen: SCREENS.HELLO
    };
  }

  render() {
    const { baseCurrency, setBaseCurrency, completeTutorial } = this.props;
    const { currentScreen } = this.state;

    if (currentScreen === SCREENS.HELLO) {
      return <Hello goNext={this.goNext(SCREENS.GETTING_STARTED)} />;
    } else if (currentScreen === SCREENS.GETTING_STARTED) {
      return <GettingStarted goNext={this.goNext(SCREENS.SET_CURRENCY)} />;
    } else if (currentScreen === SCREENS.SET_CURRENCY) {
      return <SetCurrency
        goNext={completeTutorial}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
      />;
    }

    return null;
  }

  private goNext = (newScreen: string) => () => {
    this.setState({ currentScreen: newScreen });
  };
}

export default withTheme(Root);
