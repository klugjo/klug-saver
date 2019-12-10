import { connect } from 'react-redux';
import { completeTutorial, setBaseCurrency } from '../../actions';
import { ICurrency, IMainState } from '../../typings';
import Root from './Root';

interface IStateProps {
  baseCurrency: ICurrency;
}

interface IDispatchProps {
  setBaseCurrency: (currency: ICurrency) => void;
  completeTutorial: () => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    baseCurrency: state.baseCurrency
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  setBaseCurrency: (currency: ICurrency) => dispatch(setBaseCurrency(currency)),
  completeTutorial: () => dispatch(completeTutorial)
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Root);
