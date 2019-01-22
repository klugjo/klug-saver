import { connect } from 'react-redux';

import Add from './Add';
import { IMainState, IExpense, ICurrency } from '../../typings';
import { addExpense, openCurrencyModal } from '../../actions';

interface IStateProps {
  baseCurrency: ICurrency;
  customCurrency?: ICurrency;
}

interface IDispatchProps {
  addExpense: (expense: IExpense) => void;
  openCurrencyModal: () => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    customCurrency: state.customCurrency,
    baseCurrency: state.baseCurrency
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  addExpense: (payload: IExpense) => dispatch(addExpense(payload)),
  openCurrencyModal: () => dispatch(openCurrencyModal)
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Add);
