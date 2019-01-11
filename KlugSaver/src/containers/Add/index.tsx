import { connect } from 'react-redux';

import Add from './Add';
import { IMainState, IExpense } from '../../typings';
import { addExpense } from '../../actions';

interface IStateProps {}

interface IDispatchProps {
  addExpense: (expense: IExpense) => void;
}

const mapStateToProps = (_state: IMainState): IStateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  addExpense: (payload: IExpense) => dispatch(addExpense(payload))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Add);
