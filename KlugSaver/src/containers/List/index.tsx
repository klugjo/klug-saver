import { connect } from 'react-redux';

import List from './List';
import { getExpenseList } from '../../actions';
import { IMainState, IExpense } from '../../typings';

interface IStateProps {
  expenses: IExpense[];
}

interface IDispatchProps {
  getExpenses: (payload?: any) => any
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  getExpenses: (payload?: any) => dispatch(getExpenseList(payload))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(List);
