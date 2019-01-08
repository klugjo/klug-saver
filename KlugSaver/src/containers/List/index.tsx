import { connect } from 'react-redux';

import List from './List';
import { getExpenseList, deleteModal } from '../../actions';
import { IMainState, IExpense } from '../../typings';

interface IStateProps {
  expenses: IExpense[];
}

interface IDispatchProps {
  getExpenses: (payload?: any) => void;
  openDeleteModal: () => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  getExpenses: (payload?: any) => dispatch(getExpenseList(payload)),
  openDeleteModal: () => dispatch(deleteModal)
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(List);
