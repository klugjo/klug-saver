import { connect } from 'react-redux';

import CurrencyPicker from './CurrencyPicker';
import { IMainState, ICurrency } from '../../typings';
import { MODALS } from '../../constants/common';
import { closeCurrencyModal } from '../../actions';

interface IStateProps {
  open: boolean;
  baseCurrency: ICurrency;
  customCurrency?: ICurrency;
}

interface IDispatchProps {
  close: (currency?: ICurrency) => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    open: state.openModal === MODALS.CURRENCY,
    customCurrency: state.customCurrency,
    baseCurrency: state.baseCurrency
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  close: (currency?: ICurrency) => dispatch(closeCurrencyModal(currency))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(CurrencyPicker);
