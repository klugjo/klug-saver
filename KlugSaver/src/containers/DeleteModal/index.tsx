import { connect } from 'react-redux';

import DeleteModal from './DeleteModal';
import { IMainState, IExpense } from '../../typings';
import { MODALS } from '../../constants/common';
import { closeDeleteModal, deleteExpense } from '../../actions';

interface IStateProps {
  open: boolean;
  expense?: IExpense;
}

interface IDispatchProps {
  onClose?: () => void;
  onDelete?: (id: string, from: Date) => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    open: state.openModal === MODALS.DELETE,
    expense: state.expenseToDelete
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  onClose: () => dispatch(closeDeleteModal),
  onDelete: (id: string, from: Date) => dispatch(deleteExpense(id, from))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(DeleteModal);
