import { connect } from 'react-redux';
import { openDeleteModal } from '../../actions';
import { IExpense, IMainState } from '../../typings';
import List from './List';

interface IStateProps {
  expenses: IExpense[];
}

interface IDispatchProps {
  openDeleteModal: (expense: IExpense) => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  openDeleteModal: (expense: IExpense) => dispatch(openDeleteModal(expense))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(List);
