import React from 'react';
import { connect } from 'react-redux';

import Add from './Add';
import { addExpense } from '../../actions';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(addExpense(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
