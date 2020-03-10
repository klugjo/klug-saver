import React from 'react';
import { ICurrency } from '../../typings';
import { withTheme } from '../ThemeProvider/withTheme';
import GettingStarted from './screens/GettingStarted';
import Hello from './screens/Hello';
import HowItWorks from './screens/HowItWorks';
import SetCurrency from './screens/SetCurrency';

const SCREENS = {
  HELLO: 'HELLO',
  SET_CURRENCY: 'SET_CURRENCY',
  GETTING_STARTED: 'GETTING_STARTED',
  HOW_IT_WORKS: 'HOW_IT_WORKS'
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
      return <Hello goNext={this.goNext(SCREENS.SET_CURRENCY)} />;
    } else if (currentScreen === SCREENS.SET_CURRENCY) {
      return <SetCurrency
        goNext={this.goNext(SCREENS.GETTING_STARTED)}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
      />;
    } else if (currentScreen === SCREENS.GETTING_STARTED) {
      return <GettingStarted goNext={completeTutorial} />;
    } else if (currentScreen === SCREENS.HOW_IT_WORKS) {
      return <HowItWorks goNext={completeTutorial} />;
    }

    return null;
  }

  private goNext = (newScreen: string) => () => {
    this.setState({ currentScreen: newScreen });
  };
}

export default withTheme(Root);
