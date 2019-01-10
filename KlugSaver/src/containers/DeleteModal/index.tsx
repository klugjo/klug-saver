import { connect } from 'react-redux';

import DeleteModal from './DeleteModal';
import { IMainState, IExpense } from '../../typings';
import { MODALS } from '../../constants';
import { closeDeleteModal, deleteExpense } from '../../actions';

interface IStateProps {
  open: boolean;
  expense?: IExpense;
}

interface IDispatchProps {
  onCancel?: () => void;
  onDelete?: (id: string, from: string) => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    open: state.openModal === MODALS.DELETE,
    expense: state.expenseToDelete
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  onCancel: () => dispatch(closeDeleteModal),
  onDelete: (id: string, from: string) => dispatch(deleteExpense(id, from))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(DeleteModal);
