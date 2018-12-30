import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import List from './List';
import { getExpenseList, deleteExpense } from '../../actions';

const mapStateToProps = (state: any) => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getExpenses: (payload: any) => dispatch(getExpenseList(payload)),
  removeExpense: (id: string, from: string) => dispatch(deleteExpense(id, from))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
