import { connect } from 'react-redux'

import { addExpense } from '../actions';
import Add from './Add';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  }
};

const mapDispatchToProps = dispatch => {
  return {
    add: payload => {
      dispatch(addExpense(payload))
    }
  }
};

const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

export default AddContainer;
