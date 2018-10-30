import React from 'react';
import { connect } from 'react-redux';

import List from './List';
import { getExpenseList } from '../../actions';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch) => ({
  getExpenses: () => dispatch(getExpenseList())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
